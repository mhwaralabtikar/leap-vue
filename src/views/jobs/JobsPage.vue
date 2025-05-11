<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Page Header -->
    <PageHeader
      :title="$t('jobs.title')"
      :subtitle="$t('jobs.subtitle')"
      :badge="$t('jobs.careers')"
      :breadcrumbs="breadcrumbs"
      backgroundImage="/covers/Contact US.jpg"
    >
      <template #actions>
        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink to="/contact" class="inline-flex items-center bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-2 rounded-lg transition-colors dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20">
            {{ $t('jobs.contactRecruitment') }}
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
            <h2 class="text-lg font-medium mb-3">{{ $t('jobs.search') }}</h2>
            <SearchBar 
              v-model="searchQuery" 
              @search="searchJobs" 
              :placeholder="$t('jobs.searchPlaceholder')" 
            />
          </div>

          <!-- Filters -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div>
              <label class="block text-sm font-medium mb-2">{{ $t('jobs.jobType') }}</label>
              <select 
                v-model="filters.type" 
                @change="applyFilters"
                class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card dark:border-border/50"
              >
                <option value="">{{ $t('jobs.allTypes') }}</option>
                <option value="Full Time">{{ $t('jobs.fullTime') }}</option>
                <option value="Part Time">{{ $t('jobs.partTime') }}</option>
                <option value="Contract">{{ $t('jobs.contract') }}</option>
                <option value="Internship">{{ $t('jobs.internship') }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">{{ $t('jobs.location') }}</label>
              <select 
                v-model="filters.location" 
                @change="applyFilters"
                class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card dark:border-border/50"
              >
                <option value="">{{ $t('jobs.allLocations') }}</option>
                <option value="Riyadh, Saudi Arabia">{{ $t('jobs.riyadh') }}</option>
                <option value="Jeddah, Saudi Arabia">{{ $t('jobs.jeddah') }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">{{ $t('jobs.department') }}</label>
              <select 
                v-model="filters.department" 
                @change="applyFilters"
                class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card dark:border-border/50"
              >
                <option value="">{{ $t('jobs.allDepartments') }}</option>
                <option value="Project Controls">{{ $t('jobs.projectControls') }}</option>
                <option value="Cost Management">{{ $t('jobs.costManagement') }}</option>
                <option value="Technical Services">{{ $t('jobs.technicalServices') }}</option>
                <option value="Claims Management">{{ $t('jobs.claimsManagement') }}</option>
                <option value="Engineering">{{ $t('jobs.engineering') }}</option>
                <option value="Administration">{{ $t('jobs.administration') }}</option>
              </select>
            </div>
            <div>
              <div class="flex items-center justify-end">
                <button 
                  @click="resetFilters" 
                  class="mt-8 inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors dark:hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <RefreshCwIcon class="h-4 w-4 ltr:me-2 rtl:ms-2" />
                  {{ $t('jobs.resetFilters') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Jobs Section -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-8 text-center">
            {{ filteredJobs.length ? $t('jobs.availablePositions') : $t('jobs.noJobsFound') }}
          </h2>
          
          <!-- Job Listings -->
          <div v-if="filteredJobs.length" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <JobCard 
              v-for="job in filteredJobs" 
              :key="job.id" 
              :job="enhanceJobData(job)"
            >
              <template #action>
                <RouterLink 
                  :to="`/jobs/${job.id}`" 
                  class="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white transition-colors hover:bg-primary/90 font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background"
                >
                  {{ $t('jobs.applyNow') }}
                </RouterLink>
              </template>
            </JobCard>
          </div>

          <!-- No results message -->
          <div v-else class="text-center py-12">
            <SearchXIcon class="h-16 w-16 mx-auto text-primary/30 mb-4" />
            <h3 class="text-xl font-semibold mb-2">{{ $t('jobs.noMatchingJobs') }}</h3>
            <p class="text-foreground/70">{{ $t('jobs.tryDifferentSearch') }}</p>
            <button 
              @click="resetFilters" 
              class="mt-4 inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors dark:hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <RefreshCwIcon class="h-4 w-4 ltr:me-2 rtl:ms-2" />
              {{ $t('jobs.resetFilters') }}
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Join Us Section -->
    <section class="py-16 bg-accent/30 dark:bg-accent/10">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('jobs.whyJoinUs') }}</h2>
          <p class="text-lg text-foreground/70">
            {{ $t('jobs.careerGrowth') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-card p-6 rounded-lg shadow-sm text-center border border-border dark:border-border/50">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
              <GraduationCapIcon class="h-7 w-7" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('jobs.professionalGrowth.title') }}</h3>
            <p class="text-foreground/70">
              {{ $t('jobs.professionalGrowth.description') }}
            </p>
          </div>
          
          <div class="bg-card p-6 rounded-lg shadow-sm text-center border border-border dark:border-border/50">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
              <LightbulbIcon class="h-7 w-7" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('jobs.innovativeProjects.title') }}</h3>
            <p class="text-foreground/70">
              {{ $t('jobs.innovativeProjects.description') }}
            </p>
          </div>
          
          <div class="bg-card p-6 rounded-lg shadow-sm text-center border border-border dark:border-border/50">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
              <HeartHandshakeIcon class="h-7 w-7" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('jobs.benefits.title') }}</h3>
            <p class="text-foreground/70">
              {{ $t('jobs.benefits.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { 
  SearchXIcon,
  RefreshCwIcon,
  GraduationCapIcon,
  LightbulbIcon,
  HeartHandshakeIcon,
  ChevronRightIcon
} from 'lucide-vue-next'
import SearchBar from '@/components/SearchBar.vue'
import JobCard from '@/components/JobCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useJobsStore } from '@/stores/jobs'

const { t } = useI18n()

// Initialize the jobs store
const jobsStore = useJobsStore()

// Breadcrumbs
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Careers', path: '/jobs' }
]

// Search and filters
const searchQuery = ref('')
const filters = ref({
  type: '',
  location: '',
  department: ''
})

// Get job data from store
const allJobs = jobsStore.jobs
const departments = jobsStore.departments
const locations = jobsStore.locations

// Filtered jobs based on search and filters
const filteredJobs = computed(() => {
  let results = allJobs

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    results = results.filter(job => {
      return (
        job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
      )
    })
  }
  
  // Apply type filter
  if (filters.value.type) {
    results = results.filter(job => job.type === filters.value.type)
  }
  
  // Apply location filter
  if (filters.value.location && filters.value.location !== 'All Locations') {
    results = results.filter(job => job.location === filters.value.location)
  }
  
  // Apply department filter
  if (filters.value.department && filters.value.department !== 'All Departments') {
    results = results.filter(job => job.department === filters.value.department)
  }
  
  return results
})

// Search jobs
function searchJobs(query: string) {
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
    type: '',
    location: '',
    department: ''
  }
}

// Function to enhance job data for the new JobCard component
const enhanceJobData = (job: any) => {
  return {
    ...job,
    postedDate: job.postedDate || new Date().toLocaleDateString(),
    salary: job.salary || '$' + (50000 + Math.floor(Math.random() * 50000)) + ' - $' + (100000 + Math.floor(Math.random() * 50000)),
    skills: job.skills || [
      'Project Management',
      'Risk Analysis',
      'Stakeholder Management',
      'Team Leadership',
      'Technical Documentation'
    ].slice(0, 3 + Math.floor(Math.random() * 3))
  }
}
</script> 