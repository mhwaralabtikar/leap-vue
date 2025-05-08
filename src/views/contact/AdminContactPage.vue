<template>
  <div class="py-16 sm:py-24 bg-background relative">
    <!-- Decorative background elements -->
    <div class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent"></div>
    
    <div class="container mx-auto px-4 relative">
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-in slide-in-from-bottom duration-700">
          {{ $t('contact.admin.title') }}
        </h1>
        
        <p class="text-lg md:text-xl text-foreground/70 animate-in slide-in-from-bottom duration-700 delay-150">
          {{ $t('contact.admin.subtitle') }}
        </p>
      </div>
      
      <!-- Main Content -->
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Sidebar -->
          <div class="lg:col-span-3 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div class="bg-card rounded-xl p-5 shadow-md border border-border">
              <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <InboxIcon class="h-5 w-5 text-primary" />
                {{ $t('contact.admin.inquiries') }}
              </h2>
              
              <div class="space-y-1">
                <button
                  @click="activeTab = 'all'"
                  class="w-full flex items-center justify-between px-3 py-2 text-start rounded-md transition-colors"
                  :class="activeTab === 'all' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'"
                >
                  <span>{{ $t('contact.admin.all') }}</span>
                  <Badge v-if="contactStore.submissions.length > 0">{{ contactStore.submissions.length }}</Badge>
                </button>
                
                <button
                  v-for="type in inquiryTypes"
                  :key="type.value"
                  @click="activeTab = type.value"
                  class="w-full flex items-center justify-between px-3 py-2 text-start rounded-md transition-colors"
                  :class="activeTab === type.value ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'"
                >
                  <div class="flex items-center gap-2">
                    <component :is="type.icon" class="h-4 w-4" />
                    <span>{{ $t(`contact.inquiryTypes.${type.value}`) }}</span>
                  </div>
                  <Badge v-if="getSubmissionCountByType(type.value) > 0">{{ getSubmissionCountByType(type.value) }}</Badge>
                </button>
              </div>
              
              <div class="mt-6 pt-5 border-t border-border">
                <div class="flex justify-between items-center mb-3">
                  <h3 class="font-medium">{{ $t('contact.admin.status') }}</h3>
                  <button @click="resetFilters" class="text-xs text-primary hover:underline">
                    {{ $t('contact.admin.resetFilters') }}
                  </button>
                </div>
                
                <div class="space-y-2">
                  <div class="flex items-center">
                    <input
                      id="status-all"
                      v-model="filterStatus"
                      type="radio"
                      value="all"
                      class="h-4 w-4 text-primary focus:ring-primary/50"
                    />
                    <label for="status-all" class="ms-2 text-sm">{{ $t('contact.admin.all') }}</label>
                  </div>
                  
                  <div class="flex items-center">
                    <input
                      id="status-new"
                      v-model="filterStatus"
                      type="radio"
                      value="new"
                      class="h-4 w-4 text-primary focus:ring-primary/50"
                    />
                    <label for="status-new" class="ms-2 text-sm flex items-center gap-1">
                      {{ $t('contact.admin.statusNew') }}
                      <Badge v-if="getSubmissionCountByStatus('new') > 0" variant="red">{{ getSubmissionCountByStatus('new') }}</Badge>
                    </label>
                  </div>
                  
                  <div class="flex items-center">
                    <input
                      id="status-read"
                      v-model="filterStatus"
                      type="radio"
                      value="read"
                      class="h-4 w-4 text-primary focus:ring-primary/50"
                    />
                    <label for="status-read" class="ms-2 text-sm">{{ $t('contact.admin.statusRead') }}</label>
                  </div>
                  
                  <div class="flex items-center">
                    <input
                      id="status-responded"
                      v-model="filterStatus"
                      type="radio"
                      value="responded"
                      class="h-4 w-4 text-primary focus:ring-primary/50"
                    />
                    <label for="status-responded" class="ms-2 text-sm">{{ $t('contact.admin.statusResponded') }}</label>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 pt-5 border-t border-border">
                <button 
                  @click="contactStore.fetchSubmissions()"
                  class="w-full bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCwIcon class="h-4 w-4" />
                  {{ $t('contact.admin.refresh') }}
                </button>
              </div>
            </div>
          </div>
          
          <!-- Main Content -->
          <div class="lg:col-span-9 animate-in fade-in slide-in-from-bottom duration-700 delay-450">
            <!-- Loading state -->
            <div v-if="contactStore.isLoading" class="flex justify-center items-center h-64">
              <div class="flex flex-col items-center">
                <LoaderIcon class="h-10 w-10 text-primary animate-spin mb-4" />
                <p class="text-muted-foreground">{{ $t('contact.admin.loading') }}</p>
              </div>
            </div>
            
            <!-- Error state -->
            <div v-else-if="contactStore.error" class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
              <AlertCircleIcon class="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 class="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">{{ $t('contact.admin.errorTitle') }}</h3>
              <p class="text-red-600 dark:text-red-300">{{ contactStore.error }}</p>
              <button @click="contactStore.fetchSubmissions()" class="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 dark:bg-red-900/50 dark:hover:bg-red-900 text-red-700 dark:text-red-300 rounded-md transition-colors">
                {{ $t('contact.admin.tryAgain') }}
              </button>
            </div>
            
            <!-- Empty state -->
            <div v-else-if="filteredSubmissions.length === 0" class="bg-card border border-border rounded-xl p-10 text-center">
              <div class="mx-auto w-20 h-20 flex items-center justify-center bg-primary/5 rounded-full mb-4">
                <InboxIcon class="h-10 w-10 text-primary/60" />
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ $t('contact.admin.noSubmissions') }}</h3>
              <p class="text-muted-foreground max-w-md mx-auto mb-6">{{ $t('contact.admin.noSubmissionsDesc') }}</p>
              <a href="/contact" class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-md transition-colors">
                <SendIcon class="h-4 w-4" />
                {{ $t('contact.admin.goToContact') }}
              </a>
            </div>
            
            <!-- Submissions List -->
            <div v-else>
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold">
                  {{ activeTab === 'all' ? $t('contact.admin.allInquiries') : $t(`contact.inquiryTypes.${activeTab}`) }}
                  <span class="text-lg text-muted-foreground">({{ filteredSubmissions.length }})</span>
                </h2>
                
                <div class="flex items-center gap-2">
                  <input
                    v-model="searchTerm"
                    type="search"
                    :placeholder="$t('contact.admin.search')"
                    class="px-3 py-1 border border-border bg-card rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>
              
              <div class="space-y-4">
                <div 
                  v-for="submission in displayedSubmissions" 
                  :key="submission.id"
                  class="bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
                  :class="{'border-primary/50': submission.status === 'new'}"
                >
                  <div 
                    class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                    @click="openSubmission(submission)"
                  >
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="font-medium">{{ submission.subject }}</h3>
                        <Badge v-if="submission.status === 'new'" variant="red">{{ $t('contact.admin.new') }}</Badge>
                        <Badge v-else-if="submission.status === 'read'" variant="blue">{{ $t('contact.admin.read') }}</Badge>
                        <Badge v-else-if="submission.status === 'responded'" variant="green">{{ $t('contact.admin.responded') }}</Badge>
                      </div>
                      
                      <div class="text-sm text-muted-foreground mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        <div class="flex items-center gap-1">
                          <UserIcon class="h-3 w-3" />
                          <span>{{ submission.name }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                          <MailIcon class="h-3 w-3" />
                          <span>{{ submission.email }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                          <ClockIcon class="h-3 w-3" />
                          <span>{{ formatDate(submission.createdAt) }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                          <TagIcon class="h-3 w-3" />
                          <span>{{ $t(`contact.inquiryTypes.${submission.inquiryType}`) }}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="flex items-center">
                      <ChevronRightIcon class="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <!-- Expanded Content when selected -->
                  <div v-if="selectedSubmission?.id === submission.id" class="border-t border-border p-4">
                    <div class="space-y-4">
                      <div>
                        <div class="bg-muted/50 rounded-md p-4">
                          <h4 class="font-medium mb-2">{{ $t('contact.message') }}</h4>
                          <p class="whitespace-pre-line">{{ submission.message }}</p>
                        </div>
                      </div>
                      
                      <div class="flex flex-wrap gap-2">
                        <button 
                          @click="updateStatus(submission.id, 'read')"
                          class="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                          :disabled="submission.status === 'read'"
                        >
                          <EyeIcon class="h-4 w-4" />
                          {{ $t('contact.admin.markAsRead') }}
                        </button>
                        
                        <button 
                          @click="updateStatus(submission.id, 'responded')"
                          class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-md hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                          :disabled="submission.status === 'responded'"
                        >
                          <CheckIcon class="h-4 w-4" />
                          {{ $t('contact.admin.markAsResponded') }}
                        </button>
                        
                        <a 
                          :href="`mailto:${submission.email}?subject=RE: ${submission.subject}`"
                          class="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
                        >
                          <ReplyIcon class="h-4 w-4" />
                          {{ $t('contact.admin.reply') }}
                        </a>
                        
                        <button 
                          @click="confirmDelete(submission.id)"
                          class="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded-md hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
                        >
                          <TrashIcon class="h-4 w-4" />
                          {{ $t('contact.admin.delete') }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Pagination -->
              <div v-if="totalPages > 1" class="flex justify-center mt-8">
                <div class="flex gap-1">
                  <button 
                    @click="currentPage = 1" 
                    :disabled="currentPage === 1"
                    class="px-3 py-1 rounded-md border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronsLeftIcon class="h-4 w-4" />
                  </button>
                  <button 
                    @click="currentPage--" 
                    :disabled="currentPage === 1"
                    class="px-3 py-1 rounded-md border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeftIcon class="h-4 w-4" />
                  </button>
                  
                  <button 
                    v-for="page in paginationRange" 
                    :key="page"
                    @click="currentPage = page"
                    class="px-3 py-1 rounded-md border hover:bg-muted"
                    :class="currentPage === page ? 'bg-primary text-primary-foreground border-primary' : 'bg-card border-border'"
                  >
                    {{ page }}
                  </button>
                  
                  <button 
                    @click="currentPage++" 
                    :disabled="currentPage === totalPages"
                    class="px-3 py-1 rounded-md border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRightIcon class="h-4 w-4" />
                  </button>
                  <button 
                    @click="currentPage = totalPages" 
                    :disabled="currentPage === totalPages"
                    class="px-3 py-1 rounded-md border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronsRightIcon class="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Delete Confirmation Dialog -->
    <div 
      v-if="showDeleteDialog" 
      class="fixed inset-0 bg-black/50 dark:bg-black/60 flex items-center justify-center z-50 p-4"
      @click="showDeleteDialog = false"
    >
      <div 
        class="bg-background rounded-xl shadow-lg max-w-md w-full p-6"
        @click.stop
      >
        <AlertTriangleIcon class="h-10 w-10 text-red-500 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-center mb-2">{{ $t('contact.admin.confirmDelete') }}</h3>
        <p class="text-muted-foreground text-center mb-6">{{ $t('contact.admin.deleteWarning') }}</p>
        
        <div class="flex justify-center gap-4">
          <button 
            @click="showDeleteDialog = false"
            class="px-5 py-2 border border-border rounded-md hover:bg-muted transition-colors"
          >
            {{ $t('common.cancel') }}
          </button>
          <button 
            @click="deleteSubmission"
            class="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            {{ $t('contact.admin.delete') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineComponent, h, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  InboxIcon, 
  LoaderIcon, 
  UserIcon, 
  MailIcon, 
  ClockIcon, 
  TagIcon, 
  ChevronRightIcon,
  EyeIcon,
  CheckIcon,
  ReplyIcon,
  TrashIcon,
  RefreshCwIcon,
  AlertCircleIcon,
  AlertTriangleIcon,
  HelpCircleIcon,
  BriefcaseIcon,
  BuildingIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  SendIcon
} from 'lucide-vue-next'
import { useContactStore } from '@/stores/contact'
import type { ContactSubmission } from '@/stores/contact'

// Badge component (inline for simplicity)
const Badge = defineComponent({
  name: 'Badge',
  props: {
    variant: {
      type: String,
      default: 'default'
    }
  },
  setup(props, { slots }) {
    const variantClasses = computed(() => {
      switch (props.variant) {
        case 'red':
          return 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'
        case 'green':
          return 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300'
        case 'blue':
          return 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
        default:
          return 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
      }
    })
    
    return () => h(
      'span',
      { 
        class: `inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${variantClasses.value}` 
      },
      slots.default?.()
    )
  }
})

const { t, locale } = useI18n()
const contactStore = useContactStore()

// Filtering and pagination
const activeTab = ref('all')
const filterStatus = ref('all')
const searchTerm = ref('')
const currentPage = ref(1)
const itemsPerPage = 6
const selectedSubmission = ref<ContactSubmission | null>(null)
const showDeleteDialog = ref(false)
const submissionToDelete = ref<string | null>(null)

// Inquiry types for tabs
const inquiryTypes = [
  { value: 'general', icon: HelpCircleIcon },
  { value: 'services', icon: BriefcaseIcon },
  { value: 'partnership', icon: BuildingIcon },
  { value: 'support', icon: HeartIcon },
]

// Reset filters
function resetFilters() {
  activeTab.value = 'all'
  filterStatus.value = 'all'
  searchTerm.value = ''
  currentPage.value = 1
}

// Get submissions by type
function getSubmissionCountByType(type: string) {
  return contactStore.submissions.filter(s => s.inquiryType === type).length
}

// Get submissions by status
function getSubmissionCountByStatus(status: string) {
  return contactStore.submissions.filter(s => s.status === status).length
}

// Format date
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale.value, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date)
}

// Filtered submissions
const filteredSubmissions = computed(() => {
  return contactStore.submissions.filter(submission => {
    // Filter by tab
    if (activeTab.value !== 'all' && submission.inquiryType !== activeTab.value) {
      return false
    }
    
    // Filter by status
    if (filterStatus.value !== 'all' && submission.status !== filterStatus.value) {
      return false
    }
    
    // Filter by search term
    if (searchTerm.value) {
      const searchLower = searchTerm.value.toLowerCase()
      return (
        submission.name.toLowerCase().includes(searchLower) ||
        submission.email.toLowerCase().includes(searchLower) ||
        submission.subject.toLowerCase().includes(searchLower) ||
        submission.message.toLowerCase().includes(searchLower)
      )
    }
    
    return true
  }).sort((a, b) => {
    // Sort by created date (newest first)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
})

// Pagination
const totalPages = computed(() => {
  return Math.ceil(filteredSubmissions.value.length / itemsPerPage)
})

const displayedSubmissions = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredSubmissions.value.slice(startIndex, endIndex)
})

const paginationRange = computed(() => {
  // Create an array of page numbers for pagination
  const range: number[] = []
  const maxVisiblePages = 5
  
  if (totalPages.value <= maxVisiblePages) {
    // Show all pages if total is less than max visible
    for (let i = 1; i <= totalPages.value; i++) {
      range.push(i)
    }
  } else {
    // Calculate range around current page
    const leftOffset = Math.floor(maxVisiblePages / 2)
    let start = currentPage.value - leftOffset
    
    if (start < 1) {
      start = 1
    }
    
    let end = start + maxVisiblePages - 1
    
    if (end > totalPages.value) {
      end = totalPages.value
      start = end - maxVisiblePages + 1
      if (start < 1) start = 1
    }
    
    for (let i = start; i <= end; i++) {
      range.push(i)
    }
  }
  
  return range
})

// Watch for changes in filters to reset pagination
watch([activeTab, filterStatus, searchTerm], () => {
  currentPage.value = 1
  selectedSubmission.value = null
})

// Open submission details
function openSubmission(submission: ContactSubmission) {
  // If already selected, close it
  if (selectedSubmission.value?.id === submission.id) {
    selectedSubmission.value = null
    return
  }
  
  selectedSubmission.value = submission
  
  // Mark as read if it's new
  if (submission.status === 'new') {
    contactStore.updateSubmissionStatus(submission.id, 'read')
  }
}

// Update submission status
function updateStatus(id: string, status: 'new' | 'read' | 'responded') {
  contactStore.updateSubmissionStatus(id, status)
}

// Delete submission
function confirmDelete(id: string) {
  submissionToDelete.value = id
  showDeleteDialog.value = true
}

function deleteSubmission() {
  if (submissionToDelete.value) {
    contactStore.deleteSubmission(submissionToDelete.value)
    
    // Reset selected submission if it was the deleted one
    if (selectedSubmission.value?.id === submissionToDelete.value) {
      selectedSubmission.value = null
    }
    
    // Close dialog
    showDeleteDialog.value = false
    submissionToDelete.value = null
  }
}
</script> 