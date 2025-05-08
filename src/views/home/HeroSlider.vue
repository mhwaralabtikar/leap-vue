<template>
  <div class="relative overflow-hidden">
    <Carousel 
      :opts="{ 
        loop: true, 
        duration: 30, 
        direction: isRtl ? 'rtl' : 'ltr'
      }"
      class="w-full"
      @init-api="handleInitApi"
    >
      <CarouselContent>
        <CarouselItem v-for="(slide, index) in slides" :key="index" class="min-h-[600px] h-[90vh]">
          <div class="relative h-full w-full">
            <!-- Preload images with proper alt text and loading attributes -->
            <img 
              :src="slide.image" 
              :alt="$t(slide.title)" 
              class="absolute inset-0 h-full w-full object-cover"
              :loading="index === 0 ? 'eager' : 'lazy'"
            />
            <!-- Overlay to ensure text visibility -->
            <div class="absolute inset-0 bg-black/30"></div>
            <!-- Dynamic gradient based on direction -->
            <div 
              class="absolute inset-0"
              :class="[
                isRtl 
                  ? 'bg-gradient-to-l from-black/70 via-black/50 to-transparent' 
                  : 'bg-gradient-to-r from-black/70 via-black/50 to-transparent'
              ]"
            >
              <div class="container mx-auto px-4 h-full flex items-center">
                <div :class="[isRtl ? 'ms-auto' : 'me-auto', 'max-w-xl']">
                  <h1 
                    class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-in fade-in slide-in-from-bottom duration-700"
                    style="--animate-y: 20px;"
                  >
                    {{ $t(slide.title) }}
                  </h1>
                  <p 
                    class="text-lg md:text-xl mb-8 text-white/90 animate-in fade-in slide-in-from-bottom duration-700 delay-150"
                    style="--animate-y: 20px;"
                  >
                    {{ $t(slide.subtitle) }}
                  </p>
                  <div 
                    class="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300"
                    style="--animate-y: 20px;"
                  >
                    <RouterLink 
                      to="/contact" 
                      class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg flex items-center"
                    >
                      <PhoneIcon class="me-2 h-4 w-4" />
                      {{ $t('hero.cta') }}
                    </RouterLink>
                    <RouterLink 
                      to="/services" 
                      class="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg flex items-center"
                    >
                      <InfoIcon class="me-2 h-4 w-4" />
                      {{ $t('hero.learnMore') }}
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      <!-- Custom Navigation Buttons - RTL aware -->
      <button 
        @click="scrollPrev" 
        class="absolute top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full z-10 hover:bg-white/20 transition-all border border-white/20 shadow-lg"
        :class="[isRtl ? 'end-4' : 'start-4']"
        :aria-label="$t('common.previousSlide')"
      >
        <ChevronLeftIcon :class="{'h-5 w-5': true, 'hidden': isRtl, 'block': !isRtl}" />
        <ChevronRightIcon :class="{'h-5 w-5': true, 'block': isRtl, 'hidden': !isRtl}" />
      </button>
      <button 
        @click="scrollNext" 
        class="absolute top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full z-10 hover:bg-white/20 transition-all border border-white/20 shadow-lg"
        :class="[isRtl ? 'start-4' : 'end-4']"
        :aria-label="$t('common.nextSlide')"
      >
        <ChevronRightIcon :class="{'h-5 w-5': true, 'hidden': isRtl, 'block': !isRtl}" />
        <ChevronLeftIcon :class="{'h-5 w-5': true, 'block': isRtl, 'hidden': !isRtl}" />
      </button>

      <!-- Pagination Dots -->
      <div class="absolute bottom-8 start-0 end-0 flex justify-center gap-3">
        <button 
          v-for="(_, index) in slides" 
          :key="index"
          @click="scrollTo(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all', 
            currentIndex === index 
              ? 'bg-primary w-8' 
              : 'bg-white/50 hover:bg-white/80'
          ]"
          :aria-label="$t('common.goToSlide', { number: index + 1 })"
          :aria-current="currentIndex === index ? 'true' : 'false'"
        ></button>
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, watch, computed, onMounted } from 'vue'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  PhoneIcon, 
  InfoIcon 
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import type { UnwrapRefCarouselApi } from "@/components/ui/carousel/interface"

const { t, locale } = useI18n()
const themeStore = useThemeStore()
const isRtl = computed(() => themeStore.locale === 'ar')

const currentIndex = ref(0)
const carouselApi = ref<UnwrapRefCarouselApi | null>(null)
let autoScrollInterval: number | null = null
let isUserInteracting = false
let directionChangeTimeout: number | null = null

// Define slides with translation keys and higher quality images
const slides = [
  {
    title: 'services.projectControls.title',
    subtitle: 'services.projectControls.description',
    image: 'https://picsum.photos/id/1019/1920/1080'
  },
  {
    title: 'services.costManagement.title',
    subtitle: 'services.costManagement.description',
    image: 'https://picsum.photos/id/175/1920/1080'
  },
  {
    title: 'services.scheduling.title',
    subtitle: 'services.scheduling.description',
    image: 'https://picsum.photos/id/3/1920/1080'
  }
]

