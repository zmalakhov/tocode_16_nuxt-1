<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores culpa dolorum eligendi illum iusto
          provident quae rerum saepe temporibus. Accusamus accusantium adipisci atque blanditiis culpa!</p>

        <Intro title="Lorem ipsum dolor sit amet"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores culpa dolorum eligendi illum iusto
          provident quae rerum saepe temporibus. Accusamus accusantium adipisci atque blanditiis culpa!</p>

        <img src="@/assets/img/about.jpg" alt="about">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores culpa dolorum eligendi illum iusto
          provident quae rerum saepe temporibus. Accusamus accusantium adipisci atque blanditiis culpa!</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head() {
      let title = 'My blog - about',
        descr = 'My blog with Nuxt.js - about',
        type = 'site'
      return{
        title: title,
        meta:[
          {hid: 'og:title', name: 'og:title', content: title},
          {hid: 'description', name: 'description', content: descr},
          {hid: 'og:description', name: 'og:description', content: descr},
          {hid: 'og:type', name: 'og:type', content: type},

        ]
      }
    },

  }
</script>

<style lang="scss">
  .about {
    text-align: center;

    p {
      margin-bottom: 10px;
    }
  }
</style>
