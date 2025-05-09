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
        <CarouselItem v-for="(slide, index) in slides" :key="index" class="min-h-[650px] h-[90vh]">
          <div 
            class="relative h-full w-full overflow-hidden group"
            :class="{'active-slide': currentIndex === index}"
          >
            <!-- Parallax Background with 3D effect -->
            <div 
              class="absolute inset-0 transition-transform duration-15000 ease-out will-change-transform"
              :style="{
                transform: `scale(${currentIndex === index ? 1.05 : 1}) translateZ(0px) translateY(${currentIndex === index ? parallaxOffset : 0}px)`
              }"
            >
              <img 
                :src="slide.image" 
                :alt="$t(slide.title)" 
                class="absolute inset-0 h-full w-full object-cover transition-all duration-10000"
                :loading="index === 0 ? 'eager' : 'lazy'"
              />
            </div>
            
            <!-- Dynamic overlay with gradient mesh -->
            <div class="absolute inset-0 bg-gradient-mesh opacity-40"></div>
            
            <!-- Decorative geometric elements -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
              <div 
                v-for="n in 3" 
                :key="`shape-${n}`" 
                class="absolute rounded-full blur-3xl opacity-20 bg-primary/30 dark:bg-primary/50 animate-float"
                :style="{
                  width: `${200 + n * 100}px`,
                  height: `${200 + n * 100}px`,
                  top: `${20 + n * 15}%`,
                  left: `${(n * 30) - 20}%`,
                  animationDelay: `${n * 2}s`
                }"
              ></div>
            </div>
            
            <!-- Content gradient overlay -->
            <div 
              class="absolute inset-0"
              :class="[
                isRtl 
                  ? 'bg-gradient-to-l from-black/90 via-black/70 to-transparent' 
                  : 'bg-gradient-to-r from-black/90 via-black/70 to-transparent'
              ]"
            >
              <div class="container mx-auto px-4 h-full flex items-center">
                <div 
                  :class="[isRtl ? 'ms-auto' : 'me-auto', 'max-w-2xl pt-16 md:pt-0']"
                >
                  <!-- Animated badge with particle effect -->
                  <div 
                    class="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 dark:border-primary/40 px-4 py-1.5 rounded-full text-white mb-6 slide-in-animation"
                  >
                    <span class="relative h-2 w-2 me-2">
                      <span class="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                      <span class="relative rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {{ $t('hero.tagline') }}
                  </div>
                  
                  <!-- Headline with dynamic text animation -->
                  <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg slide-in-animation">
                    <span 
                      class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary dark:from-primary-light dark:via-primary dark:to-primary-light inline-block"
                    >{{ $t(slide.titleHighlight) }}</span>
                    <span 
                      class="block mt-2 clip-text-animation" 
                      :style="{ '--clip-start': '0%', '--clip-end': '100%' }"
                    >{{ $t(slide.title) }}</span>
                  </h1>
                  
                  <!-- Enhanced subtitle with staggered reveal -->
                  <p class="text-lg md:text-xl mb-8 text-white/90 max-w-xl leading-relaxed drop-shadow-sm slide-in-animation delay-150">
                    {{ $t(slide.subtitle) }}
                  </p>
                  
                  <!-- 3D buttons with hover effects -->
                  <div class="flex flex-wrap gap-4 slide-in-animation delay-300">
                    <RouterLink 
                      to="/contact" 
                      class="relative overflow-hidden bg-primary hover:bg-primary-light text-white px-7 py-4 rounded-md font-medium transition-all shadow-xl hover:shadow-primary/30 group"
                    >
                      <span class="absolute inset-0 w-1/2 h-full top-0 left-0 pointer-events-none bg-white/20 transform -skew-x-20 opacity-0 group-hover:animate-shine"></span>
                      <div class="relative z-10 flex items-center">
                        <PhoneIcon class="me-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        {{ $t('hero.cta') }}
                      </div>
                    </RouterLink>
                    <RouterLink 
                      to="/services" 
                      class="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-7 py-4 rounded-md font-medium transition-all shadow-xl hover:shadow-white/10 group"
                    >
                      <span class="absolute inset-0 w-1/2 h-full top-0 left-0 pointer-events-none bg-white/10 transform -skew-x-20 opacity-0 group-hover:animate-shine"></span>
                      <div class="relative z-10 flex items-center">
                        <InfoIcon class="me-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        {{ $t('hero.learnMore') }}
                      </div>
                    </RouterLink>
                  </div>
                  
                  <!-- Animated stats counter with 3D cards -->
                  <div class="mt-16 grid grid-cols-3 gap-6 max-w-md slide-in-animation delay-500">
                    <div 
                      v-for="(stat, i) in stats" 
                      :key="i"
                      class="stat-card relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-4 px-2 text-center hover:bg-white/10 transition-all transform hover:-translate-y-1 hover:shadow-lg group"
                    >
                      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                      <div class="relative z-10">
                        <div class="font-bold text-3xl text-white mb-1 flex justify-center items-end">
                          <CountUp 
                            :end-val="stat.value" 
                            :enable-scrollSpy="true"
                            scrollSpyOnce
                            duration="3"
                          />
                          <span>{{ stat.suffix }}</span>
                        </div>
                        <div class="text-white/70 text-sm">{{ $t(stat.label) }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      <!-- RTL-aware navigation buttons -->
      <div 
        class="absolute top-1/2 -translate-y-1/2 start-6 z-10 slide-in-animation origin-left" 
        :class="{'opacity-0 pointer-events-none': slides.length <= 1}"
      >
        <button 
          @click="scrollPrev" 
          class="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/20"
          :aria-label="$t('common.previousSlide')"
        >
          <ChevronLeftIcon :class="{'h-5 w-5': true, 'hidden': isRtl, 'block': !isRtl}" />
          <ChevronRightIcon :class="{'h-5 w-5': true, 'block': isRtl, 'hidden': !isRtl}" />
        </button>
      </div>
      <div 
        class="absolute top-1/2 -translate-y-1/2 end-6 z-10 slide-in-animation origin-right" 
        :class="{'opacity-0 pointer-events-none': slides.length <= 1}"
      >
        <button 
          @click="scrollNext" 
          class="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/20"
          :aria-label="$t('common.nextSlide')"
        >
          <ChevronRightIcon :class="{'h-5 w-5': true, 'hidden': isRtl, 'block': !isRtl}" />
          <ChevronLeftIcon :class="{'h-5 w-5': true, 'block': isRtl, 'hidden': !isRtl}" />
        </button>
      </div>

      <!-- Enhanced progress indicators -->
      <div class="absolute bottom-10 start-0 end-0 flex justify-center gap-3">
        <div class="bg-black/30 backdrop-blur-sm p-2 rounded-full flex gap-2">
          <button 
            v-for="(_, index) in slides" 
            :key="index"
            @click="scrollTo(index)"
            class="relative rounded-full h-3 overflow-hidden transition-all duration-300"
            :class="[
              currentIndex === index 
                ? 'bg-primary w-10' 
                : 'bg-white/30 hover:bg-white/50 w-3 hover:scale-110'
            ]"
            :aria-label="$t('common.goToSlide', { number: index + 1 })"
            :aria-current="currentIndex === index ? 'true' : 'false'"
          >
            <span
              v-if="currentIndex === index"
              class="absolute inset-0 bg-white/30 progress-animation"
              :style="{
                animationDuration: '6s',
                animationPlayState: isUserInteracting ? 'paused' : 'running'
              }"
            ></span>
          </button>
        </div>
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
import CountUp from '@/components/ui/CountUp.vue'

