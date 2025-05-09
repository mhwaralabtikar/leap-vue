import type { App } from 'vue'
import animation from './animation'

export default {
  install(app: App) {
    // Register the animation directive
    app.directive('animate', animation)
  }
} 