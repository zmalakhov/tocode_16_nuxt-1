<template>
  <newPostForm
    :postEdit="post"
    @submit="onSubmit"
  />
</template>

<script>
    import newPostForm from '@/components/admin/NewPostForm.vue'
    export default {
        components:{ newPostForm },
        layout: 'admin',
        data(){
            return{
                post: {
                    id: 1,
                    title: '1 post',
                    descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
                },
            }
        },
        methods:{
            onSubmit(post){
                console.log('Post Editing');
                console.log(post);
            }
        }
    }
</script>

<style scoped>

</style>
