
import type { App } from 'vue'
import { vObserveVisibility } from '../composables/useVisibility'

export default {
  install: (app: App) => {
    app.directive('observe-visibility', vObserveVisibility)
  }
} 