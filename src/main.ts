import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { useThemeStore } from './stores/theme'
import visibilityPlugin from './plugins/visibility'

import './style.css'

// Create app instance
const app = createApp(App)

// Register plugins
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(visibilityPlugin)

// Mount app
app.mount('#app')

// Initialize theme after app is mounted
const themeStore = useThemeStore()
themeStore.initTheme()
