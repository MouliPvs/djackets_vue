<template>
  <div class="home">

     <!-- hero component allows you to add a full width banner to your webpage -->
     <!-- hero as the main container -->
     <!-- Welcome To Djackets -->
    <section class="hero is-medium is-dark mb-6">
    
      <!-- hero-body as a direct child, in which you can put all your content -->
      <div class="hero-body has-text-centered">
    
        <p class="title mb-6">
          Welcome To Djackets
        </p>
    
        <p class="subtitle">
            The Best Jacket Store Online
        </p>
    
      </div> <!-- Hero-Body End -->
    
    </section> <!-- Welcome To Djackets End -->

    <!-- Latest Products -->
    <div class="columns is-multiline">
      
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest Products</h2>
      </div> 

      <!-- Product Details -->
      <div 
      class="column is-3"
      v-for="product in latestProducts"
      v-bind:key="product.id">

        <!-- A white box to contain other elements -->
        <div class="box">
          <!-- <h1>{{product}}</h1> -->
          
          <!-- Product ThumbNail -->
          <figure class="image mb-4">
            <img v-bind:src="product.get_thumbnail">
          </figure>

          <h3 class="is-size-4">{{product.name}}</h3>
          <p class="is-size-6 has-text-gery">{{product.price}} Rs</p>

        </div>
      </div> <!-- Product Details End -->

    </div> <!-- Latest Products End -->
 
  </div>  <!-- home End -->
</template>

<script>
// For getting data from backend
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      latestProducts: []
    }
  },
  components: {
  },

  // Used for fetching data
  mounted() {
    this.getLatestProducts()
  },

  methods: {
    getLatestProducts(){
    // Gets latest products details in the form of array from api/v1/latest-products
      axios
          .get('/api/v1/latest-products')
          .then(response => {
            this.latestProducts = response.data
          })//response
          .catch(error => {
          console.log(error)
          })//error
    }
  }
}
</script>

<style scoped>
  /* Removes empty spaces around the image  */
  .image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }
</style>