<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background decorative elements with improved animation -->
    <div class="absolute -z-10 top-0 start-1/3 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
    <div class="absolute -z-10 bottom-0 end-1/3 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70 animate-float"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16"
           v-observe-visibility="{ callback: onVisibilityChangeHeader, once: true }"
           :class="{ 'opacity-0 translate-y-8': !isHeaderVisible, 'opacity-100 translate-y-0': isHeaderVisible }"
           style="transition: all 700ms ease-out;">
        <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
          {{ $t('features.tagline') || 'Why Choose Us' }}
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('features.title') }}</h2>
        <p class="text-xl text-foreground/70 dark:text-foreground/80">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Dynamic Feature Cards -->
        <div 
          v-for="(feature, index) in featuresStore.features"
          :key="`feature-${feature.id}`"
          class="group"
          v-observe-visibility="{ callback: onVisibilityChange, once: true }"
          :class="{ 'opacity-0 translate-y-8': !isVisible[index], 'opacity-100 translate-y-0': isVisible[index] }"
          :style="`transition-delay: ${index * 200}ms; transition-duration: 700ms;`"
          :data-index="index"
        >
          <div class="relative h-full p-8 bg-white dark:bg-card rounded-xl border border-border/20 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden group">
            <!-- Top colored accent bar -->
            <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-primary-light transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
            
            <!-- Feature icon with hover effect -->
            <div class="bg-primary/10 dark:bg-primary/20 p-4 inline-block rounded-lg mb-6 relative transition-all duration-300 group-hover:bg-primary group-hover:rotate-6">
              <component :is="getIconComponent(feature.icon)" class="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            
            <h3 class="text-xl font-semibold mb-3">{{ $t(feature.titleKey) }}</h3>
            <p class="text-foreground/70 dark:text-foreground/80 mb-4 flex-grow">{{ $t(feature.descriptionKey) }}</p>
            
            <!-- Animated button -->
            <RouterLink :to="feature.link" class="mt-4 inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-light group/btn">
              <span class="relative inline-flex items-center">
                {{ $t('features.learnMore') || 'Learn more' }}
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover/btn:scale-x-100"></span>
              </span>
              <ChevronRightIcon class="h-4 w-4 ms-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </RouterLink>
            
            <!-- Enhanced decorative background shape -->
            <div class="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  LayoutDashboardIcon, 
  UsersIcon, 
  BarChartIcon, 
  ChevronRightIcon,
  ClockIcon,
  LightbulbIcon,
  HeadsetIcon
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useFeaturesStore } from '@/stores/features'

const { t } = useI18n()
const featuresStore = useFeaturesStore()
const isVisible = ref(Array(featuresStore.features.length).fill(false))
const isHeaderVisible = ref(false)

function onVisibilityChange(visible: boolean, entry: IntersectionObserverEntry) {
  if (!entry || !entry.target) return
  
  const index = parseInt(entry.target.getAttribute('data-index') || '0')
  if (isNaN(index) || index < 0 || index >= isVisible.value.length) return
  
  // Create a new array instead of modifying directly
  const newVisibility = [...isVisible.value]
  newVisibility[index] = visible
  isVisible.value = newVisibility
}

function onVisibilityChangeHeader(visible: boolean) {
  isHeaderVisible.value = visible
}

// Function to get the icon component based on string name
function getIconComponent(iconName: string) {
  const iconMap: Record<string, any> = {
    'LayoutDashboardIcon': LayoutDashboardIcon,
    'UsersIcon': UsersIcon,
    'BarChartIcon': BarChartIcon,
    'ClockIcon': ClockIcon,
    'LightbulbIcon': LightbulbIcon,
    'HeadsetIcon': HeadsetIcon
  }
  
  return iconMap[iconName] || LayoutDashboardIcon
}
</script>

<style scoped>
/* Custom animations */
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* RTL support for animations */
[dir="rtl"] .transform.translate-x-1 {
  transform: translateX(-0.25rem);
}

[dir="rtl"] .group-hover\/btn\:translate-x-1 {
  transform: translateX(-0.25rem);
}
</style> 