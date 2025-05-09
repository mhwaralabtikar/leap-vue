<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- SEO MetaTags -->
    <Head>
      <title>{{ $t('errors.maintenance.title') }} | LEAP PM</title>
      <meta name="description" :content="$t('errors.maintenance.description')" />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" :href="`${siteUrl}/maintenance`" />
    </Head>
    
    <section class="py-20 md:py-32 flex items-center min-h-screen bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-xl mx-auto text-center">
          <!-- Maintenance symbols -->
          <div class="relative inline-block mb-6">
            <div class="flex justify-center items-center">
              <div class="relative">
                <WrenchIcon class="h-16 w-16 text-primary/70 absolute top-0 left-0 animate-spin-slow" />
              </div>
              <div class="h-32 w-32 flex items-center justify-center bg-primary/10 rounded-full">
                <CogIcon class="h-20 w-20 text-primary/60 animate-spin-reverse" />
              </div>
              <div class="relative">
                <HammerIcon class="h-14 w-14 text-primary/70 absolute top-3 right-0 animate-bounce-gentle" />
              </div>
            </div>
          </div>
          
          <!-- Maintenance message -->
          <h1 class="mt-8 text-2xl md:text-3xl font-bold">{{ $t('errors.maintenance.heading') }}</h1>
          <p class="mt-4 text-muted-foreground md:text-lg max-w-md mx-auto">{{ $t('errors.maintenance.message') }}</p>
          
          <!-- Timer -->
          <div class="mt-10 bg-card dark:bg-card/50 p-6 rounded-xl border border-border/40 shadow-sm">
            <div class="grid grid-cols-4 gap-4 max-w-xs mx-auto">
              <div v-for="(unit, index) in timeUnits" :key="index" class="flex flex-col items-center">
                <div class="bg-primary/10 text-primary w-full py-3 rounded-md flex items-center justify-center font-mono font-bold text-2xl">
                  {{ formatTime(unit.value) }}
                </div>
                <span class="text-xs mt-1 text-muted-foreground">{{ unit.label }}</span>
              </div>
            </div>
            
            <p class="mt-4 text-sm font-medium">{{ $t('errors.maintenanceEstimatedTime') || 'Estimated completion time' }}: {{ completionTime }}</p>
            <Progress :value="progressValue" class="mt-3" />
          </div>
          
          <!-- Progress updates -->
          <div class="mt-10">
            <h3 class="text-lg font-medium mb-4">{{ $t('errors.maintenanceUpdates') || 'Maintenance Progress' }}</h3>
            <div class="flex flex-col space-y-4 bg-card dark:bg-card/50 rounded-xl border border-border/40 overflow-hidden">
              <div v-for="(update, index) in updates" :key="index" 
                class="p-4 border-b border-border/40 last:border-0 flex items-start text-left"
                :class="{'bg-primary/5': index === 0}"
              >
                <div class="p-1.5 rounded-full bg-primary/10 text-primary me-3 mt-0.5">
                  <update.icon class="h-4 w-4" />
                </div>
                <div>
                  <div class="flex items-center">
                    <p class="font-medium">{{ update.title }}</p>
                    <Badge v-if="index === 0" variant="outline" class="ms-2 bg-primary/10 text-primary border-primary/20">{{ $t('errors.maintenanceLatest') || 'Latest' }}</Badge>
                  </div>
                  <p class="text-sm text-muted-foreground mt-1">{{ update.message }}</p>
                  <p class="text-xs text-muted-foreground/70 mt-2">{{ update.time }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Navigation options -->
          <div class="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button
              @click="checkStatus"
              variant="default"
              class="flex items-center gap-2 group"
            >
              <RefreshCwIcon class="h-4 w-4 transition-transform group-hover:rotate-180" />
              {{ $t('errors.refreshPage') || 'Refresh Page' }}
            </Button>
            
            <Button
              as="RouterLink"
              to="/"
              variant="outline"
              class="flex items-center gap-2"
            >
              <HomeIcon class="h-4 w-4" />
              {{ $t('errors.backToHome') }}
            </Button>
            
            <Button
              as="a"
              href="mailto:support@leap-pm.com"
              variant="outline"
              class="flex items-center gap-2"
            >
              <MailIcon class="h-4 w-4" />
              {{ $t('errors.contactSupport') }}
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { WrenchIcon, RefreshCwIcon, MailIcon, HomeIcon, CogIcon, HammerIcon, CheckCircleIcon, ClockIcon, ServerIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Head } from '@vueuse/head'
import { useAppStore } from '@/stores/app'

const { t } = useI18n()
const appStore = useAppStore()
const siteUrl = appStore.config?.siteUrl || 'https://leap-pm.com'

// Get current date and add 2 hours to calculate target time
const now = new Date()
const targetTime = new Date(now.getTime() + 2 * 60 * 60 * 1000) // 2 hours from now
const completionTime = ref(targetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))

// Time remaining calculation
const remainingTime = ref({
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
})

// Progress bar value
const progressValue = ref(0)

// Time units for the countdown display
const timeUnits = [
  { label: t('errors.hours') || 'Hours', value: computed(() => remainingTime.value.hours) },
  { label: t('errors.minutes') || 'Minutes', value: computed(() => remainingTime.value.minutes) },
  { label: t('errors.seconds') || 'Seconds', value: computed(() => remainingTime.value.seconds) },
  { label: t('errors.ms') || 'MS', value: computed(() => Math.floor(remainingTime.value.milliseconds / 10)) }
]

// Maintenance updates
const updates = [
  { 
    icon: ServerIcon, 
    title: t('errors.maintenanceUpdateServer') || 'Server Optimization', 
    message: t('errors.maintenanceUpdateServerMessage') || 'Currently optimizing database performance and server resources.',
    time: '5 minutes ago'
  },
  { 
    icon: ClockIcon, 
    title: t('errors.maintenanceUpdateBackup') || 'System Backup', 
    message: t('errors.maintenanceUpdateBackupMessage') || 'Completed full system backup before implementing changes.',
    time: '15 minutes ago'
  },
  { 
    icon: CheckCircleIcon, 
    title: t('errors.maintenanceUpdateStart') || 'Maintenance Started', 
    message: t('errors.maintenanceUpdateStartMessage') || 'Scheduled maintenance has begun. We appreciate your patience.',
    time: '25 minutes ago'
  }
]

// Format time with leading zeros
function formatTime(value) {
  return value.toString().padStart(2, '0')
}

// Update countdown timer
function updateCountdown() {
  const now = new Date().getTime()
  const targetTimeMs = targetTime.getTime()
  const difference = Math.max(0, targetTimeMs - now)
  
  // Calculate time components
  const hours = Math.floor(difference / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)
  const milliseconds = difference % 1000
  
  remainingTime.value = { hours, minutes, seconds, milliseconds }
  
  // Calculate progress (inverse of remaining time percentage)
  const totalDuration = 2 * 60 * 60 * 1000 // 2 hours in milliseconds
  const elapsed = totalDuration - difference
  progressValue.value = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100))
  
  // Continue updating if there's still time remaining
  if (difference > 0) {
    requestAnimationFrame(updateCountdown)
  }
}

// Start countdown on component mount
onMounted(() => {
  updateCountdown()
})

// Check if the site is back online
function checkStatus() {
  window.location.href = '/'
}
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 6s linear infinite;
}

.animate-bounce-gentle {
  animation: bounce-gentle 2s ease-in-out infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes bounce-gentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style> 