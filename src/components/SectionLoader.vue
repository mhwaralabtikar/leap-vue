<template>
  <div class="relative" :class="{ 'min-h-[200px]': isLoading }">
    <!-- Loading overlay -->
    <Transition name="fade">
      <div 
        v-if="isLoading" 
        class="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-10 rounded-xl"
      >
        <div class="flex items-center justify-center">
          <div class="relative">
            <!-- Spinner -->
            <svg 
              class="w-12 h-12 animate-spin-slow" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                stroke="currentColor" 
                stroke-opacity="0.1" 
                stroke-width="8"
              />
              <path 
                d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50" 
                stroke="currentColor" 
                stroke-width="8" 
                stroke-linecap="round"
                class="text-primary"
              />
            </svg>
            
            <!-- Icon -->
            <component 
              :is="icon" 
              v-if="icon" 
              class="absolute inset-0 flex items-center justify-center w-full h-full p-3 text-primary/70"
            />
          </div>
        </div>
        
        <!-- Loading message -->
        <p v-if="message" class="mt-4 text-sm text-muted-foreground">
          {{ message }}
        </p>
      </div>
    </Transition>
    
    <!-- Content with opacity transition -->
    <div :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }" class="transition-opacity duration-300">
      <slot></slot>
    </div>
    
    <!-- Error state -->
    <Transition name="fade">
      <div 
        v-if="error" 
        class="p-6 bg-destructive/5 border border-destructive/20 rounded-xl flex items-start space-x-4 rtl:space-x-reverse"
      >
        <AlertCircleIcon class="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <div>
          <h3 class="font-medium text-destructive mb-1">{{ error.title || $t('error.loading') || 'Error Loading Content' }}</h3>
          <p class="text-sm text-muted-foreground">{{ error.message || $t('error.tryAgain') || 'Please try again later.' }}</p>
          
          <div v-if="retryable" class="mt-4">
            <Button size="sm" @click="$emit('retry')" class="flex items-center space-x-2 rtl:space-x-reverse">
              <RefreshCwIcon class="h-3.5 w-3.5" />
              <span>{{ $t('error.retry') || 'Retry' }}</span>
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { AlertCircleIcon, RefreshCwIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'

const { t } = useI18n()

// Define the error object type
interface ErrorObject {
  title?: string
  message?: string
}

defineProps<{
  isLoading: boolean
  message?: string
  error?: ErrorObject | null
  retryable?: boolean
  icon?: Component
}>()

defineEmits<{
  retry: []
}>()
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 