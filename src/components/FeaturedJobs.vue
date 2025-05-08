<template>
  <div>
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90 px-3 py-1 rounded-full text-sm font-medium mb-4">
        {{ $t('jobs.openPositions') }}
      </div>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('jobs.featuredJobs') }}</h2>
      <p class="text-lg text-foreground/70 dark:text-foreground/60">{{ $t('jobs.joinOurTeam') }}</p>
    </div>

    <!-- Jobs Carousel for larger screens -->
    <div class="hidden md:block relative">
      <Carousel
        class="w-full"
        :opts="{ 
          align: 'start',
          loop: featuredJobs.length > 3,
          direction: isRtl ? 'rtl' : 'ltr'
        }"
        @init-api="handleCarouselInit"
      >
        <CarouselContent>
          <CarouselItem v-for="job in featuredJobs" :key="`job-${job.id}`" class="md:basis-1/2 lg:basis-1/3 pl-4">
            <JobCard :job="job" :expandable="false" class="h-full"  />
          </CarouselItem>
        </CarouselContent>
        
        <div class="absolute -bottom-14 start-0 end-0 flex justify-center gap-2">
          <CarouselPrevious 
            class="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-accent dark:border-white/10"
            :class="{'opacity-50 cursor-not-allowed': !canScrollPrev, 'hover:opacity-100': canScrollPrev}"
            :disabled="!canScrollPrev"
          />
          <CarouselNext 
            class="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-accent dark:border-white/10"
            :class="{'opacity-50 cursor-not-allowed': !canScrollNext, 'hover:opacity-100': canScrollNext}"
            :disabled="!canScrollNext"
          />
        </div>
      </Carousel>
    </div>

    <!-- Grid for mobile screens -->
    <div class="md:hidden grid grid-cols-1 gap-6">
      <JobCard 
        v-for="job in featuredJobs.slice(0, 3)" 
        :key="job.id" 
        :job="job"
        :expandable="false"
        class="h-full"
      />
    </div>

    <div class="text-center mt-20">
      <RouterLink 
        to="/jobs" 
        class="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary hover:bg-primary/90 text-white transition-all shadow-sm hover:shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background group"
      >
        {{ $t('jobs.viewAllJobs') }}
        <ArrowRightIcon class="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRightIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useJobs } from '@/services/JobsService'
import JobCard from '@/components/JobCard.vue'
import { useThemeStore } from '@/stores/theme'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from '@/components/ui/carousel'
import type { UnwrapRefCarouselApi } from "@/components/ui/carousel/interface"

const { t } = useI18n()
const themeStore = useThemeStore()
const isRtl = computed(() => themeStore.isRtl)
const { getFeaturedJobs } = useJobs()
const featuredJobs = getFeaturedJobs

// Carousel navigation state
const carouselApi = ref<UnwrapRefCarouselApi | null>(null)
const canScrollPrev = ref(false)
const canScrollNext = ref(false)

// Update carousel navigation state
function handleCarouselInit(api: UnwrapRefCarouselApi) {
  carouselApi.value = api

  if (api) {
    // Update navigation state when selection changes
    api.on('select', () => {
      if (api) {
        canScrollPrev.value = api.canScrollPrev()
        canScrollNext.value = api.canScrollNext()
      }
    })

    // Initialize navigation state
    canScrollPrev.value = api.canScrollPrev()
    canScrollNext.value = api.canScrollNext()
  }
}
</script> 