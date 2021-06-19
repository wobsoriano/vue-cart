<template>
    <div class="p-4 max-w-4xl mx-auto">
        <div class="grid gap-4 grid-cols-1">
            <CartCard v-for="(cartProduct, index) in formattedCart" :key="index" :cartProduct="cartProduct" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core'
import CartCard from '../components/CartCard.vue'
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()

const formattedCart = computed(() => cartStore.formattedCart)
</script>
