<template>
    <div class="dropdown dropdown-end">
        <div class="form-control">
            <input type="text" placeholder="Search..." class="input input-ghost" :disabled="!productStore.loaded" v-model="input" />
        </div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-64 text-base-content overflow-y-scroll" style="max-height: 50vh;">
            <li v-for="product in searchResults" :key="product.id">
                <a href="#" @click.prevent="navigate(product.id)" v-text="product.title"></a>
            </li> 
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../store/products";

const productStore = useProductStore()
const router = useRouter()
const input = ref('')

const searchResults = computed(() => {
    if (!input.value || input.value.length < 2) return [];

    return productStore.list.filter(item => {
      return item.title.toLowerCase().includes(input.value.toLowerCase());
    });
})

const navigate = (id: number) => {
    input.value = ''
    router.push(`/product/${id}`)
}
</script>
