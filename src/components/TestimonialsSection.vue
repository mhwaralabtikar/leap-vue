<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-vue-next"
import { useTestimonialsStore } from '@/stores/testimonials'
import { useI18n } from 'vue-i18n'
import { ChevronRightIcon } from "lucide-vue-next"
import { RouterLink } from 'vue-router'

const testimonialsStore = useTestimonialsStore()
const { t } = useI18n()
</script>

<template>
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('testimonials.title') }}</h2>
        <p class="text-xl text-foreground/70">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <Carousel class="w-full">
        <CarouselContent>
          <CarouselItem v-for="testimonial in testimonialsStore.testimonials" :key="`testimonial-${testimonial.id}`" class="md:basis-1/2 lg:basis-1/3 ps-4">
            <Card>
              <CardContent class="p-6">
                <div class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {{ $t(testimonial.highlight) }}
                </div>
                <QuoteIcon class="h-8 w-8 text-primary/20 mb-4" />
                <p class="text-foreground/80 mb-6 italic">
                  "{{ $t(testimonial.content) }}"
                </p>
                <div class="flex items-center">
                  <Avatar class="h-12 w-12 border border-border">
                    <AvatarImage :src="testimonial.avatarUrl" :alt="$t(testimonial.name)" />
                    <AvatarFallback>{{ testimonial.initials }}</AvatarFallback>
                  </Avatar>
                  <div class="ms-4">
                    <h4 class="font-semibold">{{ $t(testimonial.name) }}</h4>
                    <p class="text-sm text-foreground/60">{{ $t(testimonial.role) }}, {{ $t(testimonial.company) }}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <div class="flex justify-center mt-8">
          <CarouselPrevious variant="outline" className="me-2 static translate-y-0" />
          <CarouselNext variant="outline" className="static translate-y-0" />
        </div>
      </Carousel>
      
      <div class="text-center mt-8">
        <RouterLink to="/testimonials" class="inline-flex items-center text-primary hover:underline">
          {{ $t('testimonials.viewMore') }}
          <ChevronRightIcon class="h-4 w-4 ms-1" />
        </RouterLink>
      </div>
    </div>
  </section>
</template> 