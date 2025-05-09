<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- SEO MetaTags -->
    <Head>
      <title>{{ $t('errors.detailPages.service.title') }} | LEAP PM</title>
      <meta name="description" :content="$t('errors.detailPages.service.description')" />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" :href="`${siteUrl}/services/not-found`" />
    </Head>
    
    <section class="py-20 md:py-32 flex items-center min-h-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto text-center">
          <!-- Error code -->
          <div class="relative inline-block">
            <div class="text-9xl font-bold text-primary/20 dark:text-primary/10">404</div>
            <div class="absolute inset-0 flex items-center justify-center">
              <PackageXIcon class="h-24 w-24 text-primary/60" />
            </div>
          </div>
          
          <!-- Error message -->
          <h1 class="mt-8 text-2xl md:text-3xl font-bold">{{ $t('errors.detailPages.service.heading') }}</h1>
          <p class="mt-4 text-muted-foreground">{{ $t('errors.detailPages.service.message') }}</p>
          
          <!-- Search box -->
          <div class="mt-8 bg-card dark:bg-card/50 p-6 rounded-xl border border-border/40 shadow-sm">
            <p class="mb-4 text-sm">{{ $t('errors.notFound.trySearching') }}</p>
            <div class="relative">
              <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                class="pl-10 w-full"
                :placeholder="$t('errors.search')"
                @keydown.enter="performSearch"
                v-model="searchQuery"
              />
            </div>
          </div>
          
          <!-- Navigation options -->
          <div class="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button
              as="RouterLink"
              to="/services"
              variant="default"
              class="flex items-center gap-2"
            >
              <PackageIcon class="h-4 w-4" />
              {{ $t('services.viewAll') || $t('services.title') }}
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
import { PackageXIcon, PackageIcon, SearchIcon, HomeIcon } from 'lucide-vue-next'
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
  if (searchQuery.value.trim() && router && typeof router?.push === 'function') {
    router?.push({
      path: '/services',
      query: { q: searchQuery.value }
    })
  }
}
</script> 