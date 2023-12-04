import './assets/main.css'
import './assets/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HeaderApp from '@/components/HeaderApp.vue';
import components from '@/components/UI';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.component('HeaderApp', HeaderApp);
app.use(router).mount('#app');