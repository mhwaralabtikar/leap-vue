import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// App configuration
const APP_CONFIG = {
  siteUrl: 'https://leap-pm.com',
  apiUrl: 'https://api.leap-pm.com'
}

export const useAppStore = defineStore('app', () => {
  // State
  const isLoading = ref(true)
  const navbarHeight = ref('76px') // Default height for navbar
  const loadingProgress = ref(0)
  const loadingMessage = ref('')
  const config = ref(APP_CONFIG)
  
  // Actions
  function startLoading(message = '') {
    isLoading.value = true
    if (message) {
      loadingMessage.value = message
    }
    // Reset progress for page transitions
    loadingProgress.value = 0
    simulateProgress()
  }
  
  function stopLoading() {
    // Complete progress first before hiding
    loadingProgress.value = 100
    setTimeout(() => {
      isLoading.value = false
      loadingMessage.value = ''
    }, 300)
  }
  
  function updateLoadingProgress(progress: number, message?: string) {
    loadingProgress.value = Math.min(100, Math.max(0, progress))
    if (message) {
      loadingMessage.value = message
    }
  }
  
  // Simulate loading progress for transitions
  function simulateProgress() {
    const interval = setInterval(() => {
      if (loadingProgress.value < 90) {
        // Slow down as it approaches 90%
        const increment = (90 - loadingProgress.value) / 10
        loadingProgress.value += Math.max(0.5, Math.min(increment, 3))
      } else {
        clearInterval(interval)
      }
    }, 100)
  }
  
  function updateNavbarHeight() {
    // Get the actual height of the navbar element
    const navbar = document.querySelector('nav')
    if (navbar) {
      navbarHeight.value = `${navbar.offsetHeight}px`
    }
  }
  
  // Computed styles for main content
  const mainStyles = computed(() => ({
    paddingTop: navbarHeight.value,
    minHeight: `calc(100vh - ${navbarHeight.value})`
  }))
  
  // Initialize the app
  function initApp() {
    // Initial loading state with progress simulation
    loadingProgress.value = 0
    loadingMessage.value = 'Loading LEAP PM'
    
    // Load app configuration
    // In a real app, this might fetch from an API
    const stages = [
      { progress: 20, message: 'Initializing application...' },
      { progress: 40, message: 'Loading resources...' },
      { progress: 60, message: 'Preparing interface...' },
      { progress: 80, message: 'Getting things ready...' },
      { progress: 95, message: 'Ready!' }
    ]
    
    // Simulate loading stages
    let stageIndex = 0
    const stageInterval = setInterval(() => {
      if (stageIndex < stages.length) {
        const stage = stages[stageIndex]
        updateLoadingProgress(stage.progress, stage.message)
        stageIndex++
      } else {
        clearInterval(stageInterval)
        setTimeout(() => {
          stopLoading()
        }, 500)
      }
    }, 800)
    
    // Update navbar height for scroll padding
    window.addEventListener('scroll', updateNavbarHeight)
    updateNavbarHeight()
  }
  
  return {
    isLoading,
    navbarHeight,
    mainStyles,
    loadingProgress,
    loadingMessage,
    config,
    startLoading,
    stopLoading,
    updateLoadingProgress,
    updateNavbarHeight,
    initApp
  }
}) 