<template>
    <!-- Displays Single Product Details  -->
    <div class="page-product">
        <div class="columns is-multiline">
            <!-- Product Details -->
            <div class="column is-9">
                
                <!-- Product Image -->
                <figure class="image mb-6">
                    <img v-bind:src="product.get_image" alt="">
                </figure>

                <!-- Product Name & Description -->
                <h1 class="title">{{product.name}}</h1>
                <p>{{product.description}}</p>                
            </div><!-- Product Details -->

            <!-- Product Information -->
            <div class="column is-3">
                <h2 class="subtitle">Information</h2>
                <p><strong>Price : </strong>{{product.price}}</p>

                <!-- field is a container used for forms -->
                <!-- If you want to attach controls together, use the has-addons modifier on the field container: -->
                <!-- Add-To Cart Functionality -->
                <div class="field has-addons mt-6">

                    <!-- control is a versatile block container meant to enhance single form controls. -->
                    <div class="control">
                        <!-- Product Quantity Input  -->
                        <input type="number" class="input" min="1" v-model="quantity">
                    </div>

                    <!-- Add To Cart Button -->
                    <div class="control">
                        <a class="button is-dark" @click="addToCart">Add To Cart</a>
                    </div>

                </div><!-- Add-To Cart Functionality --> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

export default {
    name: 'Product',
    data(){
        return{
            product: {},
            quantity: 1
        }
    },

    // Used for fetching data
    mounted(){
        this.getProduct()
    },

    methods: {
        /**To make sure that we dont set @isLoading  false before its finsished we use 'async'*/
        async getProduct(){
            /**
             * Gets Single Product Deatisl From Api 
             * Stores It In @product 
             */
            
            // Sets 'is-loading' true while waiting for response
            this.$store.commit('setIsLoading' , true)
            //Routes Should Be Declared As Constatnts
            // stores the category_slug param from the routes in index.js: name:Product, path: '/:category_slug/:product_slug',
            const category_slug = this.$route.params.category_slug

            // stores the product_slug param from the routes i.e index.js: name:Product, path: '/:category_slug/:product_slug',            
            const product_slug = this.$route.params.product_slug

            /**
             * The await operator is used to wait for a Promise. It can only be used inside an async function within
             * only when axios code is executed then @isLoading will be set false
             */
            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then((response) => {
                    this.product = response.data

                    document.title = this.product.name + ' | Djackets'
                })
                .catch((error) => {
                    console.log(error)
                })
            
            // Sets loading false after we get response 
            this.$store.commit('setIsLoading' , false)            
        },
        addToCart() {
            /**Checks If @quantity Is Number or not*/
            if (isNaN(this.quantity) || this.quantity < 1){
                /**If @quantity Is Not A Number We Reset It To 1*/
                this.quantity = 1
            }

            const item = {
                product: this.product,
                quantity: this.quantity
            }
            /**Calls @addToCart method from /store/index.js/
             * Input : item{product , quantity}
             */
            this.$store.commit('addToCart', item)

            /**
             * Pop The Message After Item Is Added To Cart
             */
            toast({
                message: 'The Product Was Added To The Cart',
                // is-success is a class to show green
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                //milliseconds 
                duration: 2000,
                position: 'bottom-right',
            })
        }
    }

}
</script>
