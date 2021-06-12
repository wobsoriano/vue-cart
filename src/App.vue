<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  {{ products }}
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Action, useStore } from './store'

export default defineComponent({
  name: 'App',
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
