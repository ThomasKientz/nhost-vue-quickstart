import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { NhostClient } from '@nhost/vue'

const nhost = new NhostClient({
  subdomain: 'bqdvuskfcxsmjqgyxuvq',
  region: 'eu-central-1'
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(nhost)

app.mount('#app')
