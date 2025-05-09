<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- SEO MetaTags -->
    <Head>
      <title>{{ $t('search.title') || 'Search Results' }} | LEAP PM</title>
      <meta name="description" :content="$t('search.description') || 'Search results for your query'" />
      <link rel="canonical" :href="`${siteUrl}/search?q=${encodeURIComponent(searchQuery)}`" />
    </Head>
    
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <!-- Search header -->
        <div class="max-w-3xl mx-auto mb-12">
          <h1 class="text-3xl md:text-4xl font-bold mb-6">
            {{ $t('search.resultsFor') || 'Search Results for' }}:
            <span class="text-primary">{{ searchQuery }}</span>
          </h1>
          
          <!-- Search form -->
          <div class="bg-card dark:bg-card/50 p-6 rounded-xl border border-border/40 shadow-sm">
            <div class="relative">
              <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                class="pl-10 w-full"
                :placeholder="$t('search.placeholder') || 'Search again...'"
                @keydown.enter="performSearch"
                v-model="localSearchQuery"
              />
              <Button 
                @click="performSearch" 
                class="absolute right-1 top-1 h-8"
                size="sm"
                variant="ghost"
              >
                <ArrowRightIcon class="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <!-- Loading state -->
        <div v-if="isLoading" class="max-w-3xl mx-auto text-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p class="mt-4 text-muted-foreground">{{ $t('search.loading') || 'Searching...' }}</p>
        </div>
        
        <!-- Search results -->
        <div v-else-if="searchResults.length > 0" class="max-w-3xl mx-auto">
          <p class="text-sm text-muted-foreground mb-6">
            {{ $t('search.foundResults', { count: searchResults.length }) || `Found ${searchResults.length} results` }}
          </p>
          
          <div class="space-y-6">
            <div 
              v-for="(result, index) in searchResults" 
              :key="index"
              class="bg-card dark:bg-card/50 p-6 rounded-xl border border-border/40 hover:border-border transition-all shadow-sm hover:shadow-md"
            >
              <h2 class="text-xl font-semibold mb-2">
                <RouterLink :to="result.url" class="hover:text-primary transition-colors">
                  {{ result.title }}
                </RouterLink>
              </h2>
              <p class="text-muted-foreground mb-3">{{ result.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-xs text-muted-foreground/60">{{ result.type }}</span>
                <Button 
                  as="RouterLink"
                  :to="result.url"
                  variant="ghost"
                  size="sm"
                  class="text-primary"
                >
                  {{ $t('search.viewResult') || 'View' }}
                  <ArrowRightIcon class="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- No results -->
        <div v-else class="max-w-3xl mx-auto text-center py-12">
          <div class="relative inline-block mb-6">
            <div class="h-24 w-24 bg-muted/30 rounded-full mx-auto flex items-center justify-center">
              <XIcon class="h-12 w-12 text-muted-foreground/70" />
            </div>
          </div>
          <h2 class="text-2xl font-semibold mb-3">{{ $t('search.noResults') || 'No results found' }}</h2>
          <p class="text-muted-foreground mb-6">
            {{ $t('search.tryDifferent') || 'Try different keywords or browse our popular pages' }}
          </p>
          
          <!-- Popular pages -->
          <div class="mt-8">
            <p class="text-sm font-medium mb-3">{{ $t('search.popularPages') || 'Popular Pages' }}:</p>
            <div class="flex flex-wrap justify-center gap-2">
              <Button
                as="RouterLink"
                to="/services"
                variant="outline"
                size="sm"
                class="rounded-full"
              >
                {{ $t('services.title') || 'Services' }}
              </Button>
              <Button
                as="RouterLink"
                to="/projects"
                variant="outline"
                size="sm"
                class="rounded-full"
              >
                {{ $t('projects.title') || 'Projects' }}
              </Button>
              <Button
                as="RouterLink"
                to="/about"
                variant="outline"
                size="sm"
                class="rounded-full"
              >
                {{ $t('about.title') || 'About' }}
              </Button>
              <Button
                as="RouterLink"
                to="/contact"
                variant="outline"
                size="sm"
                class="rounded-full"
              >
                {{ $t('contact.title') || 'Contact' }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { SearchIcon, ArrowRightIcon, XIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Head } from '@vueuse/head'
import { useAppStore } from '@/stores/app'
import { useServicesStore } from '@/stores/services'
import { useProjectsStore } from '@/stores/projects'
import { useJobsStore } from '@/stores/jobs'
import { useBlogStore } from '@/stores/blog'

// Define the search result interface
interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: string;
}

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const servicesStore = useServicesStore()
const projectsStore = useProjectsStore()
const jobsStore = useJobsStore()
const blogStore = useBlogStore()
const siteUrl = appStore.config?.siteUrl || 'https://leap-pm.com'

// Search state
const searchQuery = computed(() => route.query.q as string || '')
const localSearchQuery = ref(searchQuery.value)
const isLoading = ref(false)
const searchResults = ref<SearchResult[]>([])

// Watch for route query changes
watch(() => route.query.q, (newQuery) => {
  if (newQuery) {
    localSearchQuery.value = newQuery as string
    performSearchOperation(newQuery as string)
  }
})

// Check hashtag or query parameter on page load
onMounted(() => {
  if (searchQuery.value) {
    performSearchOperation(searchQuery.value)
  }
  // Check for hashtag in the URL
  if (window.location.hash) {
    const hashTag = window.location.hash.slice(1)
    if (hashTag) {
      localSearchQuery.value = hashTag
      performSearchOperation(hashTag)
      // Update the query parameter to match the hashtag
      if (router && typeof router.push === 'function') {
        router.push({
          path: '/search',
          query: { q: hashTag }
        })
      }
    }
  }
})

// Update the URL and perform search
function performSearch() {
  if (localSearchQuery.value.trim() && router && typeof router.push === 'function') {
    router.push({
      path: '/search',
      query: { q: localSearchQuery.value },
      hash: `#${localSearchQuery.value}`
    })
  }
}

// Search across all stores
async function performSearchOperation(query: string) {
  isLoading.value = true
  const results: SearchResult[] = []
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const normalizedQuery = query.toLowerCase()
    
    // Search services
    servicesStore.services.forEach(service => {
      const matchesTitle = service.title.toLowerCase().includes(normalizedQuery)
      const matchesDescription = service.description.toLowerCase().includes(normalizedQuery)
      
      if (matchesTitle || matchesDescription) {
        results.push({
          title: service.title,
          description: service.description,
          url: `/services/${service.id}`,
          type: 'Service'
        })
      }
    })
    
    // Search projects
    projectsStore.projects.forEach(project => {
      const matchesTitle = project.title.toLowerCase().includes(normalizedQuery)
      const matchesDescription = project.description.toLowerCase().includes(normalizedQuery)
      const matchesCategory = project.category.toLowerCase().includes(normalizedQuery)
      
      if (matchesTitle || matchesDescription || matchesCategory) {
        results.push({
          title: project.title,
          description: project.description,
          url: `/projects/${project.id}`,
          type: 'Project'
        })
      }
    })
    
    // Search jobs
    jobsStore.jobs.forEach(job => {
      const matchesTitle = job.title.toLowerCase().includes(normalizedQuery)
      const matchesDepartment = job.department.toLowerCase().includes(normalizedQuery)
      const matchesDescription = job.description.toLowerCase().includes(normalizedQuery)
      
      if (matchesTitle || matchesDepartment || matchesDescription) {
        results.push({
          title: job.title,
          description: job.description,
          url: `/jobs/${job.id}`,
          type: 'Job'
        })
      }
    })
    
    // Search blog posts
    blogStore.blogPosts.forEach(post => {
      const matchesTitle = post.title.toLowerCase().includes(normalizedQuery)
      const matchesExcerpt = post.excerpt.toLowerCase().includes(normalizedQuery)
      const matchesCategory = post.category.toLowerCase().includes(normalizedQuery)
      const matchesTags = post.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
      
      if (matchesTitle || matchesExcerpt || matchesCategory || matchesTags) {
        results.push({
          title: post.title,
          description: post.excerpt,
          url: `/blog/${post.id}`,
          type: 'Blog Post'
        })
      }
    })
    
    searchResults.value = results
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
  } finally {
    isLoading.value = false
  }
}
</script> 