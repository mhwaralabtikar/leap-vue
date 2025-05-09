<template>
  <div 
    v-if="visible" 
    class="fixed inset-0 bg-background/95 dark:bg-background/98 backdrop-blur-sm z-[100] flex flex-col items-center justify-center overflow-hidden"
    :class="{'fade-out': isFading}"
  >
    <!-- Language selector -->
    <div class="absolute top-6 right-6 rtl:right-auto rtl:left-6">
      <button
        @click="toggleLanguage"
        class="flex items-center bg-card border border-border/50 rounded-lg px-3 py-2 text-sm font-medium text-foreground/90 hover:text-primary transition-colors shadow-sm hover:shadow-md"
      >
        <GlobeIcon class="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2 text-primary" />
        <span v-if="localeStore.isRTL">English</span>
        <span v-else>العربية</span>
      </button>
    </div>

    <!-- Simple Loading Animation -->
    <div class="mb-8">
      <div class="relative h-32 w-32 flex items-center justify-center">
        <!-- Spinner -->
        <div class="absolute inset-0 animate-spin-slow">
          <svg viewBox="0 0 100 100" class="h-full w-full">
            <circle 
              cx="50" cy="50" r="45" 
              stroke="hsl(var(--primary))" 
              stroke-width="4" 
              stroke-linecap="round"
              stroke-dasharray="70 180"
              fill="none"
            />
          </svg>
        </div>
        
        <!-- Logo -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-3xl font-bold text-primary transition-all">
            LEAP
          </div>
        </div>
      </div>
    </div>
    
    <!-- Loading message -->
    <div class="text-center mb-6 w-72">
      <p v-if="message" class="text-lg font-medium text-foreground mb-2">{{ message }}</p>
      <p class="text-muted-foreground text-sm">
        {{ $t('loading.message') || 'Please wait while we set things up...' }}
      </p>
    </div>
    
    <!-- Progress bar -->
    <div class="w-72 relative">
      <div class="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          class="h-full bg-primary rounded-full transition-all duration-300"
          :style="{ width: `${progress}%` }"
        />
      </div>
      <p class="text-xs text-muted-foreground mt-2 text-center">
        {{ Math.round(progress) }}%
      </p>
    </div>

    <!-- Version info -->
    <div class="absolute bottom-4 text-xs text-muted-foreground/40 flex items-center gap-2">
      <span>v{{ appVersion }}</span>
      <span class="h-1 w-1 rounded-full bg-muted-foreground/40"></span>
      <span>{{ localeStore.isRTL ? 'العربية' : 'English' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '@/stores/locale'
import { GlobeIcon } from 'lucide-vue-next'

const props = defineProps<{
  visible: boolean
  progress?: number
  message?: string
}>()

const emit = defineEmits<{
  'progress-complete': []
}>()

const { t } = useI18n()
const localeStore = useLocaleStore()
const isFading = ref(false)
const internalProgress = ref(0)
const appVersion = ref('1.0.0')

// Use provided progress or internal progress
const progress = computed(() => props.progress !== undefined ? props.progress : internalProgress.value)

// Toggle language
function toggleLanguage() {
  localeStore.toggleLocale()
}

// Interval for progress simulation
let progressInterval: any = null

watch(() => progress.value, (newProgress) => {
  // Emit event when progress is complete
  if (newProgress >= 100) {
    setTimeout(() => {
      isFading.value = true
      setTimeout(() => {
        emit('progress-complete')
      }, 600)
    }, 500)
  }
})

// Simulate loading progress if no progress prop provided
onMounted(() => {
  if (props.progress === undefined) {
    progressInterval = setInterval(() => {
      if (internalProgress.value < 100) {
        if (internalProgress.value < 20) {
          internalProgress.value += 1.2
        } else if (internalProgress.value < 40) {
          internalProgress.value += 0.8
        } else if (internalProgress.value < 60) {
          internalProgress.value += 0.6
        } else if (internalProgress.value < 80) {
          internalProgress.value += 0.4
        } else if (internalProgress.value < 95) {
          internalProgress.value += 0.2
        } else {
          internalProgress.value += 0.1
        }
      } else {
        clearInterval(progressInterval)
      }
    }, 100)
  }
})

onBeforeUnmount(() => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
})
</script>

<style>
.animate-spin-slow {
  animation: spin 3s linear infinite;
}

.fade-out {
  animation: fadeOut 0.6s forwards;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style> 