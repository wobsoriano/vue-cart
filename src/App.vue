<template>
  <n-notification-provider>
    <n-space vertical size="large" >
      <n-layout>
        <n-layout-header>Vue Card</n-layout-header>
        <n-layout-content content-style="padding: 24px; max-width: 70%; margin: auto;">
          {{ totalAmount }}
          <n-grid cols="1 s:2 m:3 l:3 xl:4 2xl:4" responsive="screen" x-gap="12" y-gap="12">
            <n-grid-item v-for="product in products" :key="product.id">
              <Product :product="product" />
            </n-grid-item>
          </n-grid>
        </n-layout-content>
      </n-layout>
    </n-space>
  </n-notification-provider>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {
  NGrid,
  NGridItem,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NNotificationProvider
} from 'naive-ui';

import Product from './components/Product.vue';
import { useStore } from './store';

export default defineComponent({
  name: 'App',
  components: {
    NGrid,
    NGridItem,
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NNotificationProvider,
    Product
  },
  setup() {
    const store = useStore();

    const products = computed(() => store.state.products);
    const totalAmount = computed(() => store.getters['getTotalAmount']);

    store.dispatch('getAllProducts');

    return {
      products,
      totalAmount
    }
  }
})
</script>
