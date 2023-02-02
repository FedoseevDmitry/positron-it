import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@/scss/normalize/_import-now.scss';
import '@/scss/global.scss';

createApp(App).use(store).mount('#app')
