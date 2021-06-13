<template>
    <n-card :title="product.title" >
        <template #cover>
            <div style="height: 300px; padding: 20px;">
            <img :src="product.image" alt="product_image" />
            </div>
        </template>
        ${{ product.price }}
        <template #action>
            <n-button @click="addToCart" style="width: 100%;" size="large" type="primary" icon-placement="right">
            <template #icon>
                <n-icon>
                    <cart-icon />
                </n-icon>
            </template>
            Add to cart
            </n-button>
        </template>
    </n-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  NCard,
  NButton,
  NIcon,
  useNotification,
} from 'naive-ui';
import { Cart as CartIcon } from '@vicons/ionicons5'

import { useStore } from '../store';
import { Product } from '../api';

export default defineComponent({
    components: {
        NCard,
        NButton,
        NIcon,
        CartIcon
    },
    props: {
        product: {
            required: true,
            type: Object as PropType<Product>
        }
    },
    setup(props) {
        const store = useStore();
        const notification = useNotification()

        const addToCart = () => {
            store.commit('ADD_PRODUCT_TO_CART', props.product.id);
            notification.success({
                content: 'Success',
                meta: 'Product added to cart',
                duration: 3000
            })
        }

        return {
            addToCart
        }
    },
})
</script>

<style>
.n-card {
  height: 500px;
}
</style>