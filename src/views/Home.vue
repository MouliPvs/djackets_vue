<template>
  <div class="home">

     <!-- hero component allows you to add a full width banner to your webpage -->
     <!-- hero as the main container -->
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
    
    </section> <!-- Hero End -->

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

          <!-- ThumbNail -->
          <figure class="image mb-4">
            <img src="product.get_thumbnail">
          </figure>

          <h3 class="is-size-4">{{product.name}}</h3>
          <p class="is-size-6 has-text-gery">{{product.price}} Rs</p>
          
        </div>
      </div> <!-- Product Details End -->

    </div> <!-- Latest Products End -->
 
  </div>  <!-- home End -->
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
