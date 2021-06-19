<template>
    <div class="p-4 max-w-4xl mx-auto">
        <div v-if="!productStore.loaded">
            <h1 class="text-xl">Loading products...</h1>
        </div>
        <div v-else-if="!formattedCart.length">
            <h1 class="text-xl">Cart is empty.</h1>
        </div>
        <div v-else class="grid gap-4 grid-cols-1">
            <CartCard v-for="(cartProduct, index) in formattedCart" :key="index" :cartProduct="cartProduct" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core'
import CartCard from '../components/CartCard.vue'
import { useCartStore } from '../store/cart'
import { useProductStore } from '../store/products'

const cartStore = useCartStore()
const productStore = useProductStore()

const formattedCart = computed(() => cartStore.formattedCart)
</script>
