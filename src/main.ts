import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './routes';
import App from './App.vue';

import './assets/styles/tailwind.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
