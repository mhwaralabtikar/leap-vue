# Carousel Component

This component provides a customizable carousel/slider functionality using embla-carousel-vue under the hood.

## Usage

### Basic Example

```vue
<template>
  <Carousel>
    <CarouselContent>
      <CarouselItem v-for="i in 5" :key="i">
        Slide {{ i }}
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>

<script setup>
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
</script>
```

### With Options

```vue
<template>
  <Carousel 
    :opts="{ loop: true, align: 'start' }" 
    @init-api="handleInitApi"
  >
    <!-- Carousel content here -->
  </Carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const carouselApi = ref(null)

function handleInitApi(api) {
  carouselApi.value = api
  
  // You can now interact with the API
  // e.g., api.scrollNext(), api.scrollPrev(), etc.
}
</script>
```

## Available Components

- `Carousel`: The main container
- `CarouselContent`: Wrapper for carousel items
- `CarouselItem`: Individual carousel slide
- `CarouselPrevious`: Previous button
- `CarouselNext`: Next button

## Options

The carousel accepts all configuration options from embla-carousel. See [embla-carousel documentation](https://www.embla-carousel.com/api/options/) for available options.

## API Access

The carousel emits an `init-api` event with the embla API instance. You can use this to access the full API for programmatic control of the carousel.

```vue
<script setup>
const carouselApi = ref(null)

function handleInitApi(api) {
  carouselApi.value = api
  
  // Now you can use carouselApi.value to control the carousel
}
</script>
```

## Methods

Once you have the API instance, you can call these methods:

- `scrollPrev()`: Scroll to the previous slide
- `scrollNext()`: Scroll to the next slide
- `scrollTo(index)`: Scroll to a specific slide
- `canScrollPrev()`: Check if scrolling backward is possible
- `canScrollNext()`: Check if scrolling forward is possible
- `selectedScrollSnap()`: Get the index of the current slide 