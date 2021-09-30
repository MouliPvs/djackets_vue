<template>
    <div class="page-category">
        <div class="cloumns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">{{ category.name }}</h2>
            </div>

            <!-- Category Products Details Loop-->
            <div 
            class="column is-3"
            v-for="product in category.products"
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

                <!-- View Product Details -->
                <!-- Sends get_absolute_url(category_slug/product_slug) to routes in index.js -->
                <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">View Product Details</router-link>
                </div>
            </div> <!--Category Products Details Loop End -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

export default {
    name: 'Category',
    data() {
        return{
            category: {
                products: []
            }
        }
    },
    mounted(){
        this.getCategory()
    },
    methods: {
        async getCategory() {
            const categorySlug = this.$route.params.category_slug 

             this.$store.commit('setIsLoading' , true)

            axios
                .get(`/api/v1/products/${categorySlug}`)
                .then(response => {
                   this.category = response.data
                   
                   document.title = this.category.name + '| Djackets'
                })
                .catch(error => {
                    console.log(error)

                    toast({
                        message: 'Something Went Wrong Please Try Again',
                        type: 'is-danger',
                        dismissible: true,
                        pauseOnHover: true,
                        //milliseconds 
                        duration: 2000,
                        position: 'bottom-right',
                    })
                })

                

             this.$store.commit('setIsLoading' , false)
        }
    }
}
</script>