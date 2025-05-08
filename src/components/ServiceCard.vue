<script setup lang="ts">
import { ref } from 'vue'
import { CheckIcon, ChevronDownIcon, ArrowRightIcon, LayoutGridIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const DefaultIcon = LayoutGridIcon
const showAllFeatures = ref(false)

// Props definition with TypeScript interface
interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    icon?: any;
    features?: string[];
    link?: string;
  }
}

defineProps<ServiceCardProps>()
</script>

<template>
  <div class="group h-full rounded-lg shadow-md bg-white dark:bg-card border border-transparent dark:border-border/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden flex flex-col">
    <!-- Image Section -->
    <div class="relative">
      <div class="aspect-[3/2] overflow-hidden">
        <img 
          :src="service.imageUrl" 
          :alt="service.title" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70"></div>
      
      <!-- Service Icon Overlay -->
      <div class="absolute bottom-0 right-0 m-4">
        <div class="w-12 h-12 bg-white dark:bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <component :is="service.icon || DefaultIcon" class="h-6 w-6 text-primary dark:text-white" />
        </div>
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{{ service.title }}</h3>
      <p class="text-foreground/70 dark:text-foreground/60 text-sm mb-4 flex-grow">{{ service.description }}</p>
      
      <!-- Features List -->
      <div v-if="service.features && service.features.length" class="mb-4">
        <div class="space-y-2">
          <div 
            v-for="(feature, index) in (service.features?.slice(0, showAllFeatures ? service.features.length : 2))" 
            :key="`feature-${index}`"
            class="flex items-start gap-2"
          >
            <CheckIcon class="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <span class="text-sm text-foreground/80 dark:text-foreground/70">{{ feature }}</span>
          </div>
          
          <div v-if="service.features && service.features.length > 2 && !showAllFeatures" class="text-right">
            <button 
              @click="showAllFeatures = true"
              class="text-xs text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
            >
              More features
              <ChevronDownIcon class="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- Action Button -->
      <RouterLink 
        :to="service.link || `/services/${service.id}`" 
        class="mt-auto inline-flex items-center justify-center px-5 py-2.5 bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 text-primary rounded-md transition-colors group-hover:bg-primary group-hover:text-white"
      >
        <span>Learn More</span>
        <ArrowRightIcon class="ml-2 h-4 w-4" />
      </RouterLink>
    </div>
  </div>
</template> 