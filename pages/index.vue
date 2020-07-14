<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro title="My last posts:"/>
    <!--posts-->
    <PostsList :posts="posts"></PostsList>
    <contacts />
  </div>
</template>

<script>
  import promo from '@/components/Promo.vue'
  import contacts from '@/components/Contacts.vue'

  export default {
    components: {
      promo, contacts
    },
    asyncData(context){
      return new Promise((resolve,reject)=>{

        setTimeout(() => {
          resolve({
            posts: [
              {
                id: 1,
                title: '1 post',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
              }
            ]
          })
        }, 1500)

      })
      .then( data => {
        return data
      })
      .catch(e => {
        context.error(e)
      })
    }
    // data() {
    //   return {
    //     posts: [
    //       {
    //         id: 1,
    //         title: '1 post',
    //         descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    //         img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
    //       }
    //     ]
    //   }
    // }
  }
</script>

<style></style>
