<template>
                        <!-- Displays Product Details  -->
    <!--Products Details -->
    <div class="column is-3">

        <!-- A white box to contain other elements -->
        <div class="box">
        
        <!-- Product ThumbNail -->
        <figure class="image mb-4">
            <img v-bind:src="product.get_thumbnail">
        </figure>

        <h3 class="is-size-4">{{product.name}}</h3>
        <p class="is-size-6 has-text-gery">{{product.price}} Rs</p>

        <!-- View Product Details -->
        <!-- Sends get_absolute_url(category_slug/product_slug) to routes in index.js -->
        <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">View Product Details</router-link>
        </div>
        </div> <!--Products Details End -->
</template>

<script>
export default {
    name: 'ProductBox',

    /**
     * Recieves Product Object From Home.vue
     */
    props: {
        product: Object
    },
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