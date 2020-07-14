import axios from 'axios'

export const state = () => ({
  postLoaded: []
})

export const mutations = {
  setPosts(state, posts){
    state.postLoaded = posts
  },
  addPost(state, post) {
    console.log(post);
    state.postLoaded.push(post)
  }
}

export const actions = {
  nuxtServerInit({commit}, context) {
    return axios.get('https://blog-nuxt-7d8fd.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for (const key in res.data) {
          postsArray.push( { ...res.data[key], id: key } )
        }
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },
  addPost({commit}, post) {
    // console.log(post);
    return axios.post('https://blog-nuxt-7d8fd.firebaseio.com/posts.json', post)
      .then(res => {
        // console.log(res);
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  }
}
export const getters = {
  getPostsLoaded (state){
    console.log(state.postLoaded);
    return state.postLoaded
  }
}
