<template>
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="contact-form">

        <label>Name:</label>
        <input v-model="comment.name" type="text">

        <label>Text:</label>
        <textarea v-model="comment.text"></textarea>

        <!--buttons-->
        <div class="controls">
          <AppButton> Submit! </AppButton>
<!--          <button class="btn btnPrimary"> Submit!</button>-->
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import AppButton from '@/components/UI/Controls/Button.vue'
  export default {
    components:{ AppButton },
    data() {
      return {
        comment: {
          name: '',
          text: '',

        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.comment);
      }
    }
  }
</script>

<style lang="scss">
  .new-comment {
    text-align: center;

    .title {
      //color: #ffffff;
    }

    .contact-form {
      max-width: 600px;
      margin: 30px auto;
    }

    .controls {
      margin: 30px;
    }
  }
</style>

