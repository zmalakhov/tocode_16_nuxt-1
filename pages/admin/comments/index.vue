<template>
  <client-only>
    <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
      <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span> {{ comment.name }} </span></td>
        <td><span> {{ comment.text }} </span></td>
        <td>
          <span v-if="comment.publish" class="status true"> Publish </span>
          <span v-else class="status false"> Hiden </span>
        </td>
        <td><span @click="changeStatus(comment)" class="link"> Change Status </span></td>
        <td><span @click="deleteComment(comment)" class="link"> Delete </span></td>
      </tr>
      </tbody>

    </commentTable>
  </client-only>
</template>

<script>
  import axios from 'axios'
  import commentTable from '@/components/admin/CommentTable.vue'

  export default {
    components: {commentTable},
    layout: 'admin',
    data() {
      return {
        comments: []
      }
    },
    mounted() {
      this.loadComments()
    },
    methods: {
      loadComments() {
        axios.get(`https://blog-nuxt-7d8fd.firebaseio.com/comments.json`)
          .then((res) => {

            let commentsArray = []
            Object.keys(res.data).forEach(key => {
              const comment = res.data[key]
              commentsArray.push({...comment, id: key})
            })
            this.comments = commentsArray
            // console.log(commentsArray);
          })
      },

      changeStatus(comment) {
        // console.log(`Change comment id - ${comment.id}`);
        // console.log(comment);
        comment.publish = !comment.publish
        axios
          .put(`https://blog-nuxt-7d8fd.firebaseio.com/comments/${comment.id}.json`, comment)
      },
      deleteComment(comment) {
        // console.log(`Delete comment id - ${id}`);
        axios
          .delete(`https://blog-nuxt-7d8fd.firebaseio.com/comments/${comment.id}.json`)
          .then((res)=>{this.loadComments()})

      },
    }
  }
</script>

<style scoped>

</style>
