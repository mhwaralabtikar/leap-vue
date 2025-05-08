<template>
  <div>
    <!-- Page Header -->
    <PageHeader
      :title="$t('projects.title')"
      :subtitle="$t('projects.subtitle')"
      :badge="$t('projects.ourProjects')"
      :breadcrumbs="breadcrumbs"
      backgroundImage="https://picsum.photos/id/1076/1920/1080"
    >
      <template #actions>
        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink to="/services" class="inline-flex items-center bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-2 rounded-lg transition-colors dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20">
            {{ $t('projects.viewServices') }}
            <ChevronRightIcon class="h-4 w-4 ms-2 rtl:rotate-180" />
          </RouterLink>
        </div>
      </template>
    </PageHeader>

    <!-- Search and Filters -->
    <section class="py-8 bg-background border-b border-border">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Search -->
          <div class="mb-6">
            <h2 class="text-lg font-medium mb-3">{{ $t('projects.search') }}</h2>
            <SearchBar 
              v-model="searchQuery" 
              @search="searchProjects" 
              :placeholder="$t('projects.searchPlaceholder')" 
            />
          </div>

          <!-- Filters -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label class="block text-sm font-medium mb-2">{{ $t('projects.category') }}</label>
              <select 
                v-model="filters.category" 
                @change="applyFilters"
                class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card"
              >
                <option value="">{{ $t('projects.allCategories') }}</option>
                <option value="Transportation">{{ $t('projects.transportation') }}</option>
                <option value="Aviation">{{ $t('projects.aviation') }}</option>
                <option value="Residential">{{ $t('projects.residential') }}</option>
                <option value="Commercial">{{ $t('projects.commercial') }}</option>
                <option value="Infrastructure">{{ $t('projects.infrastructure') }}</option>
                <option value="Tourism">{{ $t('projects.tourism') }}</option>
                <option value="Housing">{{ $t('projects.housing') }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">{{ $t('projects.location') }}</label>
              <select 
                v-model="filters.location" 
                @change="applyFilters"
                class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card"
              >
                <option value="">{{ $t('projects.allLocations') }}</option>
                <option value="Saudi Arabia">{{ $t('projects.saudiArabia') }}</option>
              </select>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <button 
                  @click="resetFilters" 
                  class="mt-8 text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                >
                  <RefreshCwIcon class="h-3 w-3 me-1 rtl:me-0 rtl:ms-1" />
                  {{ $t('projects.resetFilters') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects List -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">
          {{ filteredProjects.length ? $t('projects.ourProjects') : $t('projects.noProjectsFound') }}
        </h2>
        
        <div v-if="filteredProjects.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Project Cards using the ProjectCard component -->
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project"
          />
        </div>

        <!-- No results message -->
        <div v-else class="max-w-lg mx-auto text-center py-12">
          <SearchXIcon class="h-16 w-16 mx-auto text-primary/30 mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ $t('projects.noMatchingProjects') }}</h3>
          <p class="text-foreground/70">{{ $t('projects.tryDifferentSearch') }}</p>
          <button 
            @click="resetFilters" 
            class="mt-4 inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
          >
            <RefreshCwIcon class="h-4 w-4 me-2 rtl:me-0 rtl:ms-2" />
            {{ $t('projects.resetFilters') }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronRightIcon, SearchXIcon, RefreshCwIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import CtaSection from '@/components/CtaSection.vue'
import SearchBar from '@/components/SearchBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useProjectsStore } from '@/stores/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n()
const projectsStore = useProjectsStore()

// Search and filters
const searchQuery = ref('')
const filters = ref({
  category: '',
  location: ''
})

// Breadcrumbs
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' }
]

// Get projects data from store
const projects = projectsStore.projects
const categories = projectsStore.categories

// Locations derived from projects data
const locations = computed(() => {
  const locationSet = new Set(['All'])
  projects.forEach(project => {
    if (project.location) {
      locationSet.add(project.location)
    }
  })
  return Array.from(locationSet)
})

// Filtered projects based on search and filters
const filteredProjects = computed(() => {
  let filtered = projects

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(project => {
      return (
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query)
      )
    })
  }
  
  // Apply category filter
  if (filters.value.category && filters.value.category !== 'All') {
    filtered = filtered.filter(project => project.category === filters.value.category)
  }
  
  // Apply location filter
  if (filters.value.location && filters.value.location !== 'All') {
    filtered = filtered.filter(project => project.location === filters.value.location)
  }
  
  return filtered
})

// Search projects
function searchProjects(query: string) {
  searchQuery.value = query
}

// Apply filters
function applyFilters() {
  // Already handled by computed property
}

// Reset all filters and search
function resetFilters() {
  searchQuery.value = ''
  filters.value = {
    category: '',
    location: ''
  }
}
</script> 