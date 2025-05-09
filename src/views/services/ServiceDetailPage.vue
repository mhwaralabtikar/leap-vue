<template>
  <!-- Render ServiceNotFoundPage component if service is not found -->
  <ServiceNotFoundPage v-if="serviceNotFound" />
  
  <!-- Render service details if service is found -->
  <div v-else :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Page Header -->
    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <h1 class="text-xl md:text-5xl font-bold mb-4">{{ serviceTitle }}</h1>
          <p class="text-xl text-white/80">
            Comprehensive solutions tailored to your project needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Detail -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="rounded-lg overflow-hidden mb-8">
              <img :src="serviceImageUrl" alt="Service Image" class="w-full h-auto" />
            </div>

            <!-- Service tags -->
            <div class="flex flex-wrap gap-2 mb-8">
              <HashTag :tag="serviceTitle" />
              <HashTag v-for="(feature, index) in serviceFeatures.slice(0, 3)" :key="index" :tag="feature" />
            </div>

            <div class="prose prose-lg max-w-none">
              <h2>Overview</h2>
              <p>
                {{ serviceDescription }}
              </p>
              
              <h2>Our Approach</h2>
              <p>
                At LEAP PM, we take a strategic and methodical approach to {{ serviceTitle.toLowerCase() }}. Our experts work closely with clients to understand their specific requirements and challenges, developing customized solutions that align with their business objectives.
              </p>
              
              <h2>Key Features</h2>
              <ul>
                <li v-for="(feature, index) in serviceFeatures" :key="index">
                  {{ feature }}
                </li>
              </ul>
              
              <h2>Benefits</h2>
              <p>
                Our {{ serviceTitle }} services deliver significant value to our clients:
              </p>
              <ul>
                <li>Enhanced project visibility and control</li>
                <li>Improved decision-making based on accurate data</li>
                <li>Cost optimization and resource efficiency</li>
                <li>Reduced project risks and improved outcomes</li>
                <li>Better alignment with strategic business objectives</li>
              </ul>
              
              <h2>Case Studies</h2>
              <p>
                We have successfully delivered {{ serviceTitle }} services across various industries and project types:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 not-prose">
                <div v-for="(study, index) in caseStudies" :key="index" class="border border-border rounded-lg overflow-hidden bg-white dark:bg-card dark:border-border/30 hover:shadow-md transition-shadow">
                  <img :src="study.image" alt="Case Study" class="w-full h-48 object-cover" />
                  <div class="p-4">
                    <h3 class="text-lg font-bold mb-2">{{ study.title }}</h3>
                    <p class="text-foreground/70 mb-4">{{ study.description }}</p>
                    <RouterLink to="#" class="text-primary hover:underline">Read more</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="border border-border rounded-lg p-6 bg-white dark:bg-card dark:border-border/30 mb-8">
              <h3 class="text-xl font-bold mb-4 border-b border-border pb-3">Our Services</h3>
              <ul class="space-y-3">
                <li v-for="(service, index) in allServices" :key="index">
                  <RouterLink 
                    :to="`/services/${service.id}`" 
                    class="flex items-center py-2 px-3 rounded-md hover:bg-primary/5 transition-colors"
                    :class="{ 'bg-primary/10 text-primary font-medium': service.title === serviceTitle }"
                  >
                    <ChevronRightIcon class="h-4 w-4 me-2" />
                    {{ service.title }}
                  </RouterLink>
                </li>
              </ul>
            </div>
            
            <div class="border border-border rounded-lg p-6 bg-white dark:bg-card dark:border-border/30">
              <h3 class="text-xl font-bold mb-4">Need Assistance?</h3>
              <p class="mb-4 text-foreground/70">
                Contact our specialists to learn more about our {{ serviceTitle }} services and how we can help with your specific project needs.
              </p>
              <RouterLink 
                to="/contact" 
                class="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related Services -->
    <section class="py-16 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Related Services</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            v-for="(service, index) in relatedServices" 
            :key="index"
            :service="service"
          />
        </div>
      </div>
    </section>
    
    <!-- SEO Metadata -->
    <Head>
      <title>{{ serviceTitle }} | {{ $t('services.title') }} | LEAP PM</title>
      <meta name="description" :content="serviceDescription.substring(0, 160)" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" :href="`${siteUrl}/services/${serviceId}`" />
    </Head>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import { ChevronRightIcon } from 'lucide-vue-next'
import ServiceCard from '@/components/ServiceCard.vue'
import { useServicesStore } from '@/stores/services'
import HashTag from '@/components/HashTag.vue'
import ServiceNotFoundPage from '@/views/errors/detail/ServiceNotFoundPage.vue'
import { useI18n } from 'vue-i18n'
import { Head } from '@vueuse/head'
import { useAppStore } from '@/stores/app'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const servicesStore = useServicesStore()
const appStore = useAppStore()
const siteUrl = appStore.config?.siteUrl || 'https://leap-pm.com'

// Get current service based on route params
const serviceId = computed(() => route.params.id as string)
const service = computed(() => {
  const found = servicesStore.getServiceById(serviceId)
  return found || null // Return null if service not found
})

// Get all services from the store
const allServices = computed(() => servicesStore.services)

// Find the current service
const currentService = computed(() => 
  servicesStore.getServiceById(serviceId) || allServices.value[0]
)

// Service details
const serviceTitle = computed(() => currentService.value.title)
const serviceDescription = computed(() => currentService.value.description)
const serviceImageUrl = computed(() => currentService.value.imageUrl || `https://picsum.photos/id/${250}/600/400`)
const serviceFeatures = computed(() => currentService.value.features || [])

// Related services - 3 random services excluding current one
const relatedServices = computed(() => {
  const otherServices = allServices.value.filter(s => s.id !== serviceId)
  return otherServices.sort(() => 0.5 - Math.random()).slice(0, 3).map(service => ({
    ...service,
    link: `/services/${service.id}`
  }))
})

// Case studies
const caseStudies = [
  {
    title: 'Riyadh Metro Project',
    description: 'Implementation of comprehensive project controls for this major infrastructure development.',
    image: 'https://picsum.photos/id/672/600/400'
  },
  {
    title: 'NEOM Smart City',
    description: 'Advanced schedule management for multiple project packages in this ambitious development.',
    image: 'https://picsum.photos/id/324/600/400'
  }
]

// Service not found state
const serviceNotFound = computed(() => !service.value)
</script>