const { t, locale } = useI18n()
const themeStore = useThemeStore()
const isRtl = computed(() => themeStore.locale === 'ar')

const currentIndex = ref(0)
const carouselApi = ref<UnwrapRefCarouselApi | null>(null)
let autoScrollInterval: number | null = null
let isUserInteracting = ref(false)
let directionChangeTimeout: number | null = null
const parallaxOffset = ref(0)

// Enhanced slides with high-quality images and consistent structure
const slides = [
  {
    titleHighlight: 'hero.servicesHighlight',
    title: 'hero.servicesTitle',
    subtitle: 'hero.servicesSubtitle',
    image: 'https://picsum.photos/id/1048/1920/1080' // Modern office with professionals
  },
  {
    titleHighlight: 'hero.projectsHighlight',
    title: 'hero.projectsTitle',
    subtitle: 'hero.projectsSubtitle',
    image: 'https://picsum.photos/id/642/1920/1080' // Construction project
  },
  {
    titleHighlight: 'hero.innovationHighlight',
    title: 'hero.innovationTitle',
    subtitle: 'hero.innovationSubtitle',
    image: 'https://picsum.photos/id/175/1920/1080' // Urban landscape
  }
]

// Statistics data
const stats = [
  { 
    value: 15, 
    suffix: '+',
    label: 'stats.yearsExperience' 
  },
  { 
    value: 250, 
    suffix: '+',
    label: 'stats.projects' 
  },
  { 
    value: 98, 
    suffix: '%',
    label: 'stats.clientSatisfaction' 
  }
]

