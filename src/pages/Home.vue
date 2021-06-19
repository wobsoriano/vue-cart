<template>
  <div class="p-4 max-w-7xl mx-auto">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from '@vue/runtime-core'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../store/products'

const productStore = useProductStore()

const products = computed(() => productStore.list)
</script>
