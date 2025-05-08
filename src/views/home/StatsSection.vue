<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted, ref, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useThemeStore } from '@/stores/theme'

const { t } = useI18n()
const themeStore = useThemeStore()
const isRtl = computed(() => themeStore.isRtl)

// Stats to be displayed - updated with values more relevant to LEAP PM
const stats = [
  {
    id: 'projects',
    value: 300,
    label: t('stats.projects'),
    prefix: '+',
    suffix: '',
    icon: 'briefcase'
  },
  {
    id: 'clients',
    value: 85,
    label: t('stats.clients'),
    prefix: '+',
    suffix: '',
    icon: 'users'
  },
  {
    id: 'experience',
    value: 20,
    label: t('stats.yearsExperience'),
    prefix: '',
    suffix: '+',
    icon: 'calendar'
  },
  {
    id: 'countries',
    value: 12,
    label: t('stats.countries'),
    prefix: '',
    suffix: '+',
    icon: 'globe'
  }
]

// Refs for animation
const statsRef = ref(null)
const hasAnimated = ref(false)
const displayValues = ref(stats.map(() => 0))

// Observer setup
const { stop } = useIntersectionObserver(
  statsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasAnimated.value) {
      animateNumbers()
      hasAnimated.value = true
      stop()
    }
  },
  { threshold: 0.3 }
)

// Function to animate numbers
function animateNumbers() {
  const duration = 2500 // 2.5 seconds
  const frameDuration = 16 // ~60fps
  const totalFrames = Math.round(duration / frameDuration)
  
  let frame = 0
  
  const timer = setInterval(() => {
    if (frame === totalFrames) {
      clearInterval(timer)
      return
    }
    
    // Calculate current value for each stat
    displayValues.value = stats.map((stat, i) => {
      // Easing function for smoother animation
      const progress = easeOutQuad(frame / totalFrames)
      return Math.floor(progress * stat.value)
    })
    
    frame++
  }, frameDuration)
}

// Easing function
function easeOutQuad(x: number): number {
  return 1 - (1 - x) * (1 - x)
}

// Icon mapping
function getIcon(iconName: string) {
  switch(iconName) {
    case 'briefcase': return 'M20 7h-4V3c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v4H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-3h2v3h-2V4zM5 13h14v6H5v-6z';
    case 'users': return 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z';
    case 'calendar': return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
    case 'globe': return 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2a2 2 0 002-2v-1a2 2 0 012-2h1.945M5 20.5A8.5 8.5 0 1114 12v8.5M5 20.5V13';
    default: return '';
  }
}
</script>

<template>
  <section class="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute -top-20 -end-20 w-80 h-80 bg-primary rounded-full"></div>
      <div class="absolute -bottom-20 -start-20 w-80 h-80 bg-primary rounded-full"></div>
    </div>
    
    <div class="container mx-auto px-4 py-10 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90 px-3 py-1 rounded-full text-sm font-medium mb-4">
          {{ t('stats.title') }}
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('stats.title') }}</h2>
        <p class="text-lg text-foreground/70 dark:text-foreground/60">
          {{ t('stats.subtitle') }}
        </p>
      </div>
      
      <div 
        ref="statsRef" 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
      >
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.id"
          class="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-border/10 dark:border-white/5"
        >
          <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              class="w-8 h-8"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5" 
                :d="getIcon(stat.icon)"
              />
            </svg>
          </div>
          <div class="font-bold text-4xl md:text-5xl mb-3 flex justify-center items-baseline text-primary dark:text-primary/90 tabular-nums">
            <span v-if="stat.prefix" class="ltr:mr-1 rtl:ml-1">{{ stat.prefix }}</span>
            <span>{{ displayValues[index] }}</span>
            <span v-if="stat.suffix" class="ltr:ml-1 rtl:mr-1">{{ stat.suffix }}</span>
          </div>
          <div class="text-foreground/80 dark:text-foreground/70 font-medium text-lg">{{ stat.label }}</div>
        </div>
      </div>
    </div>
    
    <!-- Bottom decoration -->
    <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5 dark:from-primary/10 dark:via-primary/40 dark:to-primary/10"></div>
  </section>
</template>

<style scoped>
/* RTL support */
[dir="rtl"] .ltr\:mr-1 {
  margin-right: 0;
}

[dir="rtl"] .ltr\:ml-1 {
  margin-left: 0;
}

/* Animation support */
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style> 