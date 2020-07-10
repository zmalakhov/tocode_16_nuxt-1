<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <intro title="My last posts:"/>
    <!--posts-->
  </div>
</template>

<script>
  import promo from '@/components/Promo.vue'
  import intro from '@/components/UI/Intro.vue'

  export default {
    components: {
      promo, intro
    }
  }
</script>

<style></style>
