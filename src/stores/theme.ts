import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // State
  const isDark = ref(false)
  const locale = ref('en')
  
  // Computed
  const isRtl = computed(() => locale.value === 'ar')
  
  // Initialize theme from local storage or system preference
  function initTheme() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Default to system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = systemPrefersDark
    }
    
    // Apply theme
    applyTheme()
    
    // Initialize locale
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale) {
      locale.value = savedLocale
    }
    
    // Apply RTL if needed
    applyRtl()
  }
  
  // Toggle dark mode
  function toggleDarkMode() {
    isDark.value = !isDark.value
    applyTheme()
    saveThemePreference()
  }
  
  // Set specific theme
  function setTheme(dark: boolean) {
    isDark.value = dark
    applyTheme()
    saveThemePreference()
  }
  
  // Set locale
  function setLocale(newLocale: string) {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
    applyRtl()
  }
  
  // Apply theme to DOM
  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  // Apply RTL direction
  function applyRtl() {
    if (isRtl.value) {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.classList.add('rtl')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.classList.remove('rtl')
    }
  }
  
  // Save theme preference to local storage
  function saveThemePreference() {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
  
  // Watch for system preference changes
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (!localStorage.getItem('theme')) {
        isDark.value = event.matches
        applyTheme()
      }
    })
  }
  
  // Initialize theme on store creation
  if (typeof window !== 'undefined') {
    initTheme()
  }
  
  return {
    isDark,
    locale,
    isRtl,
    toggleDarkMode,
    setTheme,
    setLocale
  }
}) 