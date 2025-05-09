<template>
  <div>
    <!-- Header with job title and back button -->
    <section class="relative bg-card border-b border-border overflow-hidden">
      <div class="absolute inset-0 bg-primary/5 opacity-50"></div>
      <div class="container mx-auto px-4 py-10 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col items-center mb-6 md:flex-row md:justify-between">
            <Button 
              as="RouterLink" 
              :to="`/jobs/${job?.id || ''}`" 
              variant="outline" 
              class="mb-4 md:mb-0"
            >
              <ArrowLeftIcon class="h-4 w-4 mr-2" />
              {{ $t('jobs.backToJob') || 'Back to Job Details' }}
            </Button>
            
            <div class="flex items-center">
              <Badge variant="outline" class="bg-primary/10 border-primary/20 text-primary">
                {{ job?.type || '' }}
              </Badge>
            </div>
          </div>
          
          <h1 class="text-2xl md:text-3xl font-bold text-center md:text-left mb-2">
            {{ $t('jobs.apply.title') || 'Apply for' }}: {{ job?.title || $t('jobs.position') || 'Position' }}
          </h1>
          
          <p class="text-muted-foreground text-center md:text-left mb-6">
            {{ job?.location || '' }}
          </p>
        </div>
      </div>
    </section>
    
    <!-- Application Form Section -->
    <section class="py-12 bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Loading State -->
          <div v-if="isLoading" class="flex justify-center py-12">
            <LoaderIcon class="h-8 w-8 animate-spin text-primary" />
          </div>
          
          <!-- Error State -->
          <div v-else-if="error" class="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <AlertTriangleIcon class="h-10 w-10 mx-auto text-destructive mb-4" />
            <h3 class="text-xl font-semibold mb-2">{{ $t('jobs.apply.error') || 'Error Loading Job' }}</h3>
            <p class="text-muted-foreground mb-6">{{ error }}</p>
            <Button as="RouterLink" to="/jobs" variant="outline">
              {{ $t('jobs.viewAllJobs') || 'View All Jobs' }}
            </Button>
          </div>
          
          <!-- Job Application Form -->
          <div v-else class="bg-card border border-border/20 rounded-xl p-6 shadow-sm">
            <div class="text-center mb-8">
              <h3 class="text-xl font-semibold mb-2">{{ $t('jobs.form.title') }}</h3>
              <p class="text-muted-foreground text-sm">{{ $t('jobs.form.subtitle') }}</p>
            </div>
            
            <JobApplicationForm 
              :job-id="jobId" 
              :job-title="job?.title"
              @success="handleApplicationSuccess"
              @error="handleApplicationError"
            />
          </div>
          
          <!-- Job Details Section -->
          <div v-if="job && !isLoading" class="mt-12 bg-card rounded-xl border border-border/50 p-6">
            <h3 class="text-lg font-semibold mb-4">{{ $t('jobs.jobDetails') || 'Job Details' }}</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div class="flex items-start">
                <BriefcaseIcon class="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 class="text-sm font-medium">{{ $t('jobs.type') || 'Job Type' }}</h4>
                  <p class="text-muted-foreground">{{ job.type }}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <MapPinIcon class="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 class="text-sm font-medium">{{ $t('jobs.location') || 'Location' }}</h4>
                  <p class="text-muted-foreground">{{ job.location }}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <BuildingIcon class="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 class="text-sm font-medium">{{ $t('jobs.department') || 'Department' }}</h4>
                  <p class="text-muted-foreground">{{ job.department }}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <ClockIcon class="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 class="text-sm font-medium">{{ $t('jobs.postedDate') || 'Posted Date' }}</h4>
                  <p class="text-muted-foreground">{{ formatDate(job.postedDate) }}</p>
                </div>
              </div>
            </div>
            
            <Button as="RouterLink" :to="`/jobs/${job.id}`" variant="outline" class="w-full">
              {{ $t('jobs.viewFullJobDescription') || 'View Full Job Description' }}
            </Button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="py-12 bg-card border-t border-border">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">{{ $t('jobs.otherPositions') || 'Interested in Other Positions?' }}</h2>
        <p class="text-muted-foreground mb-6 max-w-lg mx-auto">
          {{ $t('jobs.otherPositionsText') || 'Browse our current job openings and find the perfect role for your skills and experience.' }}
        </p>
        <Button as="RouterLink" to="/jobs" size="lg">
          {{ $t('jobs.viewAllOpenings') || 'View All Job Openings' }}
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useJobsStore } from '@/stores/jobs'
import { 
  ArrowLeftIcon, 
  LoaderIcon, 
  AlertTriangleIcon, 
  BriefcaseIcon,
  MapPinIcon,
  BuildingIcon,
  ClockIcon
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import JobApplicationForm from '@/components/jobs/JobApplicationForm.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const jobsStore = useJobsStore()

const isLoading = ref(true)
const error = ref('')
const applicationSubmitted = ref(false)

// Get job ID from route params
const jobId = computed(() => route.params.id as string)

// Get job details
const job = computed(() => jobsStore.getJobById(jobId.value))

// Format date helper function
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date)
}

// Handle successful job application
function handleApplicationSuccess(data: any) {
  applicationSubmitted.value = true
  // Could save application data to store or localStorage
  console.log('Application submitted:', data)
}

// Handle job application error
function handleApplicationError(message: string) {
  error.value = message
}

// Fetch job data
onMounted(async () => {
  try {
    isLoading.value = true
    
    // If jobs not loaded yet, fetch them
    if (jobsStore.jobs.length === 0) {
      await jobsStore.fetchJobs()
    }
    
    // Check if job exists
    if (!job.value) {
      error.value = t('jobs.apply.jobNotFound') || 'Job not found'
      // Could redirect to jobs list
      // router.replace('/jobs')
    }
    
  } catch (err) {
    console.error('Error loading job:', err)
    error.value = t('jobs.apply.loadError') || 'Error loading job details'
  } finally {
    isLoading.value = false
  }
})
</script> 