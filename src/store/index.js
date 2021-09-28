import { createStore } from 'vuex'

export default createStore({
  // Variables or Information
  state: {
    cart: {
      items: [],
    },
    isAuthenticated:false,
    // Used When User Logins
    token: '',
    // LoadingBar When User Switchs From Products
    isLoading: false,
  },
  // Synchronus
  mutations: {
  },
  // Ascyncronous
  actions: {
  },
  modules: {
  }
})
