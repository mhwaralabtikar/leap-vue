<template>
  <div>
    <!-- Project Hero Section -->
    <section class="relative">
      <!-- Hero Image -->
      <div class="h-[50vh] md:h-[60vh] relative overflow-hidden">
        <img 
          :src="project.imageUrl" 
          :alt="project.title" 
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div class="absolute bottom-0 start-0 end-0 p-6 md:p-12 text-white">
          <div class="container mx-auto">
            <div class="inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-medium mb-4">
              {{ project.category }}
            </div>
            <h1 class="text-3xl md:text-5xl font-bold mb-4">{{ project.title }}</h1>
            <div class="flex items-center text-sm">
              <RouterLink to="/" class="text-white/80 hover:text-white transition-colors">
                Home
              </RouterLink>
              <ChevronRightIcon class="h-4 w-4 mx-2 text-white/50" />
              <RouterLink to="/projects" class="text-white/80 hover:text-white transition-colors">
                Projects
              </RouterLink>
              <ChevronRightIcon class="h-4 w-4 mx-2 text-white/50" />
              <span class="text-white font-medium">{{ project.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Content -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="prose prose-lg max-w-none">
              <h2>Project Overview</h2>
              <p>
                {{ project.description }}
              </p>
              <p>
                This major infrastructure project was completed in partnership with leading Saudi contractors and engineering firms, requiring complex coordination and precise project management. Our team provided comprehensive project controls, schedule management, and cost tracking services throughout the development lifecycle.
              </p>
              
              <h2>Our Approach</h2>
              <p>
                LEAP PM was engaged to provide the following services:
              </p>
              <ul>
                <li>Comprehensive project scheduling and critical path analysis</li>
                <li>Cost control and earned value management</li>
                <li>Risk management and mitigation strategies</li>
                <li>Stakeholder coordination and communication</li>
                <li>Progress monitoring and reporting systems</li>
              </ul>
              
              <h2>Results &amp; Impact</h2>
              <p>
                Through our tailored project management approach, we were able to help deliver this project with the following outcomes:
              </p>
              <ul>
                <li>On-time completion despite complex challenges</li>
                <li>Budget adherence with less than 3% variance</li>
                <li>Successful coordination between multiple stakeholders</li>
                <li>Implementation of innovative scheduling techniques</li>
              </ul>
            </div>
            
            <!-- Project Gallery -->
            <div class="mt-12">
              <h3 class="text-2xl font-bold mb-6">Project Gallery</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="i in 6" :key="i" class="aspect-square overflow-hidden rounded-lg">
                  <img 
                    :src="`https://picsum.photos/id/${180 + i}/600/600`" 
                    alt="Project Image" 
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div>
            <div class="bg-white dark:bg-card dark:border dark:border-border/30 rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <h3 class="text-xl font-bold mb-6 pb-6 border-b">Project Information</h3>
              
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="text-foreground/70">Client:</span>
                  <span class="font-medium">{{ project.client || 'Saudi Government' }}</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-foreground/70">Location:</span>
                  <span class="font-medium">{{ project.location }}</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-foreground/70">Project Type:</span>
                  <span class="font-medium">{{ project.category }}</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-foreground/70">Year:</span>
                  <span class="font-medium">{{ project.year || '2022' }}</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-foreground/70">Value:</span>
                  <span class="font-medium">{{ project.value || 'SAR 200M+' }}</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-foreground/70">Duration:</span>
                  <span class="font-medium">{{ project.duration || '36 months' }}</span>
                </div>
              </div>
              
              <div class="mt-8 pt-6 border-t">
                <h4 class="font-medium mb-4">Services Provided</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(service, i) in services" :key="i" class="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {{ service }}
                  </span>
                </div>
              </div>
              
              <div class="mt-8">
                <RouterLink to="/contact" class="inline-flex w-full items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  Discuss Your Project
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related Projects -->
    <section class="py-16 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Related Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(relatedProject, i) in relatedProjects" :key="i" class="group overflow-hidden rounded-lg shadow-md bg-white dark:bg-card dark:border dark:border-border/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img 
                :src="relatedProject.imageUrl" 
                :alt="relatedProject.title" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 start-0 end-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <RouterLink :to="`/projects/${relatedProject.id}`" class="inline-flex items-center gap-1 text-white hover:text-primary-foreground">
                  See Project 
                  <ChevronRightIcon class="h-4 w-4" />
                </RouterLink>
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-primary font-medium mb-2">{{ relatedProject.category }}</div>
              <h3 class="text-xl font-bold mb-2">{{ relatedProject.title }}</h3>
              <p class="text-foreground/70 mb-4 line-clamp-2">{{ relatedProject.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium">{{ relatedProject.location }}</span>
                <RouterLink :to="`/projects/${relatedProject.id}`" class="text-primary hover:underline flex items-center gap-1">
                  Details
                  <ChevronRightIcon class="h-4 w-4" />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ChevronRightIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import CtaSection from '@/components/CtaSection.vue'
import { useProjectsStore } from '@/stores/projects'

const route = useRoute()
const router = useRouter()
const projectsStore = useProjectsStore()

// Get the current project based on route params
const projectId = computed(() => route.params.id as string)
const project = computed(() => {
  const found = projectsStore.getProjectById(projectId.value)
  return found || null // Return null if project not found
})

// Redirect to not found page if project doesn't exist
onMounted(() => {
  if (!project.value) {
    router.replace('/projects/not-found')
  }
})

// Services provided for this project
const services = [
  'Project Controls',
  'Schedule Management',
  'Cost Management',
  'Risk Management',
  'Claim Management',
  'Project Reporting'
]

// Related projects (excluding current one)
const relatedProjects = computed(() => {
  // Get projects in the same category, or random ones if there aren't enough
  const sameCategory = projectsStore.projects.filter(p => 
    p.id !== projectId.value && p.category === project.value.category
  )
  
  let related = [...sameCategory]
  
  // If we don't have 3 projects of the same category, add others
  if (related.length < 3) {
    const others = projectsStore.projects.filter(p => 
      p.id !== projectId.value && p.category !== project.value.category
    )
    
    // Randomize the others array
    const randomOthers = [...others].sort(() => 0.5 - Math.random())
    
    // Add enough to make up 3 total
    related = [...related, ...randomOthers.slice(0, 3 - related.length)]
  }
  
  return related.slice(0, 3)
})
</script>
