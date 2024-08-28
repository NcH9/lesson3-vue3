import './assets/main.css'
// import Vue from 'vue';

import { createApp } from 'vue'
import App from './App.vue'
import globalComponent from './components/globalComponent.vue'

const app = createApp(App);
app.component('globalComponent', globalComponent);
app.mount('#app');

