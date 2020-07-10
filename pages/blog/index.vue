<template>
  <div class="wrapper-content wrapper-content--fixed">
    <intro title="My posts:"/>
    <postsList :posts="posts"></postsList>
  </div>
</template>

<script>
  import intro from '@/components/UI/Intro.vue'
  import postsList from '@/components/Blog/PostsList.vue'

  export default {
    components: {
      intro, postsList,
    },
    data() {
      return {
        posts: [
          {
            id: 1,
            title: '1 post',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
          },
          {
            id: 2,
            title: '2 post',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg',
          },
          {
            id: 3,
            title: '3 post',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'https://dsvf96nw4ftce.cloudfront.net/images/detailed/2/extra-tall-maxi-pet-gate.jpg?t=1527097331',
          },
        ]
      }
    }
  }
</script>

<style></style>
