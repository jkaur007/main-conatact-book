import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import components
import ContactList from './components/ContactList.vue'
import ContactForm from './components/ContactForm.vue'
import ContactDetails from './components/ContactDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ContactList },
    { path: '/add', component: ContactForm },
    { path: '/edit/:id', component: ContactForm },
    { path: '/contact/:id', component: ContactDetails }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')