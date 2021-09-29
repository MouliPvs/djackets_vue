<template>
  <!-- Header Contaning Logo , Login , Cart & Banner -->
  <div id="wrapper">
    <!-- Navigation Bar With Dark Theme Start-->
    <nav class="navbar is-dark">
      
      <!-- Logo Start -->
      <div class="navbar-brand">
        <!-- Nav Item -->
        <router-link to="/" class="navbar-item"><strong>Djackets</strong></router-link>

        <!-- Hamburger Button -->
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!-- Logo Ends -->

      <!-- Navigation Bar Menu Start-->
      <div class="navbar-menu" id="navbar-menu" :class="{'is-active' : showMobileMenu}">

        <!--Nav Itemts At End / right Side -->
        <div class="navbar-end">
          <!-- Nav Item : Summer  -->
          <router-link to="/summer" class="navbar-item">Summer</router-link>

          <!-- Nav Item : Winter  -->
          <router-link to="/winter" class="navbar-item">Winter</router-link>

          <!-- Nav Items : Buttons Start -->
          <div class="navbar-item">
            <div class="buttons">
              <!--Nav Item :  Login -->
              <router-link to="/log-in" class="button is-light">Log In</router-link>
              
              <!--Nav Item :  Cart  -->
              <router-link to="/cart" class="button is-success">

              <!-- Cart Icon -->
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Cart ({{ cartTotalLenght }})</span>
              </router-link>  
              <!--Nav Item :  Cart End -->
            </div>
          </div>
          <!-- Nav Items : Buttons End -->
        </div>        
      </div>
      <!-- Navigation Bar Menu End-->
    </nav>
    <!-- Navigation Bar With Dark Theme Ends-->
    
  <!-- Loading Bar -->
  <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading' : $store.state.isLoading}">
    <div class="lds-dual-ring"></div>
  </div>

    <!-- Home.vue -->
    <section class="section">
      <router-view/>
    </section>

    <!-- Fotter -->
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return{
      showMobileMenu : false,
      cart: {
        items:[],
      },
    }
  },
  beforeCreate(){
    /**
     * declares and knows data properties before render the Vue component
     */

    /**
     * initilizeStore is a method in ../store/index.js/mutations/intializeStore(state) 
     * Intializes The Cart
     */
    this.$store.commit('intializeStore')
  },
  mounted() {
    /**Gets @cart object from ../store/index.js/state */
    this.cart = this.$store.state.cart
    console.log(this.cart)
  },
  computed: {
    cartTotalLenght() {
      /** Return: @totalLength Total No Of Items In Cart */
      let totalLength = 0
      /**Iterates & Counts All Items In The Cart */
      for(let i = 0; i < this.cart.items.length; i++){
        totalLength += this.cart.items[i].quantity
      }

      return totalLength
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';

.lds-dual-ring{
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: "";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }  
}

.is-loading-bar {
  height: 0;
  overflow: hidden;

  -webkit-transition: all 0.3s;
  transition: hidden;

  &.is-loading {
    height: 80px;
  }
}
</style>
