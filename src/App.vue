<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'
import { useAppStore } from './stores/app'
import { useI18n } from 'vue-i18n'
import { onMounted, watch, computed } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
import PageProgress from './components/PageProgress.vue'

const themeStore = useThemeStore()
const appStore = useAppStore()
const { locale } = useI18n()

// Sync i18n locale with theme store
watch(() => locale.value, (newLocale) => {
  if (newLocale !== themeStore.locale) {
    themeStore.setLocale(newLocale)
  }
})

// Ensure theme and locale are properly initialized
onMounted(() => {
  document.documentElement.classList.toggle('rtl', themeStore.locale === 'ar')
  
  // Initialize app state
  appStore.initApp()
})

// Detect RTL mode for proper styling
const isRtl = computed(() => themeStore.locale === 'ar')
</script>

<template>
  <!-- Page loader -->
  <div v-if="appStore.isLoading" class="fixed inset-0 bg-background z-[100] flex items-center justify-center">
    <div class="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
  </div>
  
  <div 
    class="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300" 
    :dir="isRtl ? 'rtl' : 'ltr'"
  >
    <NavBar />
    <PageProgress />
    
    <main :style="appStore.mainStyles" class="flex-grow transition-all">
      <RouterView v-slot="{ Component }">
        <Transition 
          name="page" 
          mode="out-in" 
          @before-leave="appStore.startLoading" 
          @after-enter="appStore.stopLoading"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer />

    <BackToTop />
  </div>
</template>

<style>
/* Global page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* RTL-specific styles */
html.rtl {
  direction: rtl;
  text-align: right;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>