import axios from 'axios'

export const state = () => ({
  postLoaded: [],
  commentsLoaded: []
})

export const mutations = {
  setPosts(state, posts) {
    state.postLoaded = posts
  },
  addPost(state, post) {
    // console.log(post);
    state.postLoaded.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postLoaded.findIndex(post => post.id === postEdit.id)
    state.postLoaded[postIndex] = postEdit
  },
  addComment(state, comment) {
    console.log(comment);
    state.commentsLoaded.push(comment)
  }
}

export const actions = {
  nuxtServerInit({commit}, context) {
    return axios.get('https://blog-nuxt-7d8fd.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for (const key in res.data) {
          postsArray.push({...res.data[key], id: key})
        }
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },
  authUser({commit}, authData){
    // standart-1

    const key = 'AIzaSyCANXT_cEuwPhSrNQd1xReq0PZjxqE1NAg'
    // return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`,{
    //   email: authData.email,
    //   password: authData.password,
    //   returnSecureToken: true
    // })


    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      // .then((res) => { commit('setToken', res.data.idToken) })
      // .catch(e => console.log(e))

  },
  addPost({commit}, post) {
    // console.log(post);
    return axios.post('https://blog-nuxt-7d8fd.firebaseio.com/posts.json', post)
      .then(res => {
        // console.log(res);
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  },
  editPost({commit}, post) {
    return axios.put(`https://blog-nuxt-7d8fd.firebaseio.com/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  addComment({commit}, comment){
    return axios.post('https://blog-nuxt-7d8fd.firebaseio.com/comments.json', comment)
      .then(res => {
        // console.log(res);
        commit('addComment', {...comment, id: res.data.name})
      })
      .catch(e => console.log(e))
  },
}
export const getters = {
  getPostsLoaded(state) {
    console.log(state.postLoaded);
    return state.postLoaded
  }
}
