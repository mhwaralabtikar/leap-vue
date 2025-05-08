import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'
import { updateDirection, isRtlLocale } from '../i18n'

export const useThemeStore = defineStore('theme', () => {
  // State
  const isDark = ref(false)
  const locale = ref('en')
  const isRtl = computed(() => isRtlLocale(locale.value))
  const systemPrefersDark = ref(false)
  const prefersReducedMotion = ref(false)
  
  // Initialize store values from system preferences and localStorage
  function initTheme() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Use system preference as fallback
      systemPrefersDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = systemPrefersDark.value
    }
    updateTheme()
    
    // Check for saved locale
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale) {
      locale.value = savedLocale
      updateDirection(savedLocale)
    }
    
    // Check for reduced motion preference
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    updateAccessibilityPreferences()

    // Add listeners for system preference changes
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkModeMediaQuery.addEventListener('change', handleSystemThemeChange)
    
    const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionMediaQuery.addEventListener('change', handleReducedMotionChange)
  }
  
  // Handle system dark mode change
  function handleSystemThemeChange(event: MediaQueryListEvent) {
    systemPrefersDark.value = event.matches
    
    // Only update if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      setDarkMode(event.matches)
    }
  }
  
  // Handle system reduced motion change
  function handleReducedMotionChange(event: MediaQueryListEvent) {
    prefersReducedMotion.value = event.matches
    updateAccessibilityPreferences()
  }

  // Toggle between light and dark mode
  function toggleDarkMode() {
    isDark.value = !isDark.value
    updateTheme()
  }

  // Set dark mode explicitly
  function setDarkMode(value: boolean) {
    isDark.value = value
    updateTheme()
  }

  // Update the document with the current theme
  function updateTheme() {
    // Update classList
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    
    // Dispatch theme change event
    document.dispatchEvent(new CustomEvent('themechange', { 
      detail: { isDark: isDark.value } 
    }))
  }
  
  // Update accessibility preferences
  function updateAccessibilityPreferences() {
    if (prefersReducedMotion.value) {
      document.documentElement.classList.add('reduce-motion')
    } else {
      document.documentElement.classList.remove('reduce-motion')
    }
  }

  // Set the locale and update direction
  function setLocale(newLocale: string) {
    // Skip if same locale
    if (locale.value === newLocale) return
    
    const oldLocale = locale.value
    locale.value = newLocale
    
    // Update document direction
    updateDirection(newLocale)
    
    // Save preference to localStorage
    localStorage.setItem('locale', newLocale)
    
    // Force refresh component layouts that may need it
    document.dispatchEvent(new CustomEvent('localechange', { 
      detail: { 
        locale: newLocale, 
        isRtl: isRtlLocale(newLocale),
        previousLocale: oldLocale,
        directionChanged: isRtlLocale(newLocale) !== isRtlLocale(oldLocale)
      } 
    }))
  }

  // Watch for changes to handle document updates
  watch(isDark, (newValue) => {
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newValue ? '#121212' : '#ffffff')
    }
  })

  return {
    isDark,
    locale,
    isRtl,
    prefersReducedMotion,
    initTheme,
    toggleDarkMode,
    setDarkMode,
    setLocale
  }
}) 