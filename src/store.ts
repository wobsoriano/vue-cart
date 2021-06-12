import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { getAllProducts, getOneProduct, Product } from './api';

export enum Mutation {
    SET_PRODUCTS = 'SET_PRODUCTS',
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    SELECTED_PRODUCT = 'SELECTED_PRODUCT'
}

export enum Action {
    GET_ALL_PRODUCTS = 'getAllProducts',
    GET_ONE_PRODUCT = 'getOneProduct',
}

interface State {
    selectedProduct: null | Product;
    products: Product[];
}

export const store = createStore<State>({
    state () {
      return {
        selectedProduct: null,
        products: []
      }
    },
    mutations: {
        [Mutation.SET_PRODUCTS](state, products) {
            state.products = products;
        },
        [Mutation.ADD_PRODUCT](state, product) {
            state.products = product;
        },
        [Mutation.REMOVE_PRODUCT](state, index) {
            state.products.splice(index, 1);
        },
        [Mutation.SELECTED_PRODUCT](state, product) {
            state.selectedProduct = product
        }
    },
    actions: {
        async getAllProducts({ commit }) {
            const products = await getAllProducts();
            commit(Mutation.SET_PRODUCTS, products);
        },
        async getOneProduct({ commit }, id) {
            const product = await getOneProduct(id);
            commit(Mutation.SELECTED_PRODUCT, product);
        }
    }
});

export const key: InjectionKey<Store<State>> = Symbol();

// To simplify matters, we can define our own composable function to retrieve a typed store.
// https://next.vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function
export function useStore() {
    return baseUseStore(key);
}