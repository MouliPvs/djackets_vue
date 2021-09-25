<template>
  <div id="wrapper">
    <!-- Navigation Bar With Dark Theme Start-->
    <nav class="navbar is-dark">
      
      <!-- Logo Start -->
      <div class="navbar-brand">
        <!-- Nav Item Djacket -->
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
              <!--Nav Item :  Login Start -->
              <router-link to="/log-in" class="button is-light">Log In</router-link>
              
              <!--Nav Item :  Cart  -->
              <router-link to="/cart" class="button is-success">

              <!-- Cart Icon -->
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Cart</span>
              </router-link>  
              <!--Nav Item :  Login End -->
            </div>
          </div>
          <!-- Nav Items : Buttons End -->
        </div>        
      </div>
      <!-- Navigation Bar Menu End-->
    </nav>
    <!-- Navigation Bar With Dark Theme Ends-->

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
    }
  },
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
