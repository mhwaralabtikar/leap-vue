<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ServiceCard from './ServiceCard.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useServicesStore } from '@/stores/services'
import { LayoutGridIcon, FileTextIcon, BarChart2Icon, CalendarIcon, DollarSignIcon, DatabaseIcon, BookOpenIcon, AlertTriangleIcon, BriefcaseIcon } from 'lucide-vue-next'

const { t } = useI18n()
const servicesStore = useServicesStore()

// Animation state
const isVisible = ref(false)
const animatedCards = ref(Array(10).fill(false))

// Get services data from store
const services = servicesStore.services

// Group services for tab display (first 6 in main tab, rest in "More Services" tab)
const mainServices = services.slice(0, 6)
const moreServices = services.slice(6)

const activeTab = ref('main')

// Map icon name to component
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
    'chart-bar': BarChart2Icon,
    'dollar-sign': DollarSignIcon,
    'file-text': FileTextIcon,
    'layers': LayoutGridIcon,
    'calendar': CalendarIcon,
    'book-open': BookOpenIcon,
    'alert-triangle': AlertTriangleIcon,
    'bar-chart-2': BarChart2Icon,
    'database': DatabaseIcon,
    'briefcase': BriefcaseIcon
  }
  return iconMap[iconName] || LayoutGridIcon
}

// Map service data to format expected by ServiceCard component
const mapServiceData = (service: any) => {
  const serviceFeatures = service.features || [
    'Comprehensive project oversight',
    'Expert consultation and guidance',
    'Advanced methodologies and tools',
    'Tailored solutions for specific needs'
  ]
  
  return {
    id: service.id,
    title: service.title,
    description: service.description,
    imageUrl: service.imageUrl || 'https://picsum.photos/id/' + (180 + Math.floor(Math.random() * 20)) + '/600/400',
    icon: getIconComponent(service.icon),
    features: serviceFeatures,
    link: service.link || `/services/${service.id}`
  }
}

// Initialize intersection observer for animation
onMounted(() => {
  isVisible.value = true
  
  // Stagger animation of cards
  for (let i = 0; i < animatedCards.value.length; i++) {
    setTimeout(() => {
      animatedCards.value[i] = true
    }, 100 * i)
  }
})
</script>

<template>
  <section class="py-24 bg-accent/30 dark:bg-slate-900/50 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute -start-20 -top-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute -end-20 -bottom-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative">
      <div 
        class="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
      >
        <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
          {{ $t('services.ourServices') }}
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('services.title') }}</h2>
        <p class="text-lg text-foreground/70 dark:text-foreground/60">
          {{ $t('services.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Services using the ServiceCard component -->
        <div 
          v-for="(service, index) in mainServices" 
          :key="`service-${index}`"
          class="transition-all duration-700 transform"
          :class="animatedCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <ServiceCard :service="mapServiceData(service)" />
        </div>

        <div 
          v-for="(service, index) in moreServices.slice(0, 3)" 
          :key="`service-x-${index}`"
          class="transition-all duration-700 transform"
          :class="animatedCards[index + 6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
          :style="{ transitionDelay: `${(index + 6) * 100}ms` }"
        >
          <ServiceCard :service="mapServiceData(service)" />
        </div>
      </div>

      <div class="flex justify-center mt-16">
        <RouterLink to="/services" class="inline-flex items-center text-white bg-primary hover:bg-primary/90 transition-all duration-300 px-6 py-3 rounded-lg group">
          {{ $t('services.viewAll') }}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="ms-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template> 