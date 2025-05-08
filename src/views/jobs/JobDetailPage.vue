<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Job Header Section -->
    <section class="bg-primary text-white py-16 md:py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-wrap items-center text-sm mb-6">
            <RouterLink to="/" class="text-white/80 hover:text-white transition-colors">
              {{ $t('common.home') }}
            </RouterLink>
            <ChevronRightIcon class="h-4 w-4 mx-2 text-white/50 rtl:rotate-180" />
            <RouterLink to="/jobs" class="text-white/80 hover:text-white transition-colors">
              {{ $t('jobs.jobs') }}
            </RouterLink>
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
            <a href="#apply" class="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors">
              {{ $t('jobs.applyNow') }}
            </a>
            <button 
              @click="shareJob" 
              class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors border border-white/20"
            >
              <ShareIcon class="h-5 w-5 me-2 rtl:me-0 rtl:ms-2" />
              {{ $t('jobs.share') }}
            </button>
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
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="block text-sm font-medium">{{ $t('jobs.form.firstName') }} *</label>
                    <input type="text" class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-card/80 dark:border-border/40" required />
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-medium">{{ $t('jobs.form.lastName') }} *</label>
                    <input type="text" class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-card/80 dark:border-border/40" required />
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="block text-sm font-medium">{{ $t('jobs.form.email') }} *</label>
                    <input type="email" class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-card/80 dark:border-border/40" required />
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-medium">{{ $t('jobs.form.phone') }} *</label>
                    <input type="tel" class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-card/80 dark:border-border/40" required />
                  </div>
                </div>
                
                <div class="space-y-2">
                  <label class="block text-sm font-medium">{{ $t('jobs.form.resume') }} *</label>
                  <div class="border border-dashed border-border rounded-md p-4 text-center dark:border-border/40 dark:bg-card/50">
                    <input type="file" class="hidden" id="resume" accept=".pdf,.doc,.docx" />
                    <label for="resume" class="cursor-pointer">
                      <UploadIcon class="h-10 w-10 mx-auto text-foreground/40 mb-2" />
                      <p class="text-foreground/70">{{ $t('jobs.form.dragFile') }}</p>
                      <p class="text-sm text-foreground/50 mt-1">{{ $t('jobs.form.supportedFormats') }}</p>
                    </label>
                  </div>
                </div>
                
                <div class="space-y-2">
                  <label class="block text-sm font-medium">{{ $t('jobs.form.coverLetter') }}</label>
                  <textarea rows="4" class="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-card/80 dark:border-border/40" :placeholder="$t('jobs.form.coverLetterPlaceholder')"></textarea>
                </div>
                
                <div class="space-y-2">
                  <label class="flex items-start">
                    <input type="checkbox" class="mt-1 me-2" required />
                    <span class="text-sm text-foreground/70">
                      {{ $t('jobs.form.consent') }}
                    </span>
                  </label>
                </div>
                
                <div>
                  <button type="submit" class="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors w-full md:w-auto">
                    {{ $t('jobs.form.submit') }}
                  </button>
                </div>
              </form>
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
                  <a 
                    href="#" 
                    @click.prevent="shareOnFacebook" 
                    class="p-2 bg-[#1877F2]/10 text-[#1877F2] dark:bg-[#1877F2]/20 dark:text-[#4293FB] rounded-full hover:bg-[#1877F2]/20 transition-colors"
                    :aria-label="$t('jobs.shareOnFacebook')"
                  >
                    <FacebookIcon class="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    @click.prevent="shareOnX"
                    class="p-2 bg-black/10 text-black dark:bg-white/20 dark:text-white rounded-full hover:bg-black/20 dark:hover:bg-white/30 transition-colors"
                    :aria-label="$t('jobs.shareOnX')"
                  >
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="lucide size-5 text-current">
                    <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                  </svg>
                  </a>
                  <a 
                    href="#" 
                    @click.prevent="shareOnLinkedIn"
                    class="p-2 bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 dark:text-[#0A86E2] rounded-full hover:bg-[#0A66C2]/20 transition-colors"
                    :aria-label="$t('jobs.shareOnLinkedIn')"
                  >
                    <LinkedinIcon class="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    @click.prevent="copyToClipboard"
                    class="p-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full hover:bg-primary/20 transition-colors"
                    :aria-label="$t('jobs.copyLink')"
                  >
                    <CopyIcon class="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div class="mt-8">
                <a href="#apply" class="inline-flex w-full items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  {{ $t('jobs.applyNow') }}
                </a>
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
          <div v-for="(similarJob, i) in similarJobs" :key="i" class="bg-white dark:bg-card dark:border dark:border-border/30 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-start mb-4">
              <div class="p-3 bg-primary/10 text-primary rounded-lg me-4 rtl:me-0 rtl:ms-4">
                <BriefcaseIcon class="h-6 w-6" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-1">{{ similarJob.title }}</h3>
                <p class="text-foreground/60 dark:text-foreground/50 text-sm">{{ similarJob.location }}</p>
              </div>
            </div>
            <div class="mb-4">
              <p class="text-foreground/70 dark:text-foreground/60 line-clamp-2">{{ similarJob.description }}</p>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{{ similarJob.type }}</span>
              <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{{ similarJob.department }}</span>
            </div>
            <RouterLink :to="`/jobs/${similarJob.id}`" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors group">
              {{ $t('jobs.viewDetails') }}
              <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
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
  XIcon,
  LinkedinIcon,
  CopyIcon
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import CtaSection from '@/components/CtaSection.vue'

const { t } = useI18n()
const route = useRoute()
const linkCopied = ref(false)

