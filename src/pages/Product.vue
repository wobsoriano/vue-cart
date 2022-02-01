<template>
  <div class="p-4 max-w-4xl mx-auto">
    <div v-if="!productStore.loaded">
      <CartCardSkeleton />
    </div>
    <div class="card lg:card-side bordered" v-else-if="product">
      <figure class="px-10 pt-10">
        <img
          :src="product.image"
          alt="Card Image"
          class="object-contain w-full h-64"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title" v-text="product.title"></h2>
        <p v-text="product.description"></p>
        <p class="mt-4 text-lg">{{ toCurrency(product.price) }}</p>
        <div class="card-actions">
          <button class="btn btn-primary" @click="cartStore.add(product.id)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-xl text-error">
        No product found with id {{ route.params.productId }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useCartStore } from '../store/cart';
import { useProductStore } from '../store/products';
import type { Product } from '../store/products';
import { toCurrency } from '../shared/utils';

import CartCardSkeleton from '../components/CartCardSkeleton.vue';

const cartStore = useCartStore();
const productStore = useProductStore();

const route = useRoute();

const product = computed<Product>(
  () => productStore.items[route.params.productId as string]
);
</script>
