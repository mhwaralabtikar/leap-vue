<template>
  <div 
    class="job-card bg-card dark:bg-card/80 border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 relative overflow-hidden group"
    :class="{ 'cursor-pointer': clickable }"
    @click="clickable ? navigateToDetail() : null"
  >
    <!-- Featured badge -->
    <div 
      v-if="job.featured" 
      class="absolute top-0 right-0 bg-primary text-white px-4 py-1 font-medium text-xs uppercase transform translate-x-[30%] translate-y-[-50%] rotate-45 shadow-sm"
    >
      {{ $t('jobs.featured') || 'Featured' }}
    </div>
    
    <!-- New badge -->
    <div
      v-if="isNewJob"
      class="absolute top-4 left-4 bg-green-500/90 text-white px-2 py-0.5 rounded-full text-xs font-medium"
    >
      {{ $t('jobs.new') || 'New' }}
    </div>
    
    <!-- Card Header -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-start gap-3">
        <!-- Company Logo or Icon -->
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <img v-if="job.companyLogo" :src="job.companyLogo" :alt="job.company" class="w-10 h-10 object-contain" />
          <BuildingIcon v-else class="w-6 h-6 text-primary" />
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-0.5 group-hover:text-primary transition-colors" :class="{'line-clamp-1': compact}">
            {{ job.title }}
          </h3>
          <p class="text-sm text-muted-foreground mb-0.5">{{ job.company }}</p>
          
          <!-- Badges -->
          <div class="flex flex-wrap gap-2 mt-2" v-if="!compact">
            <span class="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
              {{ job.type }}
            </span>
            <span class="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full flex items-center">
              <MapPinIcon class="h-3 w-3 mr-1" /> {{ job.location }}
            </span>
            <span v-if="job.remote" class="bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs px-2 py-0.5 rounded-full">
              {{ $t('jobs.remote') || 'Remote' }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Bookmark Button -->
      <Button 
        v-if="!compact"
        @click.stop="toggleBookmark"
        variant="ghost" 
        size="icon" 
        class="h-8 w-8 rounded-full hover:bg-primary/10 transition-colors"
        :class="{'text-primary': isBookmarked}"
      >
        <BookmarkIcon v-if="isBookmarked" class="h-5 w-5 fill-primary" />
        <BookmarkIcon v-else class="h-5 w-5" />
      </Button>
    </div>
    
    <!-- Card Body -->
    <div v-if="!compact" class="mb-4">
      <p class="text-sm text-foreground/70 dark:text-foreground/60 line-clamp-2 mb-3">
        {{ job.description }}
      </p>
      
      <!-- Job Details -->
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSignIcon class="h-4 w-4 text-primary" />
          </div>
          <span>{{ job.salary || $t('jobs.competitiveSalary') }}</span>
        </div>
        
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
            <ClockIcon class="h-4 w-4 text-primary" />
          </div>
          <span>{{ job.experience }}</span>
        </div>
      </div>
    </div>
    
    <!-- Compact view: Location and job type on one line -->
    <div v-if="compact" class="flex items-center text-sm text-muted-foreground gap-4 mb-4">
      <div class="flex items-center gap-1">
        <MapPinIcon class="h-3.5 w-3.5" />
        <span>{{ job.location }}</span>
      </div>
      <div class="flex items-center gap-1">
        <BriefcaseIcon class="h-3.5 w-3.5" />
        <span>{{ job.type }}</span>
      </div>
    </div>
    
    <!-- Card Footer -->
    <div class="mt-auto flex flex-wrap items-center justify-between gap-3">
      <div class="text-sm text-muted-foreground">
        <CalendarIcon class="h-4 w-4 inline-block mr-1" />
        {{ postedTimeText }}
      </div>
      
      <!-- Action Buttons -->
      <div class="flex gap-2">
        <!-- View Details Button - Only shown in non-clickable card or compact mode -->
        <Button 
          v-if="!clickable || compact"
          as="RouterLink"
          :to="`/jobs/${job.id}`"
          variant="outline"
          size="sm"
          @click.stop
          class="h-9"
        >
          {{ $t('jobs.viewDetails') || 'View Details' }}
        </Button>
        
        <!-- Apply Button -->
        <Button 
          variant="default"
          size="sm"
          class="h-9"
          @click.stop="openApplyModal"
        >
          <LightningBoltIcon class="h-4 w-4 mr-1.5" />
          {{ $t('jobs.easyApply') || 'Easy Apply' }}
        </Button>
      </div>
    </div>
    
    <!-- Job Apply Modal -->
    <JobApplyModal
      v-model:isOpen="isApplyModalOpen"
      :job-id="job.id.toString()"
      :job-title="job.title"
      @success="handleApplicationSuccess"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { 
  BuildingIcon, 
  MapPinIcon, 
  BookmarkIcon, 
  CalendarIcon, 
  DollarSignIcon, 
  ClockIcon,
  BriefcaseIcon,
  Zap as LightningBoltIcon
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import JobApplyModal from '@/components/jobs/JobApplyModal.vue'

// Define Props
const props = defineProps({
  job: {
    type: Object,
    required: true
  },
  clickable: {
    type: Boolean,
    default: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})

// Emits
const emits = defineEmits(['bookmark', 'apply-success'])

// Composables
const router = useRouter()
const { t } = useI18n()

// State
const isBookmarked = ref(false)
const isApplyModalOpen = ref(false)

// Computed
const postedTimeText = computed(() => {
  // If job has a postedDate, calculate time ago
  if (props.job.postedDate) {
    const now = new Date()
    const postedDate = new Date(props.job.postedDate)
    const diffDays = Math.floor((now.getTime() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      return t('jobs.postedToday') || 'Posted today'
    } else if (diffDays === 1) {
      return t('jobs.postedYesterday') || 'Posted yesterday'
    } else if (diffDays < 7) {
      return `${diffDays} ${t('jobs.daysAgo') || 'days ago'}`
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7)
      return `${weeks} ${weeks === 1 ? (t('jobs.weekAgo') || 'week ago') : (t('jobs.weeksAgo') || 'weeks ago')}`
    } else {
      const months = Math.floor(diffDays / 30)
      return `${months} ${months === 1 ? (t('jobs.monthAgo') || 'month ago') : (t('jobs.monthsAgo') || 'months ago')}`
    }
  }
  
  return props.job.postedAt || t('jobs.recentlyPosted') || 'Recently posted'
})

const isNewJob = computed(() => {
  if (!props.job.postedDate) return false
  
  const now = new Date()
  const postedDate = new Date(props.job.postedDate)
  const diffDays = Math.floor((now.getTime() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
  
  return diffDays < 2 // Job is considered new if posted within last 2 days
})

// Methods
function toggleBookmark() {
  isBookmarked.value = !isBookmarked.value
  emits('bookmark', {
    jobId: props.job.id,
    bookmarked: isBookmarked.value
  })
}

function navigateToDetail() {
  if (props.clickable) {
    router.push(`/jobs/${props.job.id}`)
  }
}

function openApplyModal() {
  isApplyModalOpen.value = true
}

function handleApplicationSuccess(data) {
  emits('apply-success', {
    jobId: props.job.id,
    applicationData: data
  })
}

// Initialize
onMounted(() => {
  // Check if job is bookmarked (could get this from a store/API)
  isBookmarked.value = false // Default value
})
</script>

<style scoped>
.job-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

@keyframes rotate {
  from {
    transform: translate(30%, -50%) rotate(45deg);
  }
  to {
    transform: translate(30%, -50%) rotate(50deg);
  }
}

.job-card:hover .bg-primary {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--primary), 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--primary), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--primary), 0);
  }
}
</style> 