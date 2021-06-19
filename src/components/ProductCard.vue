<template>
    <div class="card bordered">
        <figure class="px-10 pt-10">
        <img
            :src="product.image"
            alt="Card Image"
            class="object-contain w-full h-64"
        />
        </figure> 
        <div class="card-body">
            <h2 class="card-title">{{ product.title }}</h2>
            <p>{{ toCurrency(product.price) }}</p>
            <div class="justify-end card-actions">
                <button class="btn btn-primary" @click="cartStore.add(product.id)">Add to cart</button>
            </div>
        </div>
    </div>   
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useCartStore } from '../store/cart';
import type { Product } from '../store/products'
import { toCurrency } from '../shared/utils'

const cartStore = useCartStore()

const props = defineProps<{
    product: Product
}>();
</script>