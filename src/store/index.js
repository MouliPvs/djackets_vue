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
    // LoadingBar When User Switchs Between Products
    isLoading: false,
  },
  // Synchronus
  mutations: {
    // To Store Things In Local Storage Of The Browser
    intializeStore(state) {
      // Checks localStorage with item called 'cart' exists or not
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } 
      //If localStorage with item called 'cart'  Doesn't exists 
      else {
        // Creates an object with name cart
        localStorage.setItem('cart' , JSON.stringify(state.cart))
      }
    },
    addToCart(state, item){
    /**Input : @item = {product , quantity} 
     * Description : Adds Item To The Cart
    */
       debugger
      /** Checks  whether the item we are trying to add in cart already exists in cart or not  */
      const exists = state.cart.items.filter(i => i.product.id == item.product.id)
      /**If length greater than zero then item already exists in cart */
      if(exists.length){
        /**
         * We first Get The object in the list since we already know that item exists
         * Increase item.quantity By 1 or according to user input
         * We get quantity from (Product.vue : <input type="number" class="input" min="1" v-model="quantity">)  */
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      }
      // If item doesn't exist in cart we push item into cart
      else{
        state.cart.items.push(item)
      }

      //Next Time if you refresh the browser everthing will be stored
      localStorage.setItem('cart' , JSON.stringify(state.cart))
    }
  },
  // Ascyncronous
  actions: {
  },


  modules: {
  }
})
