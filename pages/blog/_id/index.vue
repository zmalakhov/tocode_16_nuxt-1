<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
<!--    <p>{{commentsArray}}</p>-->
    <comments :comments="comments" />
    <newComment :postId="$route.params.id" />
  </div>

</template>

<script>
  import axios from 'axios'

  import post from '@/components/Blog/Post.vue'
  import newComment from '@/components/Comments/NewComment.vue'
  import comments from '@/components/Comments/Comments.vue'

  export default {
    components:{ post, comments, newComment },
    head() {
      let title = this.post.title,
        descr = this.post.descr,
        type = 'article',
        img = this.post.img
      return{
        title: title,
        meta:[
          {hid: 'og:title', name: 'og:title', content: title},
          {hid: 'description', name: 'description', content: descr},
          {hid: 'og:description', name: 'og:description', content: descr},
          {hid: 'og:type', name: 'og:type', content: type},
          {hid: 'og:img', name: 'og:img', content: img},

        ]
      }
    },

    async asyncData(context) {
      let [post, comments] = await Promise.all([
        axios.get(`https://blog-nuxt-7d8fd.firebaseio.com/posts/${context.params.id}.json`),
        axios.get(`https://blog-nuxt-7d8fd.firebaseio.com/comments.json`)
      ])

      // let commentsArray = [],
      //     commentsArrayRes = []
      // Object.keys(comments.data).forEach(key => {
      //   commentsArray.push(comments.data[key])
      // })
      //
      // for (let i = 0; i < commentsArray.length; i++) {
      //   if (commentsArray[i].postId === context.params.id && commentsArray[i].publish === true){
      //     commentsArrayRes.push(commentsArray[i])
      //   }
      // }

      let commentsArrayRes = Object.values(comments.data)
        .filter(comment => (comment.postId === context.params.id) && (comment.publish === true))


      return {
        post: post.data,
        // comments: comments.data,
        comments: commentsArrayRes,
      }
    }
    // data() {
    //   return {
    //     post: {
    //       id: 1,
    //       title: '1 post',
    //       descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    //       content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    //       img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
    //     },
    //     comments: [
    //       {name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    //       {name: 'Nick', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    //       {name: 'John', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    //     ]
    //   }
    // }
  }
</script>

<style lang="scss">
.post{
  max-width: 900px;
  margin: 0 auto;
}
  .post-header{
    text-align: center;
    margin-bottom: 30px;
    img{
      margin-bottom: 16px;
      max-width: 400px;
    }
    p{
      color: #999999;
    }
  }
  .post-content{
    text-align: left;
  }
</style>
