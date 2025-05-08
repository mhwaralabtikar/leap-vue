<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ChevronRightIcon, ArrowRightIcon } from 'lucide-vue-next'
import type { LucideIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

interface Service {
  id: string
  title: string
  description: string
  icon: string
  link: string
}

const services = ref<Service[]>([
  {
    id: 'project-controls',
    title: t('services.projectControls.title'),
    description: t('services.projectControls.description'),
    icon: 'BarChart',
    link: '/services/project-controls'
  },
  {
    id: 'cost-management',
    title: t('services.costManagement.title'),
    description: t('services.costManagement.description'),
    icon: 'DollarSign',
    link: '/services/cost-management'
  },
  {
    id: 'scheduling',
    title: t('services.scheduling.title'),
    description: t('services.scheduling.description'),
    icon: 'Calendar',
    link: '/services/scheduling'
  },
  {
    id: 'document-control',
    title: t('services.documentControl.title'),
    description: t('services.documentControl.description'),
    icon: 'FileText',
    link: '/services/document-control'
  }
])

// Function to dynamically import icons
const iconMap: Record<string, any> = {
  BarChart: () => import('lucide-vue-next').then(mod => mod.BarChartIcon),
  DollarSign: () => import('lucide-vue-next').then(mod => mod.DollarSignIcon),
  Calendar: () => import('lucide-vue-next').then(mod => mod.CalendarIcon),
  FileText: () => import('lucide-vue-next').then(mod => mod.FileTextIcon)
}
</script>

<template>
  <section class="py-24 bg-muted relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute -end-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute -start-20 -bottom-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative">
      <div class="flex flex-col md:flex-row justify-between md:items-end mb-16">
        <div class="mb-8 md:mb-0 md:max-w-xl">
          <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {{ t('services.ourServices') }}
          </div>
          <h2 class="text-3xl md:text-xl font-bold mb-4">{{ t('services.title') }}</h2>
          <p class="text-foreground/70 text-lg">
            {{ t('services.description') }}
          </p>
        </div>
        
        <Button variant="outline" class="group">
          {{ t('services.viewAll') }}
          <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="group bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
        >
          <div class="bg-primary/10 p-4 inline-block rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
            <component 
              :is="iconMap[service.icon]"
              class="h-6 w-6 text-primary"
            ></component>
          </div>
          
          <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
          <p class="text-foreground/70 mb-6">{{ service.description }}</p>
          
          <router-link 
            :to="service.link" 
            class="inline-flex items-center text-primary font-medium group-hover:underline"
          >
            {{ t('services.learnMore') }}
            <ArrowRightIcon class="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template> 