<template>
  <div class="drawer">
    <input id="drawer-input" type="checkbox" class="drawer-toggle" />
    <div class="bg-base-100 text-base-content min-h-screen drawer-content">
      <Nav />
        <router-view></router-view>
    </div>
    <div class="drawer-side">
        <label for="drawer-input" class="drawer-overlay"></label> 
        <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
          <li>
            <router-link to="/">Home</router-link>
          </li> 
          <li>
            <router-link to="/">About</router-link>
          </li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Nav from './components/Nav.vue'
import { usePersistCart } from './shared/hooks';
import { useProductStore } from './store/products';

const productStore = useProductStore()

productStore.fetchAll()
usePersistCart()
</script>
