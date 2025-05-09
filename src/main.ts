import { createApp as createVueApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter } from './router'
import i18n from './i18n'
import visibilityPlugin from './plugins/visibility'
import directives from './directives'
import type { RouterHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

import './style.css'

// Create app function that can be used by both client and server
export function createApp(history: RouterHistory) {
  // Create Pinia store
  const pinia = createPinia()
  
  // Create router with the provided history
  const router = createRouter(history)
  
  // Create head for managing document head
  const head = createHead()
  
  // Create app instance
  const app = createVueApp(App)

  // Register plugins
  app.use(pinia)
  app.use(router)
  app.use(i18n)
  app.use(visibilityPlugin)
  app.use(directives)
  app.use(head)

  return { app, router, pinia, head }
}

// Browser-only code
if (typeof window !== 'undefined') {
  // Import client entry when in browser
  import('./entry-client')
}
