<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronRightIcon } from "lucide-vue-next"
import { RouterLink } from "vue-router"
import { useProjectsStore } from '@/stores/projects'
import type { UnwrapRefCarouselApi } from "@/components/ui/carousel/interface"
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'

const { t } = useI18n()
const themeStore = useThemeStore()
const isRtl = ref(themeStore.locale === 'ar')

// Carousel API reference
const carouselApi = ref<UnwrapRefCarouselApi | null>(null)
const currentIndex = ref(0)

// Get projects data from store
const projectsStore = useProjectsStore()
const projects = projectsStore.featuredProjects

// Handle selection changes
function handleSelect() {
  if (carouselApi.value) {
    currentIndex.value = carouselApi.value.selectedScrollSnap() || 0
  }
}

// Handle API initialization
function handleInitApi(api: UnwrapRefCarouselApi) {
  carouselApi.value = api
  
  if (api) {
    // Set initial index
    currentIndex.value = api.selectedScrollSnap() || 0
    
    // Register event listener
    api.on('select', handleSelect)
  }
}

// Clean up event listeners
onBeforeUnmount(() => {
  if (carouselApi.value) {
    carouselApi.value.off('select', handleSelect)
  }
})
</script>

<template>
  <section class="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute -start-20 -top-32 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute -end-20 -bottom-32 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div class="mb-6 md:mb-0">
          <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {{ $t('projects.ourProjects') }}
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('projects.title') }}</h2>
          <p class="text-xl text-foreground/70 dark:text-foreground/60 max-w-2xl">
            {{ $t('projects.subtitle') }}
          </p>
        </div>
        <RouterLink to="/projects">
          <Button variant="outline" class="group">
            {{ $t('projects.viewAll') }}
            <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </RouterLink>
      </div>

      <Carousel 
        :opts="{ loop: true, direction: isRtl ? 'rtl' : 'ltr' }" 
        class="w-full"
        @init-api="handleInitApi"
      >
        <CarouselContent>
          <CarouselItem v-for="project in projects" :key="project.id" class="md:basis-1/2 lg:basis-1/3">
            <div class="p-1">
              <div class="overflow-hidden rounded-lg bg-white dark:bg-card shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div class="aspect-[16/9] relative overflow-hidden">
                  <img 
                    :src="project.imageUrl" 
                    :alt="project.title" 
                    class="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <!-- Overlay for hover effects -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div class="absolute top-4 start-4 flex gap-2">
                    <Badge class="bg-primary text-white hover:bg-primary/90">{{ $t(`projects.${project.category.toLowerCase()}`) }}</Badge>
                    <Badge variant="outline" class="bg-white/90 backdrop-blur-sm border-white/30 dark:bg-black/50 dark:border-white/10 dark:text-white">{{ $t(`projects.${project.location.toLowerCase()}`) }}</Badge>
                  </div>
                  
                  <!-- Hover action button -->
                  <div class="absolute bottom-4 end-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <RouterLink :to="`/projects/${project.id}`" class="bg-white dark:bg-primary text-primary dark:text-white px-4 py-2 rounded-md font-medium hover:bg-white/90 dark:hover:bg-primary/90 transition-colors inline-flex items-center">
                      {{ $t('projects.viewDetails') }}
                      <ChevronRightIcon class="ms-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </RouterLink>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{{ project.title }}</h3>
                  <p class="text-foreground/70 dark:text-foreground/60 mb-4 line-clamp-2">{{ project.description }}</p>
                  <RouterLink :to="`/projects/${project.id}`" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors group">
                    {{ $t('projects.seeProject') }}
                    <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </RouterLink>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="hidden md:flex" />
        <CarouselNext class="hidden md:flex" />
      </Carousel>

      <!-- Pagination dots for mobile -->
      <div class="flex justify-center mt-8 md:hidden">
        <div class="flex space-s-2">
          <button 
            v-for="(_, i) in projects" 
            :key="`dot-${i}`" 
            @click="carouselApi?.scrollTo(i)"
            :class="[
              'w-2.5 h-2.5 rounded-full transition-all duration-300 me-2',
              i === currentIndex ? 'bg-primary scale-110' : 'bg-primary/30 hover:bg-primary/50'
            ]"
            :aria-label="$t('common.goToSlide', { number: i + 1 })"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template> 