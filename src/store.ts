import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { getAllProducts, getOneProduct, Product } from './api';

interface CartItem {
    productId: number;
    quantity: number;
}

interface State {
    products: Product[];
    cart: CartItem[];
}

export const store = createStore<State>({
    state () {
      return {
        products: [],
        cart: []
      }
    },
    getters: {
        getTotalAmount(state) {
            let sum = 0;
            for (let x = 0; x < state.cart.length; x++) {
                const product = state.products.find(i => i.id === state.cart[x].productId);
                sum += (product?.price! * state.cart[x].quantity);
            }
            return sum;
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        ADD_PRODUCT_TO_CART(state, productId: number) {
            const index = state.cart.findIndex(i => i.productId === productId);
            if (index === -1) {
                state.cart.push({
                    productId,
                    quantity: 1
                });
            } else {
                state.cart[index].quantity++;
            }
        },
        REMOVE_PRODUCT_FROM_CART(state, index) {
            state.cart.splice(index, 1);
        }
    },
    actions: {
        async getAllProducts({ commit }) {
            const products = await getAllProducts();
            commit('SET_PRODUCTS', products);
        },
        async getOneProduct({ commit }, id: number) {
            const product = await getOneProduct(id);
            commit('SELECTED_PRODUCT', product);
        }
    }
});

export const key: InjectionKey<Store<State>> = Symbol();

// To simplify matters, we can define our own composable function to retrieve a typed store.
// https://next.vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function
export function useStore() {
    return baseUseStore(key);
}