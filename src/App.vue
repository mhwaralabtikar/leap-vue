<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'
import { useAppStore } from './stores/app'
import { useLocaleStore } from './stores/locale'
import { useProjectsStore } from './stores/projects'
import { useI18n } from 'vue-i18n'
import { onMounted, watch, computed, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
import PageProgress from './components/PageProgress.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import { Toaster } from '@/components/ui/sonner'
import { useHashTagHandler } from './composables/useHashTagHandler'

const themeStore = useThemeStore()
const appStore = useAppStore()
const localeStore = useLocaleStore()
const projectsStore = useProjectsStore()
const { locale } = useI18n()
const loadingCompleted = ref(false)

// Initialize hashtag handler
useHashTagHandler()

// Sync i18n locale with theme store
watch(() => locale.value, (newLocale) => {
  if (newLocale !== themeStore.locale) {
    themeStore.setLocale(newLocale)
  }
})

// Handle loading complete event
function handleLoadingComplete() {
  loadingCompleted.value = true
}

// Initialize core app data
async function initAppData() {
  appStore.updateLoadingProgress(60, 'Loading content...')
  
  try {
    // Preload project data to improve user experience
    await projectsStore.fetchProjects()
  } catch (error) {
    console.error('Error preloading app data:', error)
  }
  
  appStore.updateLoadingProgress(80, 'Almost ready...')
}

// Ensure theme and locale are properly initialized
onMounted(async () => {
  localeStore.initLocale()
  
  // Initialize app state
  appStore.initApp()
  
  // Preload core data
  await initAppData()
  
  // Complete loading
  setTimeout(() => {
    appStore.updateLoadingProgress(100, 'Ready!')
    setTimeout(() => {
      appStore.stopLoading()
    }, 300)
  }, 500)
})

// Detect RTL mode for proper styling
const isRtl = computed(() => localeStore.isRTL)
</script>

<template>
  <!-- Main page loader -->
  <LoadingScreen 
    :visible="appStore.isLoading && !loadingCompleted" 
    :progress="appStore.loadingProgress"
    :message="appStore.loadingMessage || $t('loading.appTitle') || 'Loading LEAP PM'"
    @progress-complete="handleLoadingComplete"
  />
  
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
          @before-leave="appStore.startLoading($t('loading.changingPage') || 'Changing page...')" 
          @after-enter="appStore.stopLoading"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer />

    <BackToTop />
    <Toaster />
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