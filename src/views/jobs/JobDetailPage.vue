<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Job Header Section -->
    <section class="bg-primary text-white py-16 md:py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-wrap items-center text-sm mb-6">
            <Button 
              as="RouterLink" 
              to="/" 
              variant="link"
              class="text-white/80 hover:text-white transition-colors p-0 h-auto"
            >
              {{ $t('common.home') }}
            </Button>
            <ChevronRightIcon class="h-4 w-4 mx-2 text-white/50 rtl:rotate-180" />
            <Button 
              as="RouterLink" 
              to="/jobs" 
              variant="link"
              class="text-white/80 hover:text-white transition-colors p-0 h-auto"
            >
              {{ $t('jobs.jobs') }}
            </Button>
            <ChevronRightIcon class="h-4 w-4 mx-2 text-white/50 rtl:rotate-180" />
            <span class="font-medium">{{ job.title }}</span>
          </div>
          
          <h1 class="text-3xl md:text-5xl font-bold mb-4">{{ job.title }}</h1>
          
          <div class="flex flex-wrap items-center gap-6 mb-8">
            <div class="flex items-center text-white/80">
              <MapPinIcon class="h-5 w-5 me-2 rtl:me-0 rtl:ms-2" />
              <span>{{ job.location }}</span>
            </div>
            <div class="flex items-center text-white/80">
              <BriefcaseIcon class="h-5 w-5 me-2 rtl:me-0 rtl:ms-2" />
              <span>{{ job.type }}</span>
            </div>
            <div class="flex items-center text-white/80">
              <DollarSignIcon class="h-5 w-5 me-2 rtl:me-0 rtl:ms-2" />
              <span>{{ job.salary || $t('jobs.competitiveSalary') }}</span>
            </div>
            <div class="flex items-center text-white/80">
              <CalendarIcon class="h-5 w-5 me-2 rtl:me-0 rtl:ms-2" />
              <span>{{ $t('jobs.postedOn') }}: {{ job.postedDate }}</span>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-4">
            <Button 
              @click="openQuickApplyModal"
              variant="default"
              class="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              <LightningBoltIcon class="h-5 w-5 me-2 rtl:me-0 rtl:ms-2" />
              {{ $t('jobs.easyApply') }}
            </Button>
            <Button 
              as="RouterLink"
              :to="`/jobs/${job.id}/apply`"
              variant="outline"
              class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors border border-white/20"
            >
              <SendIcon class="h-5 w-5 me-2 rtl:me-0 rtl:ms-2" />
              {{ $t('jobs.applyNow') }}
            </Button>
            <Button 
              @click="shareJob" 
              variant="outline"
              class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors border border-white/20"
            >
              <ShareIcon class="h-5 w-5 me-2 rtl:me-0 rtl:ms-2" />
              {{ $t('jobs.share') }}
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Job Content -->
    <section class="py-16 bg-background dark:bg-background/50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="prose prose-lg max-w-none dark:prose-invert">
              <h2>{{ $t('jobs.about') }}</h2>
              <p>
                {{ job.description }}
              </p>

              <h2>{{ $t('jobs.responsibilities') }}</h2>
              <ul>
                <li v-for="(responsibility, index) in job.responsibilities" :key="index">
                  {{ responsibility }}
                </li>
              </ul>

              <h2>{{ $t('jobs.requirements') }}</h2>
              <ul>
                <li v-for="(requirement, index) in job.requirements" :key="index">
                  {{ requirement }}
                </li>
              </ul>

              <h2>{{ $t('jobs.benefits') }}</h2>
              <ul>
                <li v-for="(benefit, index) in job.benefits" :key="index">
                  {{ benefit }}
                </li>
              </ul>
              
              <h2>{{ $t('jobs.aboutCompany') }}</h2>
              <p>
                {{ $t('jobs.companyDescription') }}
              </p>
              <p>
                {{ $t('jobs.diversityStatement') }}
              </p>
            </div>
            
            <!-- Application Form -->
            <div id="apply" class="mt-16 bg-white dark:bg-card dark:border dark:border-border/30 p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold mb-6">{{ $t('jobs.form.apply') }}</h2>
              
              <!-- Application Card with CTA -->
              <div class="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div class="text-center md:text-left">
                    <h3 class="text-xl font-medium mb-2">{{ $t('jobs.interestedInRole') }}</h3>
                    <p class="text-muted-foreground max-w-md">
                      {{ $t('jobs.applyDescription') }}
                    </p>
                  </div>
                  
                  <div class="flex flex-col sm:flex-row gap-4">
                    <Button 
                      @click="openQuickApplyModal"
                      class="px-6 py-3 flex items-center justify-center gap-2"
                      size="lg"
                    >
                      <LightningBoltIcon class="h-5 w-5" />
                      {{ $t('jobs.easyApply') }}
                    </Button>
                    
                    <Button 
                      as="RouterLink"
                      :to="`/jobs/${job.id}/apply`"
                      variant="outline"
                      class="px-6 py-3 flex items-center justify-center gap-2"
                      size="lg"
                    >
                      <SendIcon class="h-5 w-5" />
                      {{ $t('jobs.applyNow') }}
                    </Button>
                    
                    <!-- Optional: Share button -->
                    <Button 
                      @click="shareJob" 
                      variant="outline"
                      class="px-6 py-3 flex items-center justify-center gap-2"
                      size="lg"
                    >
                      <ShareIcon class="h-5 w-5" />
                      {{ $t('jobs.share') }}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div>
            <div class="bg-white dark:bg-card dark:border dark:border-border/30 rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <h3 class="text-xl font-bold mb-6 pb-6 border-b dark:border-border/30">{{ $t('jobs.summary') }}</h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="p-2 bg-primary/10 text-primary rounded-md me-4 rtl:me-0 rtl:ms-4">
                    <BriefcaseIcon class="h-5 w-5" />
                  </div>
                  <div>
                    <h4 class="font-medium">{{ $t('jobs.jobType') }}</h4>
                    <p class="text-foreground/70 dark:text-foreground/60">{{ job.type }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="p-2 bg-primary/10 text-primary rounded-md me-4 rtl:me-0 rtl:ms-4">
                    <MapPinIcon class="h-5 w-5" />
                  </div>
                  <div>
                    <h4 class="font-medium">{{ $t('jobs.location') }}</h4>
                    <p class="text-foreground/70 dark:text-foreground/60">{{ job.location }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="p-2 bg-primary/10 text-primary rounded-md me-4 rtl:me-0 rtl:ms-4">
                    <BuildingIcon class="h-5 w-5" />
                  </div>
                  <div>
                    <h4 class="font-medium">{{ $t('jobs.department') }}</h4>
                    <p class="text-foreground/70 dark:text-foreground/60">{{ job.department }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="p-2 bg-primary/10 text-primary rounded-md me-4 rtl:me-0 rtl:ms-4">
                    <DollarSignIcon class="h-5 w-5" />
                  </div>
                  <div>
                    <h4 class="font-medium">{{ $t('jobs.salaryRange') }}</h4>
                    <p class="text-foreground/70 dark:text-foreground/60">{{ job.salary || $t('jobs.competitiveSalary') }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="p-2 bg-primary/10 text-primary rounded-md me-4 rtl:me-0 rtl:ms-4">
                    <GraduationCapIcon class="h-5 w-5" />
                  </div>
                  <div>
                    <h4 class="font-medium">{{ $t('jobs.education') }}</h4>
                    <p class="text-foreground/70 dark:text-foreground/60">{{ job.education }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="p-2 bg-primary/10 text-primary rounded-md me-4 rtl:me-0 rtl:ms-4">
                    <ClockIcon class="h-5 w-5" />
                  </div>
                  <div>
                    <h4 class="font-medium">{{ $t('jobs.experience') }}</h4>
                    <p class="text-foreground/70 dark:text-foreground/60">{{ job.experience }}</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-8 pt-6 border-t dark:border-border/30">
                <h4 class="font-medium mb-4">{{ $t('jobs.shareThisJob') }}</h4>
                <div class="flex space-s-3 rtl:space-s-reverse">
                  <Button 
                    as="a" 
                    href="#" 
                    @click.prevent="shareOnFacebook" 
                    variant="ghost"
                    class="p-2 bg-[#1877F2]/10 text-[#1877F2] dark:bg-[#1877F2]/20 dark:text-[#4293FB] rounded-full hover:bg-[#1877F2]/20 transition-colors h-auto"
                    :aria-label="$t('jobs.shareOnFacebook')"
                  >
                    <FacebookIcon class="h-5 w-5" />
                  </Button>
                  <Button 
                    as="a" 
                    href="#" 
                    @click.prevent="shareOnLinkedIn"
                    variant="ghost"
                    class="p-2 bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 dark:text-[#0A86E2] rounded-full hover:bg-[#0A66C2]/20 transition-colors h-auto"
                    :aria-label="$t('jobs.shareOnLinkedIn')"
                  >
                    <LinkedinIcon class="h-5 w-5" />
                  </Button>
                  <Button 
                    as="a" 
                    href="#" 
                    @click.prevent="copyToClipboard"
                    variant="ghost"
                    class="p-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full hover:bg-primary/20 transition-colors h-auto"
                    :aria-label="$t('jobs.copyLink')"
                  >
                    <CopyIcon class="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div class="mt-8">
                <Button 
                  @click="openQuickApplyModal"
                  variant="default"
                  class="inline-flex w-full items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors mb-3"
                  :disabled="isSubmitting"
                >
                  <LightningBoltIcon class="mr-2 h-4 w-4" />
                  {{ $t('jobs.easyApply') }}
                </Button>
                
                <Button 
                  as="RouterLink"
                  :to="`/jobs/${job.id}/apply`"
                  variant="outline"
                  class="inline-flex w-full items-center justify-center px-6 py-3 rounded-md mb-3"
                  :disabled="isSubmitting"
                >
                  <SendIcon class="mr-2 h-4 w-4" />
                  {{ $t('jobs.applyNow') }}
                </Button>
                
                <Button 
                  variant="ghost"
                  class="inline-flex w-full items-center justify-center px-6 py-3 rounded-md"
                  @click="toggleSaveJob"
                  :disabled="isSubmitting"
                >
                  <BookmarkIcon v-if="isSaved" class="mr-2 h-4 w-4 fill-primary" />
                  <BookmarkIcon v-else class="mr-2 h-4 w-4" />
                  {{ isSaved ? $t('jobs.saved') : $t('jobs.saveJob') }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Similar Jobs -->
    <section class="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">{{ $t('jobs.similarJobs') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <JobCard 
            v-for="(similarJob, i) in similarJobs" 
            :key="i" 
            :job="similarJob" 
            :compact="true"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection />

    <!-- Job Apply Modal -->
    <JobApplyModal
      v-model:isOpen="isQuickApplyModalOpen"
      :job-id="job.id.toString()"
      :job-title="job.title"
      @success="handleApplicationSuccess"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { 
  ChevronRightIcon, 
  MapPinIcon, 
  BriefcaseIcon, 
  CalendarIcon, 
  DollarSignIcon,
  BuildingIcon,
  ClockIcon,
  GraduationCapIcon,
  ShareIcon,
  UploadIcon,
  FacebookIcon,
  LinkedinIcon,
  CopyIcon,
  CheckCircleIcon,
  XCircleIcon,
  AlertCircleIcon,
  SendIcon,
  BookmarkIcon,
  Zap as LightningBoltIcon
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import CtaSection from '@/components/CtaSection.vue'
import { useJobsStore } from '@/stores/jobs'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import JobApplyModal from '@/components/jobs/JobApplyModal.vue'
import { toast } from 'vue-sonner'
import JobCard from '@/components/jobs/JobCard.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const jobsStore = useJobsStore()

// Form state
const isSubmitting = ref(false)
const showSuccessAlert = ref(false)
const showErrorAlert = ref(false)
const formErrorMessage = ref('')
const selectedFileName = ref('')

// Get the current job based on route params
const jobId = computed(() => route.params.id as string)
const job = computed(() => {
  const found = jobsStore.getJobById(jobId.value)
  return found || null // Return null if job not found
})

// Similar jobs (excluding current one)
const similarJobs = computed(() => {
  // Get jobs in the same department, or others if there aren't enough
  const sameDepartment = jobsStore.jobs
    .filter(j => j.id !== jobId.value && j.department === job.value.department)
  
  let related = [...sameDepartment]
  
  // If we don't have 3 jobs in the same department, add others
  if (related.length < 3) {
    const others = jobsStore.jobs
      .filter(j => j.id !== jobId.value && j.department !== job.value.department)
    
    // Randomize the others array
    const randomOthers = [...others].sort(() => 0.5 - Math.random())
    
    // Add enough to make up 3 total
    related = [...related, ...randomOthers.slice(0, 3 - related.length)]
  }
  
  return related.slice(0, 3)
})

// Redirect to not found page if job doesn't exist
onMounted(() => {
  if (!job.value) {
    router.replace('/jobs/not-found')
  }
})

// Define validation schema
const phoneRegex = /^(\+?[0-9]{1,4}[-\s.]?)?(\([0-9]{1,4}\)[-\s.]?)?[0-9]{1,}[-\s.]?[0-9]{1,}[-\s.]?[0-9]{1,}$/

const validationSchema = toTypedSchema(
  z.object({
    firstName: z.string().min(2, t('jobs.form.errors.firstNameRequired')),
    lastName: z.string().min(2, t('jobs.form.errors.lastNameRequired')),
    email: z.string().email(t('jobs.form.errors.validEmail')),
    phone: z.string()
      .refine(val => phoneRegex.test(val), {
        message: t('jobs.form.errors.validPhone')
      }),
    resume: z.any().refine(file => file instanceof File, {
      message: t('jobs.form.errors.resumeRequired')
    }),
    coverLetter: z.string().optional(),
    consentToPolicy: z.boolean().refine(val => val === true, {
      message: t('jobs.form.errors.consentRequired')
    })
  })
)

// Initialize form
const { handleSubmit, errors, values, setFieldValue, validateField, validate } = useForm({
  validationSchema,
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    consentToPolicy: false
  }
})

// File upload handler
function handleFileUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const file = input.files[0]
    setFieldValue('resume', file)
    selectedFileName.value = file.name
  } else {
    setFieldValue('resume', null)
    selectedFileName.value = ''
  }
  validateField('resume')
}

// Validate on input change
async function validateOnChange(field: string, value: any) {
  setFieldValue(field, value)
  await validateField(field)
}

// Form submission handler
const onSubmit = handleSubmit(async (values) => {
  try {
    isSubmitting.value = true
    showErrorAlert.value = false
    
    // Validate entire form
    const result = await validate()
    if (!result.valid) {
      showErrorAlert.value = true
      formErrorMessage.value = t('jobs.form.errors.formErrors')
      return
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form after successful submission
    setFieldValue('firstName', '')
    setFieldValue('lastName', '')
    setFieldValue('email', '')
    setFieldValue('phone', '')
    setFieldValue('resume', null)
    setFieldValue('coverLetter', '')
    setFieldValue('consentToPolicy', false)
    selectedFileName.value = ''
    
    // Show success message
    showSuccessAlert.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessAlert.value = false
    }, 6000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    showErrorAlert.value = true
    formErrorMessage.value = t('jobs.form.errors.submissionError')
  } finally {
    isSubmitting.value = false
  }
})

// Sharing functionality
const getShareUrl = () => {
  return window.location.href
}

const getShareTitle = () => {
  return `${job.value.title} - LEAP PM`
}

const getShareText = () => {
  return `${job.value.title} - ${job.value.location} | ${job.value.type}`
}

// Main share function using navigator.share if available
const shareJob = async () => {
  const shareData = {
    title: getShareTitle(),
    text: getShareText(),
    url: getShareUrl()
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      // Fallback to copy to clipboard if Web Share API is not available
      copyToClipboard()
    }
  } catch (error) {
    console.error('Error sharing job:', error)
  }
}

// Social media sharing functions
const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnX = () => {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareTitle())}&url=${encodeURIComponent(getShareUrl())}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`
  window.open(url, '_blank', 'width=600,height=400')
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(getShareUrl())
    alert(t('jobs.linkCopied'))
  } catch (error) {
    console.error('Failed to copy link:', error)
  }
}

// State
const isQuickApplyModalOpen = ref(false)
const isSaved = ref(false)

// Methods
function openQuickApplyModal() {
  isQuickApplyModalOpen.value = true
}

function toggleSaveJob() {
  isSubmitting.value = true
  
  // Simulate API call with a short delay
  setTimeout(() => {
    isSaved.value = !isSaved.value
    
    if (isSaved.value) {
      toast({
        title: t('jobs.savedSuccess'),
        description: t('jobs.savedSuccessDescription'),
        variant: 'default'
      })
    }
    
    isSubmitting.value = false
  }, 300)
}

function handleApplicationSuccess(data) {
  console.log('Application submitted:', data)
  toast({
    title: t('jobs.applicationSubmitted'),
    description: t('jobs.applicationSubmittedDescription'),
    variant: 'default'
  })
}
</script>

