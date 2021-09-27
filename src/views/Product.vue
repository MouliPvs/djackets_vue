<template>
    <div class="page-product">
        <div class="columns is-multiline">
            <!-- Product Details -->
            <div class="column is-9">
                
                <!-- Product Image -->
                <figure class="image mb-6">
                    <img v-bind:src="product.get_image" alt="">
                </figure>

                <!-- Product Name & Title -->
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
                        <a class="button is-dark">Add To Cart</a>
                    </div>

                </div><!-- Add-To Cart Functionality --> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

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
        getProduct(){
            //Routes Should Be Declared As Constatnts
            // stores the category_slug from url
            const category_slug = this.$route.params.category_slug

            // stores the product_slug from url
            const product_slug = this.$route.params.product_slug
        }
    }

}
</script>