// Reset the carousel when locale or RTL state changes
watch([() => locale.value, isRtl], () => {
  if (carouselApi.value) {
    // Need to pause auto-scroll during the refresh
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval)
      autoScrollInterval = null
    }
    
    // Clear any pending direction change timeout
    if (directionChangeTimeout) {
      clearTimeout(directionChangeTimeout)
    }
    
    // Give DOM time to update direction attribute
    directionChangeTimeout = setTimeout(() => {
      // Temporarily hide carousel to prevent visual glitches
      const carouselElement = document.querySelector('.carousel')
      if (carouselElement) {
        (carouselElement as HTMLElement).style.visibility = 'hidden'
      }
      
      // Force reflow
      void document.body.offsetHeight
      
      // Go to current slide
      if (carouselApi.value) {
        carouselApi.value.scrollTo(currentIndex.value)
      }
      
      // Show carousel and restart auto-scrolling after a short delay
      setTimeout(() => {
        if (carouselElement) {
          (carouselElement as HTMLElement).style.visibility = 'visible'
        }
        startAutoScroll()
      }, 100)
    }, 200)
  }
})

// Navigation functions
function scrollPrev() {
  // Mark as user interaction to pause auto-scroll temporarily
  isUserInteracting = true
  
  // In RTL mode, scrollPrev and scrollNext are flipped
  if (isRtl.value) {
    carouselApi.value?.scrollNext()
  } else {
    carouselApi.value?.scrollPrev()
  }
  
  // Resume auto-scroll after delay
  setTimeout(() => {
    isUserInteracting = false
  }, 5000)
}

function scrollNext() {
  // Mark as user interaction to pause auto-scroll temporarily
  isUserInteracting = true
  
  // In RTL mode, scrollPrev and scrollNext are flipped
  if (isRtl.value) {
    carouselApi.value?.scrollPrev()
  } else {
    carouselApi.value?.scrollNext()
  }
  
  // Resume auto-scroll after delay
  setTimeout(() => {
    isUserInteracting = false
  }, 5000)
}

function scrollTo(index: number) {
  // Mark as user interaction to pause auto-scroll temporarily
  isUserInteracting = true
  
  if (carouselApi.value) {
    carouselApi.value.scrollTo(index)
  }
  
  // Resume auto-scroll after delay
  setTimeout(() => {
    isUserInteracting = false
  }, 5000)
}

// Handle event for slide selection
function handleSelect() {
  if (carouselApi.value) {
    currentIndex.value = carouselApi.value.selectedScrollSnap() || 0
  }
}

function handleInitApi(api: UnwrapRefCarouselApi) {
  carouselApi.value = api
  
  // Set initial index
  if (api) {
    currentIndex.value = api.selectedScrollSnap() || 0
    
    // Add event listener for selection changes
    api.on('select', handleSelect)
    
    // Start auto-scrolling
    startAutoScroll()
  }
}

// Function to start auto-scrolling
function startAutoScroll() {
  // Clear existing interval if any
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
  
  // Create new interval
  autoScrollInterval = setInterval(() => {
    // Skip auto-scroll if user is interacting
    if (isUserInteracting || !carouselApi.value) return
    
    // Handle auto-scrolling considering RTL direction
    if (isRtl.value) {
      if (carouselApi.value.canScrollPrev()) {
        carouselApi.value.scrollPrev()
      } else {
        carouselApi.value.scrollTo(slides.length - 1)
      }
    } else {
      if (carouselApi.value.canScrollNext()) {
        carouselApi.value.scrollNext()
      } else {
        carouselApi.value.scrollTo(0)
      }
    }
  }, 6000)
}

// Add event listener for document visibility changes
onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange)
})

// Handle document visibility changes
function handleVisibilityChange() {
  if (document.hidden) {
    // Pause auto-scroll when page is not visible
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval)
      autoScrollInterval = null
    }
  } else {
    // Resume auto-scroll when page becomes visible again
    startAutoScroll()
  }
}

// Clean up resources when component is unmounted
onBeforeUnmount(() => {
  // Clear auto-scroll interval
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
    autoScrollInterval = null
  }
  
  // Remove event listeners
  if (carouselApi.value) {
    carouselApi.value.off('select', handleSelect)
  }
  
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<style scoped>
/* RTL specific transitions */
[dir="rtl"] .animate-in {
  --slide-in-from-left: var(--slide-in-to-left);
  --slide-in-from-right: var(--slide-in-to-right);
}

[dir="rtl"] .slide-in-from-bottom {
  transform: translateY(var(--animate-y));
}

/* Smooth transition for pagination indicator */
.rounded-full {
  transition: width 0.3s ease-in-out, background-color 0.3s ease;
}

/* Carousel RTL fix */
.carousel:where([dir="rtl"]) .carousel__viewport {
  direction: rtl;
}
</style> 