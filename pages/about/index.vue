<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores culpa dolorum eligendi illum iusto
          provident quae rerum saepe temporibus. Accusamus accusantium adipisci atque blanditiis culpa!</p>

        <intro title="Lorem ipsum dolor sit amet"/>
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
  import intro from '@/components/UI/Intro.vue'

  export default {
    components: {intro}
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
