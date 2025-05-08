<template>
  <div class="relative overflow-hidden bg-background">
    <!-- Background Image Layer -->
    <div class="absolute inset-0 z-0">
      <img 
        v-if="backgroundImage" 
        :src="backgroundImage" 
        :alt="title"
        class="w-full h-full object-cover opacity-15 dark:opacity-10"
      />
      <div v-else class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute -top-32 start-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl opacity-50 z-0"></div>
    <div class="absolute bottom-0 start-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    
    <!-- Optional Pattern Overlay -->
    <div v-if="showPattern" class="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
    
    <!-- Content -->
    <div class="container relative mx-auto px-4 py-24 md:py-32 z-20">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Optional Badge -->
        <div v-if="badge" class="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-in slide-in-from-bottom duration-500">
          {{ badge }}
        </div>
        
        <!-- Title -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in slide-in-from-bottom duration-700">
          <slot name="title">{{ title }}</slot>
        </h1>
        
        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-foreground/70 animate-in slide-in-from-bottom duration-700 delay-150">
          <slot name="subtitle">{{ subtitle }}</slot>
        </p>
        
        <!-- Breadcrumbs -->
        <div v-if="breadcrumbs && breadcrumbs.length > 0" class="mt-8 flex justify-center items-center flex-wrap gap-2 animate-in fade-in duration-1000 delay-300">
          <div v-for="(crumb, index) in breadcrumbs" :key="`crumb-${index}`" class="flex items-center text-sm text-muted-foreground">
            <router-link 
              v-if="crumb.path" 
              :to="crumb.path" 
              class="hover:text-primary transition-colors"
            >
              {{ crumb.name }}
            </router-link>
            <span v-else>{{ crumb.name }}</span>
            
            <ChevronRightIcon v-if="index < breadcrumbs.length - 1" class="h-4 w-4 mx-2" />
          </div>
        </div>
        
        <!-- Extra Actions Slot -->
        <div class="mt-8 animate-in fade-in duration-1000 delay-300">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

interface Breadcrumb {
  name: string
  path?: string
}

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: ''
  },
  showPattern: {
    type: Boolean,
    default: true
  },
  breadcrumbs: {
    type: Array as () => Breadcrumb[],
    default: () => []
  }
})
</script>
