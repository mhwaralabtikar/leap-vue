<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ref, onBeforeUnmount } from 'vue'

// Carousel API reference
const carouselApi = ref(null)
const currentIndex = ref(0)

// Client logos data
const clients = [
  { id: 1, name: 'Client 1', logo: 'https://picsum.photos/id/0/200/100' },
  { id: 2, name: 'Client 2', logo: 'https://picsum.photos/id/1/200/100' },
  { id: 3, name: 'Client 3', logo: 'https://picsum.photos/id/2/200/100' },
  { id: 4, name: 'Client 4', logo: 'https://picsum.photos/id/3/200/100' },
  { id: 5, name: 'Client 5', logo: 'https://picsum.photos/id/4/200/100' },
  { id: 6, name: 'Client 6', logo: 'https://picsum.photos/id/5/200/100' },
  { id: 7, name: 'Client 7', logo: 'https://picsum.photos/id/6/200/100' },
  { id: 8, name: 'Client 8', logo: 'https://picsum.photos/id/7/200/100' }
]

// Event handler for selection changes
function handleSelect() {
  if (carouselApi.value) {
    currentIndex.value = carouselApi.value.selectedScrollSnap() || 0
  }
}

// Handle API initialization
function handleInitApi(api) {
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
  <section class="py-16 bg-muted">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Our Clients</h2>
        <p class="text-foreground/70">
          We serve a diverse range of clients across the construction and 
          project management industry, including: General Contractors, Engineering Consultants, 
          Project Management Firms, Property Developers and Real Estate Companies
        </p>
      </div>

      <Carousel
        :opts="{ loop: true, align: 'start', dragFree: true }"
        class="w-full"
        @init-api="handleInitApi"
      >
        <CarouselContent class="-ms-4">
          <CarouselItem 
            v-for="client in clients"
            :key="`client-${client.id}`"
            class="basis-1/2 md:basis-1/3 lg:basis-1/4 ps-4"
          >
            <div class="bg-background rounded-lg shadow-sm p-8 h-32 flex items-center justify-center transition-all hover:shadow-md">
              <img :src="client.logo" :alt="client.name" class="max-h-full max-w-[80%] opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </section>
</template> 