<template>
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="contact-form">

        <!--name-->
        <AppInput v-model="comment.name" type="text">Name:</AppInput>

        <!--text-->
        <AppTextArea v-model="comment.text"> Text:</AppTextArea>


        <!--buttons-->
        <div class="controls">
          <AppButton> Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import AppButton from '@/components/UI/Controls/Button.vue'
  import AppInput from '@/components/UI/Controls/Input.vue'
  import AppTextArea from '@/components/UI/Controls/TextArea.vue'

  export default {
    components: {AppButton, AppInput, AppTextArea},
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

