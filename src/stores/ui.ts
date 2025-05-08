import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // Mobile menu state
  const isMobileMenuOpen = ref(false)
  
  // Active section for highlighting in navbar
  const activeSection = ref('home')
  
  // Search modal state
  const isSearchOpen = ref(false)
  
  // Contact form state
  const isContactFormOpen = ref(false)
  
  // Functions to control UI state
  function openMobileMenu() {
    isMobileMenuOpen.value = true
    document.body.classList.add('overflow-hidden')
  }
  
  function closeMobileMenu() {
    isMobileMenuOpen.value = false
    document.body.classList.remove('overflow-hidden')
  }
  
  function toggleMobileMenu() {
    if (isMobileMenuOpen.value) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }
  
  function setActiveSection(section: string) {
    activeSection.value = section
  }
  
  function openSearch() {
    isSearchOpen.value = true
    document.body.classList.add('overflow-hidden')
  }
  
  function closeSearch() {
    isSearchOpen.value = false
    document.body.classList.remove('overflow-hidden')
  }
  
  function openContactForm() {
    isContactFormOpen.value = true
    document.body.classList.add('overflow-hidden')
  }
  
  function closeContactForm() {
    isContactFormOpen.value = false
    document.body.classList.remove('overflow-hidden')
  }
  
  return {
    isMobileMenuOpen,
    activeSection,
    isSearchOpen,
    isContactFormOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
    setActiveSection,
    openSearch,
    closeSearch,
    openContactForm,
    closeContactForm
  }
}) 