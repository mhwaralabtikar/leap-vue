<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- SEO MetaTags -->
    <Head>
      <title>{{ $t('errors.error.title') }} | LEAP PM</title>
      <meta name="description" :content="$t('errors.error.description')" />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" :href="`${siteUrl}/error`" />
    </Head>
    
    <section class="py-20 md:py-32 flex items-center min-h-screen bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-xl mx-auto text-center">
          <!-- Error symbol -->
          <div class="relative inline-block mb-6">
            <div class="text-9xl font-bold text-red-500/20 dark:text-red-500/10 animate-pulse-slow">!</div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <AlertCircleIcon class="h-24 w-24 text-red-500/70 animate-bounce-gentle" />
              </div>
            </div>
          </div>
          
          <!-- Error message -->
          <h1 class="mt-8 text-2xl md:text-3xl font-bold">{{ $t('errors.error.heading') }}</h1>
          <p class="mt-4 text-muted-foreground md:text-lg max-w-md mx-auto">{{ $t('errors.error.message') }}</p>
          
          <!-- Error details -->
          <div v-if="errorDetails" class="mt-10 bg-card dark:bg-card/50 p-6 rounded-xl border border-border/40 shadow-sm">
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-medium">{{ $t('errors.errorDetails') || 'Error Details' }}</h3>
              <Button 
                @click="showDetails = !showDetails" 
                variant="ghost" 
                size="sm"
                class="h-8 w-8 p-0"
              >
                <ChevronDownIcon v-if="!showDetails" class="h-5 w-5" />
                <ChevronUpIcon v-else class="h-5 w-5" />
              </Button>
            </div>
            <Collapsible :open="showDetails">
              <CollapsibleContent>
                <div class="mt-2 p-3 bg-muted/50 rounded-md text-left text-sm font-mono overflow-x-auto">
                  {{ errorDetails }}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <!-- Options -->
          <div class="mt-10 space-y-2">
            <p class="text-sm font-medium">{{ $t('errors.tryThe') || 'Try the following:' }}</p>
            <ul class="text-sm text-muted-foreground space-y-1 max-w-md mx-auto text-left list-disc list-inside">
              <li>{{ $t('errors.refreshPage') || 'Refresh the page' }}</li>
              <li>{{ $t('errors.checkConnection') || 'Check your internet connection' }}</li>
              <li>{{ $t('errors.tryAgainLater') || 'Try again later' }}</li>
              <li>{{ $t('errors.contactSupportIfPersists') || 'Contact support if the problem persists' }}</li>
            </ul>
          </div>
          
          <!-- Navigation options -->
          <div class="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button
              @click="goBack"
              variant="default"
              class="flex items-center gap-2"
            >
              <ArrowLeftIcon class="h-4 w-4" />
              {{ $t('errors.goBack') || 'Go Back' }}
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
              as="RouterLink"
              to="/contact"
              variant="outline"
              class="flex items-center gap-2"
            >
              <MessageSquareIcon class="h-4 w-4" />
              {{ $t('errors.contactSupport') }}
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { AlertCircleIcon, HomeIcon, MessageSquareIcon, ChevronDownIcon, ChevronUpIcon, ArrowLeftIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { Head } from '@vueuse/head'
import { useAppStore } from '@/stores/app'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const siteUrl = appStore.config?.siteUrl || 'https://leap-pm.com'

const showDetails = ref(false)
const errorDetails = ref<string | null>(null)

// If error details are passed as query parameters, display them
if (route.query.message) {
  errorDetails.value = route.query.message as string
}

function goBack() {
  router.back()
}
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 3s ease-in-out infinite;
}

.animate-bounce-gentle {
  animation: bounce-gentle 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.15;
  }
}

@keyframes bounce-gentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style> 