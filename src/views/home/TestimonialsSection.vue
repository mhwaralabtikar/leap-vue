<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-vue-next"
import { useI18n } from 'vue-i18n'
import { ref, onBeforeUnmount } from 'vue'
import type { UnwrapRefCarouselApi } from "@/components/ui/carousel/interface"

const { t } = useI18n()
const carouselApi = ref<UnwrapRefCarouselApi | null>(null)
const currentIndex = ref(0)

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: t('testimonials.testimonial1.name'),
    role: t('testimonials.testimonial1.role'),
    company: t('testimonials.testimonial1.company'),
    content: t('testimonials.testimonial1.content'),
    avatarUrl: "https://picsum.photos/id/1005/200/200",
    initials: "JD"
  },
  {
    id: 2,
    name: t('testimonials.testimonial2.name'),
    role: t('testimonials.testimonial2.role'),
    company: t('testimonials.testimonial2.company'),
    content: t('testimonials.testimonial2.content'),
    avatarUrl: "https://picsum.photos/id/1011/200/200",
    initials: "SC"
  },
  {
    id: 3,
    name: t('testimonials.testimonial3.name'),
    role: t('testimonials.testimonial3.role'),
    company: t('testimonials.testimonial3.company'),
    content: t('testimonials.testimonial3.content'),
    avatarUrl: "https://picsum.photos/id/1012/200/200",
    initials: "AR"
  },
  {
    id: 4,
    name: t('testimonials.testimonial4.name'),
    role: t('testimonials.testimonial4.role'),
    company: t('testimonials.testimonial4.company'),
    content: t('testimonials.testimonial4.content'),
    avatarUrl: "https://picsum.photos/id/1027/200/200",
    initials: "MK"
  }
]

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
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
          {{ t('testimonials.testimonials') }}
        </div>
        <h2 class="text-3xl md:text-xl font-bold mb-4">{{ t('testimonials.title') }}</h2>
        <p class="text-foreground/70 text-lg">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>

      <Carousel 
        :opts="{ loop: true, align: 'start' }" 
        class="w-full"
        @init-api="handleInitApi"
      >
        <CarouselContent>
          <CarouselItem 
            v-for="testimonial in testimonials" 
            :key="testimonial.id" 
            class="md:basis-1/2 lg:basis-1/3 ps-4"
          >
            <Card class="h-full">
              <CardContent class="p-6">
                <QuoteIcon class="h-10 w-10 text-primary/20 mb-4" />
                <p class="text-foreground/80 mb-6 text-lg italic line-clamp-4">
                  "{{ testimonial.content }}"
                </p>
                <div class="flex items-center mt-auto">
                  <Avatar class="h-12 w-12 border border-border">
                    <AvatarImage :src="testimonial.avatarUrl" :alt="testimonial.name" />
                    <AvatarFallback>{{ testimonial.initials }}</AvatarFallback>
                  </Avatar>
                  <div class="ms-4">
                    <h4 class="font-semibold">{{ testimonial.name }}</h4>
                    <p class="text-sm text-foreground/60">
                      {{ testimonial.role }}, {{ testimonial.company }}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <div class="flex justify-center mt-8">
          <CarouselPrevious variant="outline" class="me-2 static translate-y-0" />
          <CarouselNext variant="outline" class="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>
</template> 