<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <section class="py-24 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0">
      <div class="absolute -top-20 -end-20 w-80 h-80 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -start-20 w-80 h-80 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto bg-white dark:bg-card rounded-xl overflow-hidden shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Left side: Content -->
          <div class="p-10 md:p-12">
            <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('cta.title') }}</h2>
            <p class="mb-8 text-gray-600 dark:text-gray-300">
              {{ $t('cta.description') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink to="/contact" class="inline-flex justify-center items-center px-6 py-3 rounded-md bg-primary text-white font-medium transition-colors hover:bg-primary/90">
                {{ $t('cta.contactUs') }}
              </RouterLink>
              <RouterLink to="/services" class="inline-flex justify-center items-center px-6 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
                {{ $t('cta.learnMore') }}
              </RouterLink>
            </div>
          </div>
          
          <!-- Right side: Image -->
          <div class="relative h-72 md:h-auto">
            <img 
              src="https://picsum.photos/id/325/800/600" 
              alt="Get Started" 
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-l from-primary/30 to-primary/10 dark:from-primary/40 dark:to-primary/20"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 