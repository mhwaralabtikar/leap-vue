<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon, StarIcon } from "lucide-vue-next"
import { useI18n } from 'vue-i18n'
import { ref, onBeforeUnmount, computed } from 'vue'
import type { UnwrapRefCarouselApi } from "@/components/ui/carousel/interface"
import { useThemeStore } from '@/stores/theme'
import { useTestimonialsStore } from '@/stores/testimonials'

const { t } = useI18n()
const themeStore = useThemeStore()
const testimonialsStore = useTestimonialsStore()
const isRtl = computed(() => themeStore.locale === 'ar')
const carouselApi = ref<UnwrapRefCarouselApi | null>(null)
const currentIndex = ref(0)

// Event handler for selection changes
function handleSelect() {
  if (carouselApi.value) {
    currentIndex.value = carouselApi.value.selectedScrollSnap() || 0
  }
}

// Handle Carousel API initialization
function handleInitApi(api: UnwrapRefCarouselApi) {
  carouselApi.value = api
  
  if (api) {
    // Set initial index
    currentIndex.value = api.selectedScrollSnap() || 0
    
    // Add event listener for selection changes
    api.on('select', handleSelect)
  }
}

// Clean up event listeners when component is unmounted
onBeforeUnmount(() => {
  if (carouselApi.value) {
    carouselApi.value.off('select', handleSelect)
  }
})
</script>

<template>
  <section class="py-24 bg-background relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute -z-10 top-20 end-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
    <div class="absolute -z-10 bottom-20 start-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
    <div class="absolute inset-0 bg-[url('https://picsum.photos/id/1019/1920/1080')] bg-fixed opacity-5 dark:opacity-3"></div>
    
    <div class="container mx-auto px-4 relative">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
          {{ t('testimonials.testimonials') }}
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('testimonials.title') }}</h2>
        <p class="text-foreground/70 dark:text-foreground/80 text-lg">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>

      <!-- Large featured testimonial -->
      <div class="mb-16 max-w-4xl mx-auto">
        <Carousel
          class="w-full max-w-5xl mx-auto" 
          :opts="{ loop: true, direction: isRtl ? 'rtl' : 'ltr' }"
          @init-api="handleInitApi"
        >
          <CarouselContent>
            <CarouselItem v-for="(testimonial, index) in testimonialsStore.testimonials" :key="testimonial.id">
              <div class="p-1">
                <Card class="border-none">
                  <CardContent class="flex flex-col md:flex-row gap-8 p-8">
                    <div class="flex flex-col items-center md:items-start">
                      <Avatar class="w-20 h-20 border-2 border-primary/20">
                        <AvatarImage :src="testimonial.avatarUrl" :alt="$t(testimonial.name)" />
                        <AvatarFallback>{{ testimonial.initials }}</AvatarFallback>
                      </Avatar>
                      <div class="flex mt-2 mb-4">
                        <StarIcon v-for="i in testimonial.rating" :key="i" class="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                      <div class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-center">
                        {{ $t(testimonial.highlight) }}
                      </div>
                    </div>
                    
                    <div class="flex-1">
                      <blockquote class="relative">
                        <QuoteIcon class="absolute -top-6 -start-2 h-10 w-10 text-primary/10 transform" />
                        <p class="text-lg text-foreground/90 leading-relaxed relative mb-4 mt-2">
                          {{ $t(testimonial.content) }}
                        </p>
                        <footer>
                          <h3 class="font-bold text-lg">{{ $t(testimonial.name) }}</h3>
                          <p class="text-primary">{{ $t(testimonial.role) }}, {{ $t(testimonial.company) }}</p>
                        </footer>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          <div class="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 bg-primary/10 hover:bg-primary/20 text-primary border-none" />
            
            <div class="flex gap-2 items-center">
              <button 
                v-for="(_, index) in testimonialsStore.testimonials" 
                :key="index"
                @click="carouselApi?.scrollTo(index)"
                class="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                :class="currentIndex === index ? 'bg-primary' : 'bg-primary/20 hover:bg-primary/40'"
              ></button>
            </div>
            
            <CarouselNext className="relative inset-0 translate-y-0 bg-primary/10 hover:bg-primary/20 text-primary border-none" />
          </div>
        </Carousel>
      </div>
    </div>
  </section>
</template> 