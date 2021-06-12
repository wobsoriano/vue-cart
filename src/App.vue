<template>
  <n-space vertical size="large" >
    <n-layout>
      <n-layout-header>Vue Card</n-layout-header>
      <n-layout-content content-style="padding: 24px; max-width: 70%; margin: auto;">
        <n-grid cols="1 s:2 m:3 l:3 xl:4 2xl:4" responsive="screen" x-gap="12" y-gap="12">
          <n-grid-item v-for="product in products" :key="product.id">
          <n-card :title="product.title" >
            <template #cover>
              <div style="height: 300px; padding: 20px;">
                <img :src="product.image" />
              </div>
            </template>
            ${{ product.price }}
            <template #action>
              <n-button style="width: 100%;" size="large" type="primary" icon-placement="right">
                <template #icon>
                  <n-icon>
                    <cart-icon />
                  </n-icon>
                </template>
                Add to cart
              </n-button>
            </template>
          </n-card>
          </n-grid-item>
        </n-grid>
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {
  NCard,
  NButton,
  NGrid,
  NGridItem,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NIcon
} from 'naive-ui';
import { Cart as CartIcon } from '@vicons/ionicons5'

import { Action, useStore } from './store';

export default defineComponent({
  name: 'App',
  components: {
    NCard,
    NButton,
    NGrid,
    NGridItem,
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NIcon,
    CartIcon
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    store.dispatch(Action.GET_ALL_PRODUCTS);

    return {
      products
    }
  }
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.n-card {
  height: 500px;
}
</style>
