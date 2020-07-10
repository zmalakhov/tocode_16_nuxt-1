<template>
  <section class="new-comment">
    <div class="container">

      <h2 class="title"> New Comment: </h2>

      <!--Message-->
      <Message v-if="message" :message="message"/>

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
  import Message from '@/components/UI/Message.vue'
  import AppButton from '@/components/UI/Controls/Button.vue'
  import AppInput from '@/components/UI/Controls/Input.vue'
  import AppTextArea from '@/components/UI/Controls/TextArea.vue'

  export default {
    components: {AppButton, AppInput, AppTextArea},
    data() {
      return {
        message: null,
        comment: {
          name: '',
          text: '',

        }
      }
    },
    methods: {
      onSubmit() {
        this.message = 'Submited!'

        // Reset
        this.comment.name = ''
        this.comment.text = ''
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

