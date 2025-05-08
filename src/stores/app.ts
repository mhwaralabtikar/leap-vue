import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isLoading = ref(true)
  const navbarHeight = ref('76px') // Default height for navbar
  
  // Actions
  function startLoading() {
    isLoading.value = true
  }
  
  function stopLoading() {
    isLoading.value = false
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
    // Simple page load animation
    setTimeout(() => {
      isLoading.value = false
    }, 500)
    
    // Update navbar height for scroll padding
    window.addEventListener('scroll', updateNavbarHeight)
    updateNavbarHeight()
  }
  
  return {
    isLoading,
    navbarHeight,
    mainStyles,
    startLoading,
    stopLoading,
    updateNavbarHeight,
    initApp
  }
}) 