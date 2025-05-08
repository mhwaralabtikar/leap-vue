<template>
  <Transition 
    name="fade" 
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 end-6 bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary transition-all z-50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background backdrop-blur-sm"
      :class="{'scale-90 hover:scale-100': !expanded, 'hover:scale-95': expanded}"
      :aria-label="$t('common.backToTop')"
      @mouseenter="expanded = true"
      @mouseleave="expanded = false"
    >
      <div class="flex items-center overflow-hidden" :class="{'max-w-5': !expanded, 'max-w-32 px-2': expanded}">
        <ArrowUpIcon class="h-5 w-5 flex-shrink-0" />
        <span 
          class="ms-2 font-medium text-sm whitespace-nowrap transition-opacity duration-200" 
          :class="{'opacity-0': !expanded, 'opacity-100': expanded}"
        >
          {{ $t('common.backToTop') }}
        </span>
      </div>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { ArrowUpIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'

const { t } = useI18n()
const themeStore = useThemeStore()
const showButton = ref(false)
const expanded = ref(false)
const scrollThreshold = 300
const scrollProgress = ref(0)

function handleScroll() {
  // Show button after threshold
  showButton.value = window.scrollY > scrollThreshold
  
  // Calculate scroll progress (0-100%)
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = Math.min(100, Math.round((window.scrollY / docHeight) * 100))
  
  // Collapse expanded state on scroll
  if (expanded.value) {
    expanded.value = false
  }
}

function scrollToTop() {
  // Add a small animation to the button when clicked
  expanded.value = false
  
  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check scroll position immediately
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Reset expanded state when RTL changes to prevent layout issues
watch(() => themeStore.locale, () => {
  expanded.value = false
})
</script>
