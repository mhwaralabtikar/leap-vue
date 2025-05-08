import { useI18n } from 'vue-i18n'
import { ref, watchEffect } from 'vue'

/**
 * Updates the document direction and language based on the current locale
 * @param locale The current locale (e.g. 'en', 'ar')
 */
export function updateDirection(locale: string) {
  document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
  document.documentElement.setAttribute('lang', locale)
}

/**
 * Toggle between dark and light modes
 */
export function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.setItem('leap-theme', isDark ? 'dark' : 'light')
}

/**
 * Initialize the theme based on user preference or system preference
 */
export function initializeTheme() {
  const savedTheme = localStorage.getItem('leap-theme')
  
  if (savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

/**
 * Hook to get the current direction
 * @returns An object with the isRTL property
 */
export function useDirection() {
  const { locale } = useI18n()
  const isRTL = ref(locale.value === 'ar')
  
  watchEffect(() => {
    isRTL.value = locale.value === 'ar'
    updateDirection(locale.value)
  })
  
  return { isRTL }
} 