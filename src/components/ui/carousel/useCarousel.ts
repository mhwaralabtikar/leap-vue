import type { UnwrapRefCarouselApi as CarouselApi, CarouselEmits, CarouselProps } from './interface'
import { createInjectionState } from '@vueuse/core'
import emblaCarouselVue from 'embla-carousel-vue'
import { onMounted, ref, onBeforeUnmount } from 'vue'

// Export emblaCarouselVue as useCarousel to be used directly in components if needed
export { default as useEmblaCarousel } from 'embla-carousel-vue'

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins,
  }: CarouselProps, emits: CarouselEmits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    }, plugins)

    function scrollPrev() {
      emblaApi.value?.scrollPrev()
    }
    function scrollNext() {
      emblaApi.value?.scrollNext()
    }

    const canScrollNext = ref(false)
    const canScrollPrev = ref(false)

    function onSelect(api: CarouselApi) {
      if (api) {
        canScrollNext.value = api.canScrollNext() || false
        canScrollPrev.value = api.canScrollPrev() || false
      }
    }

    onMounted(() => {
      if (!emblaApi.value)
        return

      if (emblaApi.value) {
        canScrollNext.value = emblaApi.value.canScrollNext() || false
        canScrollPrev.value = emblaApi.value.canScrollPrev() || false
      }
      
      const handleInit = () => onSelect(emblaApi.value!)
      const handleReInit = () => onSelect(emblaApi.value!)
      const handleSelect = () => onSelect(emblaApi.value!)
      
      emblaApi.value.on('init', handleInit)
      emblaApi.value.on('reInit', handleReInit)
      emblaApi.value.on('select', handleSelect)
      
      emits('init-api', emblaApi.value)
      
      onBeforeUnmount(() => {
        if (emblaApi.value) {
          emblaApi.value.off('init', handleInit)
          emblaApi.value.off('reInit', handleReInit)
          emblaApi.value.off('select', handleSelect)
        }
      })
    })

    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation }
  },
)

function useCarousel() {
  const carouselState = useInjectCarousel()

  if (!carouselState)
    throw new Error('useCarousel must be used within a <Carousel />')

  return carouselState
}

export { useCarousel, useProvideCarousel }
