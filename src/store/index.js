import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const type = {
  SET_IS_AUTHENTICATED:'SET_IS_AUTHENTICATED',
  SET_USER:'SET_USER'
}

const state = {
  isAuthenticated: false, //用于判断用于是否授权
  user: {} //用户信息
}

const getters = {
  isAuthenticated:state => state.isAuthenticated,
  user:state => state.user
}
const mutations = {
  [type.SET_IS_AUTHENTICATED](state,isAuthenticated) {
    if(isAuthenticated) 
      state.isAuthenticated = isAuthenticated
    else
     state.isAuthenticated = false;
  },

  [type.SET_USER](state,user) {
    if(user) 
      state.user = user
    else 
      state.user = {}
  }
}

const actions = {
  setIsAuthenticated ({commit},isAuthenticated){
    commit(type.SET_IS_AUTHENTICATED,isAuthenticated)
  },
  setUser ({commit},user){
    commit(type.SET_USER,user);
  },
  clearUserInfo ({commit}){
    commit(type.SET_IS_AUTHENTICATED,false);
    commit(type.SET_USER,null)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
