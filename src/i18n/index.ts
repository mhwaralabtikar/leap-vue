import { createI18n } from 'vue-i18n'

// Import language files
import en from './locales/en.json'
import ar from './locales/ar.json'

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ar
  }
})

/**
 * Updates the document direction and CSS variables for RTL/LTR support
 * @param locale - The current locale code
 */
export function updateDirection(locale: string) {
  const isRtl = locale === 'ar'
  
  // Set document direction attributes
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr')
  document.documentElement.setAttribute('lang', locale)
  
  // Update CSS variables for RTL-specific styles
  // Directional properties
  document.documentElement.style.setProperty('--float-right', isRtl ? 'left' : 'right')
  document.documentElement.style.setProperty('--float-left', isRtl ? 'right' : 'left')
  document.documentElement.style.setProperty('--text-align', isRtl ? 'right' : 'left')
  document.documentElement.style.setProperty('--start', isRtl ? 'right' : 'left')
  document.documentElement.style.setProperty('--end', isRtl ? 'left' : 'right')
  
  // Transform and transition values
  document.documentElement.style.setProperty('--translate-dir', isRtl ? '-1' : '1')
  document.documentElement.style.setProperty('--rotate-dir', isRtl ? '-180deg' : '0deg')
  document.documentElement.style.setProperty('--scale-dir', isRtl ? '-1, 1' : '1, 1')
  
  // Logical spacing adjustments
  document.documentElement.style.setProperty('--space-start', isRtl ? 'margin-right' : 'margin-left')
  document.documentElement.style.setProperty('--space-end', isRtl ? 'margin-left' : 'margin-right')
  document.documentElement.style.setProperty('--padding-start', isRtl ? 'padding-right' : 'padding-left')
  document.documentElement.style.setProperty('--padding-end', isRtl ? 'padding-left' : 'padding-right')
  
  // Update direction-specific classes
  if (isRtl) {
    document.body.classList.add('font-arabic')
    document.documentElement.classList.add('rtl')
  } else {
    document.body.classList.remove('font-arabic')
    document.documentElement.classList.remove('rtl')
  }
  
  // Force layout recalculation to prevent rendering issues
  forceReflow()
  
  // Dispatch event for components to handle direction change
  document.dispatchEvent(new CustomEvent('directionchange', { 
    detail: { isRtl, locale }
  }))
}

/**
 * Forces a DOM reflow to ensure CSS changes are applied properly
 * This helps prevent transition/animation issues when switching direction
 */
export function forceReflow() {
  // Temporarily hide the body to prevent flicker
  document.body.style.display = 'none'
  
  // Force browser to recalculate layout
  void document.body.offsetHeight
  
  // Restore the body
  document.body.style.display = ''
}

/**
 * Returns whether the current locale is RTL
 */
export function isRtlLocale(locale: string = i18n.global.locale.value as string): boolean {
  return locale === 'ar'
}

// Initialize direction based on current locale
updateDirection(localStorage.getItem('locale') || 'en')

export default i18n 