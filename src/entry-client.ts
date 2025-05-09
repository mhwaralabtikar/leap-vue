import { createApp } from './main'
import { createWebHistory } from 'vue-router'

// Create app for client-side rendering with browser history
const { app, router, pinia, head } = createApp(createWebHistory())

// Restore Pinia state if available
if (window.__INITIAL_STATE__) {
  pinia.state.value = JSON.parse(window.__INITIAL_STATE__)
}

// Wait for router to be ready before mounting
router.isReady().then(() => {
  app.mount('#app')
})

// Type declaration for window
declare global {
  interface Window {
    __INITIAL_STATE__: string;
  }
} 