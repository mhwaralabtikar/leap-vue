<template>
  <section class="py-20 bg-background overflow-hidden relative">
    <!-- Background decorative elements -->
    <div class="absolute -z-10 top-0 start-1/3 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
    <div class="absolute -z-10 bottom-0 end-1/3 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
    
    <div class="container mx-auto px-4 mb-12 text-center">
      <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
        {{ $t('clients.trusted') }}
      </div>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('clients.title') }}</h2>
      <p class="text-xl text-foreground/70 dark:text-foreground/80 max-w-2xl mx-auto">{{ $t('clients.subtitle') }}</p>
    </div>

    <div class="relative">
      <!-- First row (left to right) -->
      <div class="flex animate-marquee py-6 group">
        <div 
          v-for="client in clientsStore.clients" 
          :key="client.id" 
          class="flex-none mx-10 perspective"
        >
          <div 
            class="flex items-center justify-center h-16 px-6 bg-white dark:bg-card border border-border/20 dark:border-border/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-110 opacity-70"
          >
            <img 
              :src="client.logo" 
              :alt="client.name" 
              class="h-10 w-auto object-contain transition-all grayscale hover:grayscale-0 dark:brightness-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Second row (right to left) -->
      <div class="flex animate-marquee-reverse py-6 group">
        <div 
          v-for="client in [...clientsStore.clients].reverse()" 
          :key="client.id" 
          class="flex-none mx-10 perspective"
        >
          <div 
            class="flex items-center justify-center h-16 px-6 bg-white dark:bg-card border border-border/20 dark:border-border/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-110 opacity-70"
          >
            <img 
              :src="client.logo" 
              :alt="client.name" 
              class="h-10 w-auto object-contain transition-all grayscale hover:grayscale-0 dark:brightness-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Gradient overlays for smooth fade effect on edges -->
    <div class="absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
    <div class="absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
    
    <!-- Stats bar -->
    <div class="container mx-auto px-4 mt-16">
      <div class="bg-white dark:bg-card/80 rounded-2xl shadow-lg border border-border/20 dark:border-border/30 dark:shadow-md p-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="stat in clientsStore.stats" 
            :key="stat.id" 
            class="text-center"
          >
            <div class="text-4xl font-bold text-primary mb-2">
              <CountUp :end-val="stat.value" />{{ stat.suffix }}
            </div>
            <p class="text-foreground/70 dark:text-foreground/80">{{ $t(stat.label) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import CountUp from '@/components/ui/CountUp.vue'
import { useClientsStore } from '@/stores/clients'

const { t } = useI18n()
const clientsStore = useClientsStore()
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse 25s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Dark mode adjustments for the gradient overlays */
:root.dark .absolute.inset-y-0.start-0 {
  background: linear-gradient(to right, var(--background), transparent);
}

:root.dark .absolute.inset-y-0.end-0 {
  background: linear-gradient(to left, var(--background), transparent);
}
</style>
