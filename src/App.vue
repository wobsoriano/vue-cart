<template>
  <n-notification-provider>
    <n-space vertical size="large" >
      <n-layout :native-scrollbar="false">
        <Header />
        <n-layout-content class="container">
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
import Header from './components/Header.vue';
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
    Product,
    Header
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

<style>
.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  padding-top: 24px;
  padding-bottom: 24px;
}
@media only screen and (min-width: 601px) {
  .container {
    width: 85%;
  }
}
@media only screen and (min-width: 993px) {
  .container {
    width: 70%;
  }
}
</style>
