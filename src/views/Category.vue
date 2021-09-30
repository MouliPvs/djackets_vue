<template>
    <div class="page-category">
        <div class="cloumns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">{{ category.name }}</h2>
            </div>

            <!-- Sends  latestProduct i.e @product object to ./components/ProductBox.vue -->
            <!-- Displays Four Latest Products -->
           <ProductBox
          v-for="product in category.products"
          v-bind:key="product.id"
          v-bind:product="product" />

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

import ProductBox from '@/components/ProductBox'

export default {
    name: 'Category',
    data() {
        return{
            category: {
                products: []
            }
        }
    },
    components: {
        ProductBox
    },
    mounted(){
        this.getCategory()
    },
    /**
     * Watch For Changes When You Switch Between Categories i.e @categorySlug
     */
    watch: {
        $route(to , from) {
            /**
             * Call @getCategory when user changes the category
             */
            if(to.name == 'Category') {
                this.getCategory()
            }
        }
    },
    methods: {
        async getCategory() {
            /**
             * Gets category object(Array Of Hashes) from backend & stores in @category
             */
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