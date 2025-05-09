import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLocaleStore = defineStore('locale', () => {
  // Get i18n instance
  const { locale: i18nLocale } = useI18n()
  
  // State
  const locale = ref(localStorage.getItem('locale') || 'en')
  
  // Computed
  const isRTL = computed(() => locale.value === 'ar')
  
  // Initialize locale
  function initLocale() {
    // Set the i18n locale
    i18nLocale.value = locale.value
    
    // Apply RTL if needed
    applyRTL()
  }
  
  // Set locale
  function setLocale(newLocale: string) {
    locale.value = newLocale
    i18nLocale.value = newLocale
    localStorage.setItem('locale', newLocale)
    applyRTL()
  }
  
  // Toggle locale between English and Arabic
  function toggleLocale() {
    const newLocale = locale.value === 'en' ? 'ar' : 'en'
    setLocale(newLocale)
  }
  
  // Apply RTL direction
  function applyRTL() {
    if (isRTL.value) {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.classList.add('rtl')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.classList.remove('rtl')
    }
    
    // Update CSS variables for RTL-specific styles
    updateRTLCssVariables(isRTL.value)
  }
  
  // Update CSS variables for RTL support
  function updateRTLCssVariables(isRtl: boolean) {
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
  }
  
  // Listen for i18n locale changes
  watch(() => i18nLocale.value, (newLocale) => {
    if (newLocale !== locale.value) {
      locale.value = newLocale
      applyRTL()
    }
  })
  
  return {
    locale,
    isRTL,
    initLocale,
    setLocale,
    toggleLocale
  }
}) 