// Sample jobs data - in a real app, this would come from an API or store
const jobsData = [
  {
    id: 'project-manager',
    title: 'Project Manager',
    type: 'Full Time',
    location: 'Riyadh, Saudi Arabia',
    department: 'Project Controls',
    postedDate: 'June 15, 2023',
    salary: 'SAR 25,000 - 35,000 per month',
    education: 'Bachelor\'s degree in Engineering or related field',
    experience: '7-10 years of experience',
    description: 'We are seeking an experienced Project Manager to join our team in Riyadh. The ideal candidate will be responsible for overseeing all aspects of project delivery, from initiation to closeout, ensuring that projects are completed on time, within budget, and to the highest quality standards.',
    responsibilities: [
      'Develop and manage project plans, schedules, budgets, and resource allocations',
      'Lead cross-functional teams to successfully deliver complex projects',
      'Identify, assess, and mitigate project risks',
      'Monitor project progress and implement corrective actions as needed',
      'Prepare regular status reports and presentations for stakeholders',
      'Coordinate with clients, consultants, and contractors throughout the project lifecycle',
      'Ensure compliance with all relevant regulations and standards',
      'Implement best practices in project management methodologies'
    ],
    requirements: [
      'Bachelor\'s degree in Engineering, Construction Management, or related field',
      '7-10 years of experience in project management, preferably in construction or infrastructure projects',
      'PMP certification or equivalent professional qualification',
      'Strong knowledge of project management methodologies and tools',
      'Experience with project management software (Primavera P6, MS Project)',
      'Excellent communication, leadership, and problem-solving skills',
      'Ability to work effectively in a multicultural environment',
      'Fluency in English; Arabic language skills are a plus'
    ],
    benefits: [
      'Competitive salary package',
      'Medical insurance for employee and dependents',
      'Annual leave and flight tickets',
      'Housing and transportation allowance',
      'Professional development opportunities',
      'Performance-based bonuses'
    ]
  },
  {
    id: 'cost-controller',
    title: 'Cost Controller',
    type: 'Full Time',
    location: 'Jeddah, Saudi Arabia',
    department: 'Cost Management',
    postedDate: 'June 10, 2023',
    salary: 'SAR 18,000 - 25,000 per month',
    education: 'Bachelor\'s degree in Quantity Surveying, Engineering, or related field',
    experience: '5-8 years of experience',
    description: 'We are looking for a skilled Cost Controller to join our Cost Management team in Jeddah. The successful candidate will be responsible for monitoring and controlling project costs, preparing cost reports, and implementing cost control measures to ensure project financial success.',
    responsibilities: [
      'Monitor and control project costs against budgets',
      'Prepare cost reports and forecasts',
      'Analyze cost variances and recommend corrective actions',
      'Support the preparation of project budgets and estimates',
      'Review and approve contractor payment applications',
      'Coordinate with project teams to ensure cost awareness',
      'Implement cost control systems and procedures',
      'Conduct cost risk assessments'
    ],
    requirements: [
      'Bachelor\'s degree in Quantity Surveying, Engineering, Finance, or related field',
      '5-8 years of experience in cost control, preferably in construction or infrastructure projects',
      'Strong analytical skills and attention to detail',
      'Proficiency in cost management software and MS Excel',
      'Knowledge of contract types and financial principles',
      'Good communication and reporting skills',
      'Ability to work under pressure and meet deadlines',
      'Fluency in English; Arabic language skills are a plus'
    ],
    benefits: [
      'Competitive salary package',
      'Medical insurance for employee and dependents',
      'Annual leave and flight tickets',
      'Housing and transportation allowance',
      'Professional development opportunities',
      'Performance-based bonuses'
    ]
  },
  {
    id: 'planning-engineer',
    title: 'Planning Engineer',
    type: 'Full Time',
    location: 'Riyadh, Saudi Arabia',
    department: 'Project Controls',
    postedDate: 'June 5, 2023',
    education: 'Bachelor\'s degree in Engineering or related field',
    experience: '3-5 years of experience',
    description: 'We are seeking a Planning Engineer to join our Project Controls team in Riyadh. The ideal candidate will be responsible for developing and maintaining project schedules, monitoring progress, and providing timely schedule updates and analysis to support successful project delivery.',
    responsibilities: [
      'Develop and maintain detailed project schedules using Primavera P6',
      'Monitor and report on project progress against baseline schedules',
      'Perform schedule risk assessments and develop mitigation strategies',
      'Prepare schedule recovery plans when necessary',
      'Coordinate with project teams to collect progress information',
      'Prepare schedule analysis and reports for management and clients',
      'Support the development of resource-loaded schedules',
      'Participate in project planning meetings and workshops'
    ],
    requirements: [
      'Bachelor\'s degree in Engineering, Construction Management, or related field',
      '3-5 years of experience in project planning and scheduling',
      'Proficiency in Primavera P6 and MS Office applications',
      'Knowledge of scheduling techniques and critical path method',
      'Strong analytical and problem-solving skills',
      'Good communication and presentation abilities',
      'Ability to work in a team environment',
      'Fluency in English; Arabic language skills are a plus'
    ],
    benefits: [
      'Competitive salary package',
      'Medical insurance for employee and dependents',
      'Annual leave and flight tickets',
      'Housing and transportation allowance',
      'Professional development opportunities',
      'Performance-based bonuses'
    ]
  }
]

// Get the current job based on route params
const jobId = computed(() => route.params.id)
const job = computed(() => {
  const found = jobsData.find(j => j.id === jobId.value)
  return found || jobsData[0] // Default to first job if not found
})

// Similar jobs (excluding current one)
const similarJobs = computed(() => {
  return jobsData
    .filter(j => j.id !== jobId.value)
    .slice(0, 3)
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
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
    alert(t('jobs.linkCopied'))
  } catch (error) {
    console.error('Failed to copy link:', error)
  }
}
</script>
