<template>
  <div class="page-container">
    <!-- Page header with title and optional breadcrumbs -->
    <section 
      v-if="title" 
      class="bg-primary/5 dark:bg-primary/10 py-12 md:py-16 relative overflow-hidden"
    >
      <!-- Background pattern decoration -->
      <div class="absolute inset-0 opacity-10 pattern-dots pattern-primary pattern-size-4 pattern-bg-transparent" aria-hidden="true"></div>
      
      <div class="container mx-auto px-4">
        <div class="max-w-4xl">
          <!-- Breadcrumbs -->
          <div v-if="breadcrumbs && breadcrumbs.length > 0" class="mb-6 flex items-center text-sm text-foreground/70 space-s-2">
            <RouterLink to="/" class="hover:text-primary transition-colors">
              {{ $t('common.home') }}
            </RouterLink>
            
            <span class="opacity-70" v-if="isRtl">/</span>
            <ChevronRightIcon v-else class="h-3 w-3 opacity-50" />
            
            <template v-for="(crumb, index) in breadcrumbs" :key="`crumb-${crumb.path || index}`">
              <template v-if="index < breadcrumbs.length - 1">
                <RouterLink 
                  :to="crumb.path || '/'" 
                  class="hover:text-primary transition-colors"
                >
                  {{ crumb.label }}
                </RouterLink>
                <span class="opacity-70" v-if="isRtl">/</span>
                <ChevronRightIcon v-else class="h-3 w-3 opacity-50" />
              </template>
              <span v-else class="font-medium text-foreground/90">
                {{ crumb.label }}
              </span>
            </template>
          </div>
          
          <!-- Page title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {{ title }}
          </h1>
          
          <!-- Optional subtitle -->
          <p v-if="subtitle" class="mt-4 text-lg text-foreground/80 max-w-3xl">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main content area -->
    <div class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from 'lucide-vue-next'
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

// Props for the layout component
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  breadcrumbs: {
    type: Array as () => Array<{ label: string, path?: string }>,
    default: () => []
  }
})

const themeStore = useThemeStore()
const isRtl = computed(() => themeStore.locale === 'ar')
</script>

<style scoped>
/* Add a dot pattern background decoration */
.pattern-dots {
  background-image: radial-gradient(currentColor 2px, transparent 2px);
}

.pattern-size-4 {
  background-size: 24px 24px;
}
</style> 