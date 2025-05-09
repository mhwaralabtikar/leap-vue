<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- SEO MetaTags -->
    <Head>
      <title>{{ $t('errors.notFound.title') }} | LEAP PM</title>
      <meta name="description" :content="$t('errors.notFound.description')" />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" :href="`${siteUrl}/404`" />
    </Head>
    
    <section class="py-20 md:py-32 flex items-center min-h-screen bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-xl mx-auto text-center">
          <!-- Error graphic -->
          <div class="relative inline-block mb-6">
            <div class="text-9xl font-bold text-primary/20 dark:text-primary/10 animate-pulse-slow">404</div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <FileSearchIcon class="h-24 w-24 text-primary/70 animate-float" />
                <div class="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full animate-ping-slow"></div>
              </div>
            </div>
          </div>
          
          <!-- Error message -->
          <h1 class="mt-8 text-2xl md:text-3xl font-bold">{{ $t('errors.notFound.heading') }}</h1>
          <p class="mt-4 text-muted-foreground md:text-lg max-w-md mx-auto">{{ $t('errors.notFound.message') }}</p>
          
          <!-- Search box -->
          <div class="mt-10 bg-card dark:bg-card/50 p-6 rounded-xl border border-border/40 shadow-sm transition-all hover:shadow-md">
            <p class="mb-4 text-sm font-medium">{{ $t('errors.notFound.trySearching') }}</p>
            <div class="relative">
              <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                class="pl-10 w-full"
                :placeholder="$t('errors.search')"
                @keydown.enter="performSearch"
                v-model="searchQuery"
              />
              <Button 
                @click="performSearch" 
                class="absolute right-1 top-1 h-8"
                size="sm"
                variant="ghost"
              >
                <ArrowRightIcon class="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <!-- Popular pages -->
          <div class="mt-10">
            <p class="text-sm font-medium mb-3">{{ $t('errors.popularPages') || 'Popular Pages' }}:</p>
            <div class="flex flex-wrap justify-center gap-2">
              <Button
                as="RouterLink"
                to="/services"
                variant="outline"
                size="sm"
                class="rounded-full"
              >
                {{ $t('services.title') }}
              </Button>
              <Button
                as="RouterLink"
                to="/projects"
                variant="outline"
                size="sm"
                class="rounded-full"
              >
                {{ $t('projects.title') }}
              </Button>
              <Button
                as="RouterLink"
                to="/blog"
                variant="outline"
                size="sm"
                class="rounded-full"
              >
                {{ $t('blog.title') }}
              </Button>
              <Button
                as="RouterLink"
                to="/about"
                variant="outline"
                size="sm"
                class="rounded-full"
              >
                {{ $t('about.title') || 'About' }}
              </Button>
            </div>
          </div>
          
          <!-- Navigation options -->
          <div class="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button
              as="RouterLink"
              to="/"
              variant="default"
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
import { useRouter } from 'vue-router'
import { FileSearchIcon, SearchIcon, HomeIcon, MessageSquareIcon, ArrowRightIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Head } from '@vueuse/head'
import { useAppStore } from '@/stores/app'

const { t } = useI18n()
const router = useRouter()
const searchQuery = ref('')
const appStore = useAppStore()
const siteUrl = appStore.config?.siteUrl || 'https://leap-pm.com'

// Handle search query
function performSearch() {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/search',
      query: { q: searchQuery.value }
    })
  }
}
</script>

<style scoped>
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 3s ease-in-out infinite;
}

.animate-ping-slow {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.15;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style> 