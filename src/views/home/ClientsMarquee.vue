<template>
  <section class="py-16 bg-background overflow-hidden">
    <div class="container mx-auto px-4 mb-10 text-center">
      <h2 class="text-3xl font-bold mb-4">{{ $t('clients.title') }}</h2>
      <p class="text-xl text-foreground/70 max-w-2xl mx-auto">{{ $t('clients.subtitle') }}</p>
    </div>

    <div class="relative">
      <!-- First row (left to right) -->
      <div class="flex animate-marquee py-4">
        <div v-for="client in clients" :key="client.id" class="flex-none mx-8">
          <img 
            :src="client.logo" 
            :alt="client.name" 
            class="h-12 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
          />
        </div>
      </div>

      <!-- Second row (right to left) -->
      <div class="flex animate-marquee-reverse py-4">
        <div v-for="client in clients.slice().reverse()" :key="client.id" class="flex-none mx-8">
          <img 
            :src="client.logo" 
            :alt="client.name" 
            class="h-12 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Sample client data (would typically come from an API)
const clients = [
  { id: 1, name: 'Acme Inc', logo: 'https://picsum.photos/id/0/200/100' },
  { id: 2, name: 'TechCorp', logo: 'https://picsum.photos/id/1/200/100' },
  { id: 3, name: 'GlobalEx', logo: 'https://picsum.photos/id/2/200/100' },
  { id: 4, name: 'Innovate Co', logo: 'https://picsum.photos/id/3/200/100' },
  { id: 5, name: 'FutureTech', logo: 'https://picsum.photos/id/4/200/100' },
  { id: 6, name: 'DigitalEdge', logo: 'https://picsum.photos/id/5/200/100' },
  { id: 7, name: 'Synergy', logo: 'https://picsum.photos/id/6/200/100' },
  { id: 8, name: 'Nexus', logo: 'https://picsum.photos/id/7/200/100' }
]
</script>
