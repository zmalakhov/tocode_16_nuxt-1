<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>

      <!--Message-->
      <Message v-if="message" :message="message"/>

      <form @submit.prevent="onSubmit" class="contact-form">

        <!--name-->
        <AppInput v-model="user.name" type="text">Name:</AppInput>

        <!--email-->
        <AppInput v-model="user.email" type="email">Email:</AppInput>

        <!--textarea-->
        <AppTextArea v-model="user.text"> Text:</AppTextArea>

        <!--buttons-->
        <div class="controls">
          <AppButton class="btnWhite"> Submit</AppButton>
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
    components: {Message, AppButton, AppInput, AppTextArea},
    data() {
      return {
        message: null,
        user: {
          name: '',
          email: '',
          text: '',

        }
      }
    },
    methods: {
      onSubmit() {
        this.message = 'Submited!'

        // Reset
        this.user.name = ''
        this.user.email = ''
        this.user.text = ''
      }
    }
  }
</script>

<style lang="scss">
  .contact {
    text-align: center;
    background-color: #444ce0;
    color: #ffffff;

    .title {
      color: #ffffff;
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