// Parallax effect on scroll
onMounted(() => {
  const handleParallax = () => {
    const scrollPercent = window.scrollY / window.innerHeight
    parallaxOffset.value = scrollPercent * 100
  }
  
  window.addEventListener('scroll', handleParallax)
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleParallax)
  })
})

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

// Navigation functions with proper RTL handling
function scrollPrev() {
  // Mark as user interaction to pause auto-scroll temporarily
  isUserInteracting.value = true
  
  // In RTL mode, scrollPrev and scrollNext are flipped
  if (isRtl.value) {
    carouselApi.value?.scrollNext()
  } else {
    carouselApi.value?.scrollPrev()
  }
  
  // Resume auto-scroll after delay
  setTimeout(() => {
    isUserInteracting.value = false
  }, 5000)
}

function scrollNext() {
  // Mark as user interaction to pause auto-scroll temporarily
  isUserInteracting.value = true
  
  // In RTL mode, scrollPrev and scrollNext are flipped
  if (isRtl.value) {
    carouselApi.value?.scrollPrev()
  } else {
    carouselApi.value?.scrollNext()
  }
  
  // Resume auto-scroll after delay
  setTimeout(() => {
    isUserInteracting.value = false
  }, 5000)
}

function scrollTo(index: number) {
  // Mark as user interaction to pause auto-scroll temporarily
  isUserInteracting.value = true
  
  if (carouselApi.value) {
    carouselApi.value.scrollTo(index)
  }
  
  // Resume auto-scroll after delay
  setTimeout(() => {
    isUserInteracting.value = false
  }, 5000)
}

// Handle event for slide selection
function handleSelect() {
  if (carouselApi.value) {
    currentIndex.value = carouselApi.value.selectedScrollSnap() || 0
  }
}

// Initialize the carousel API
function handleInitApi(api: any) {
  carouselApi.value = api
  
  // Add event listener for slide selection
  api.on('select', handleSelect)
  
  // Start auto-scrolling after initialization
  startAutoScroll()
}

// Auto-scroll function with user interaction awareness
function startAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
  
  autoScrollInterval = window.setInterval(() => {
    if (!isUserInteracting.value && carouselApi.value) {
      scrollNext()
    }
  }, 6000) // Change slides every 6 seconds
}

// Clean up timers when component is unmounted
onBeforeUnmount(() => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
  
  if (directionChangeTimeout) {
    clearTimeout(directionChangeTimeout)
  }
  
  // Remove event listener when component is unmounted
  if (carouselApi.value) {
    carouselApi.value.off('select', handleSelect)
  }
})
</script>

<style scoped>
/* Add any required animations */
@keyframes progress-animation {
  from { 
    transform: translateX(-100%); 
  }
  to { 
    transform: translateX(0); 
  }
}

.slide-in-animation {
  animation: slideIn 0.8s ease-out forwards;
  opacity: 0;
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.clip-text-animation {
  animation: clipText 1s ease-out forwards;
  animation-delay: 0.2s;
  clip-path: inset(0 100% 0 0);
}

@keyframes clipText {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes shine {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(100%);
  }
}

.group-hover\:animate-shine {
  animation: none;
}

.group:hover .group-hover\:animate-shine {
  animation: shine 0.85s ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Fix RTL support for animations */
:root[dir="rtl"] .progress-animation {
  animation-direction: reverse;
}
</style>
