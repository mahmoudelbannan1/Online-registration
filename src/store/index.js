import { createStore } from 'vuex'

export default createStore({
  state: {
    toggle_sidebar: 0,
    active_link: 0,
    token: null,
    user: null,
    userislogged: false
  },
  getters: {
  },
  mutations: {
    togglesidebar(state){
      state.toggle_sidebar=!state.toggle_sidebar
    },
    change_activelink(state , link){
      state.active_link = link
    },
    settoke(state,token){
      state.token = token
      if(token){
        state.userislogged = true
      }
      else{
        state.userislogged = false
      }
    },
    setuser(state,user){
      state.user= user
    }
  },
  actions: {
    settoken(commit,token){
      commit('settoken',token)
    },
    setuser(commit,user){
      commit('setuser',user)
    }
  },
  modules: {
  }
})
