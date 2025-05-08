<template>
  <div>
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
          <div v-for="(service, index) in relatedServices" :key="index">
            <ServiceCard 
              :service="service"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { ChevronRightIcon } from 'lucide-vue-next'
import ServiceCard from '@/components/ServiceCard.vue'

const route = useRoute()
const serviceId = computed(() => route.params.id?.toString() || '')

// Mock data for all services
const allServices = [
  {
    id: 'project-controls',
    title: 'Project Controls',
    description: 'Comprehensive oversight and coordination of project scope, schedule, and cost to ensure successful delivery.',
    imageUrl: 'https://picsum.photos/id/250/600/400',
    features: [
      'Project performance measurement and reporting',
      'Schedule and cost integration',
      'Variance analysis and corrective action planning',
      'Progress monitoring and forecasting',
      'Change management and documentation'
    ]
  },
  {
    id: 'cost-management',
    title: 'Cost Management',
    description: 'Budgeting, forecasting, and controlling costs with ERP integration and variance analysis for financial efficiency.',
    imageUrl: 'https://picsum.photos/id/20/600/400',
    features: [
      'Budget development and baseline establishment',
      'Cost estimation and forecasting',
      'Earned value management',
      'Financial reporting and analytics',
      'Value engineering and cost optimization'
    ]
  },
  {
    id: 'claims-management',
    title: 'Claims Management',
    description: 'Preparation and analysis of contractual claims, delay assessments, and cost-related disputes following global standards.',
    imageUrl: 'https://picsum.photos/id/48/600/400',
    features: [
      'Claim identification and prevention',
      'Delay analysis and extension of time claims',
      'Cost impact assessment',
      'Contract and documentation review',
      'Expert witness and dispute resolution support'
    ]
  },
  {
    id: '4d-bim-modeling',
    title: '4D-BIM Modeling',
    description: 'Integration of 3D models with schedules to visualize project timelines, optimize logistics, and enhance planning.',
    imageUrl: 'https://picsum.photos/id/364/600/400',
    features: [
      '3D model integration with project schedules',
      'Construction sequence visualization',
      'Clash detection and resolution',
      'Site logistics planning',
      'What-if scenario analysis'
    ]
  },
  {
    id: 'planning-schedule-management',
    title: 'Planning & Schedule Management',
    description: 'Development and monitoring of project schedules, productivity analysis, and resource optimization for timely delivery.',
    imageUrl: 'https://picsum.photos/id/259/600/400',
    features: [
      'Master schedule development',
      'Critical path analysis',
      'Resource leveling and optimization',
      'Schedule risk assessment',
      'Recovery planning and acceleration strategies'
    ]
  },
  {
    id: 'training-development',
    title: 'Training & Development Services',
    description: 'Industry-focused training programs offering online, live, and offline sessions to enhance project management skills.',
    imageUrl: 'https://picsum.photos/id/180/600/400',
    features: [
      'Customized training curriculum development',
      'Project management professional (PMP) exam preparation',
      'Software-specific training (Primavera P6, MS Project, etc.)',
      'Project controls workshops',
      'Leadership and soft skills development'
    ]
  }
]

// Find the current service
const currentService = computed(() => 
  allServices.find(service => service.id === serviceId.value) || allServices[0]
)

// Service details
const serviceTitle = computed(() => currentService.value.title)
const serviceDescription = computed(() => currentService.value.description)
const serviceImageUrl = computed(() => currentService.value.imageUrl)
const serviceFeatures = computed(() => currentService.value.features)

// Related services - 3 random services excluding current one
const relatedServices = computed(() => {
  const otherServices = allServices.filter(s => s.id !== serviceId.value)
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
</script>
