<template>
                              <!-- Displays All Latest Products -->
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

      <!-- Sends  latestProduct i.e @product object to ./components/ProductBox.vue -->
      <!-- Displays Four Latest Products -->
      <ProductBox
          v-for="product in latestProducts"
          v-bind:key="product.id"
          v-bind:product="product" />

    </div> <!-- Latest Products End -->
 
  </div>  <!-- home End -->
</template>

<script>
// For getting data from backend
import axios from 'axios'

import ProductBox from '@/components/ProductBox'

export default {
  name: 'Home',
  data() {
    return {
      latestProducts: []
    }
  },
  components: {
    ProductBox
  },

  // Used for fetching data
  mounted() {
    this.getLatestProducts()

    document.title = 'Home | Djackets'
  },

  methods: {
    /**To make sure that we dont set @isLoading  false before its finsished we use 'async'*/
    async getLatestProducts(){
      /** 
       * Gets latest products details in the form of array from api/v1/latest-products
      */
      
      // Sets loading true while waiting for response
      this.$store.commit('setIsLoading' , true)
      /**
         * The await operator is used to wait for a Promise. It can only be used inside an async function within
         * only when axios code is executed then @isLoading will be set false
       */        
      await axios
          .get('/api/v1/latest-products')
          .then(response => {

            // response.data gives array of hashes
            this.latestProducts = response.data
          })//response
          .catch(error => {
          console.log(error)
          })//error
      this.$store.commit('setIsLoading' , false)          
    }
  }
}
</script>

<style scoped>
</style>