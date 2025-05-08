<template>
  <section class="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute -end-32 -top-32 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute -start-32 -bottom-32 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
          Why Choose Us
        </div>
        <h2 class="text-3xl md:text-xl font-bold mb-4">{{ $t('features.title') }}</h2>
        <p class="text-xl text-foreground/70 dark:text-foreground/60">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div 
          class="bg-white dark:bg-card rounded-lg p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2 border border-transparent dark:border-border/20"
          v-observe-visibility="{ callback: onVisibilityChange, once: true }"
          :class="{ 'opacity-0 translate-y-8': !isVisible[0], 'opacity-100 translate-y-0': isVisible[0] }"
          data-index="0"
        >
          <div class="bg-primary/10 dark:bg-primary/20 p-4 inline-block rounded-lg mb-6">
            <LayoutDashboardIcon class="h-8 w-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ $t('features.feature1.title') }}</h3>
          <p class="text-foreground/70 dark:text-foreground/60">{{ $t('features.feature1.description') }}</p>
          <a href="#" class="inline-flex items-center mt-4 text-primary hover:text-primary/80 group">
            Learn more
            <ChevronRightIcon class="h-4 w-4 ms-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <!-- Feature 2 -->
        <div 
          class="bg-white dark:bg-card rounded-lg p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2 border border-transparent dark:border-border/20"
          v-observe-visibility="{ callback: onVisibilityChange, once: true }"
          :class="{ 'opacity-0 translate-y-8': !isVisible[1], 'opacity-100 translate-y-0': isVisible[1] }"
          style="transition-delay: 200ms"
          data-index="1"
        >
          <div class="bg-primary/10 dark:bg-primary/20 p-4 inline-block rounded-lg mb-6">
            <UsersIcon class="h-8 w-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ $t('features.feature2.title') }}</h3>
          <p class="text-foreground/70 dark:text-foreground/60">{{ $t('features.feature2.description') }}</p>
          <a href="#" class="inline-flex items-center mt-4 text-primary hover:text-primary/80 group">
            Learn more
            <ChevronRightIcon class="h-4 w-4 ms-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <!-- Feature 3 -->
        <div 
          class="bg-white dark:bg-card rounded-lg p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2 border border-transparent dark:border-border/20"
          v-observe-visibility="{ callback: onVisibilityChange, once: true }"
          :class="{ 'opacity-0 translate-y-8': !isVisible[2], 'opacity-100 translate-y-0': isVisible[2] }"
          style="transition-delay: 400ms"
          data-index="2"
        >
          <div class="bg-primary/10 dark:bg-primary/20 p-4 inline-block rounded-lg mb-6">
            <BarChartIcon class="h-8 w-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ $t('features.feature3.title') }}</h3>
          <p class="text-foreground/70 dark:text-foreground/60">{{ $t('features.feature3.description') }}</p>
          <a href="#" class="inline-flex items-center mt-4 text-primary hover:text-primary/80 group">
            Learn more
            <ChevronRightIcon class="h-4 w-4 ms-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { LayoutDashboardIcon, UsersIcon, BarChartIcon, ChevronRightIcon } from 'lucide-vue-next'

const { t } = useI18n()
const isVisible = ref([false, false, false])

function onVisibilityChange(visible: boolean, entry: IntersectionObserverEntry) {
  if (!entry || !entry.target) return
  
  const index = parseInt(entry.target.getAttribute('data-index') || '0')
  if (isNaN(index) || index < 0 || index >= isVisible.value.length) return
  
  // Create a new array instead of modifying directly
  const newVisibility = [...isVisible.value]
  newVisibility[index] = visible
  isVisible.value = newVisibility
}
</script> 