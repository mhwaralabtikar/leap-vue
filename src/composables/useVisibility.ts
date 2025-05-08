import { ref, onMounted, onUnmounted, type Ref } from 'vue'

// Define extended HTMLElement type for the directive
interface HTMLElementWithObserver extends HTMLElement {
  _visibility_observer?: IntersectionObserver;
}

interface UseVisibilityOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

export function useVisibility(
  targetRef: Ref<Element | null>,
  options: UseVisibilityOptions = {}
) {
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!targetRef.value) return

    observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting
      
      // If element is visible and once option is true, disconnect the observer
      if (isVisible.value && options.once) {
        observer?.disconnect()
      }
    }, {
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold || 0
    })

    observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { isVisible }
}

// Vue directive for observing visibility
export const vObserveVisibility = {
  mounted(el: HTMLElementWithObserver, binding: any) {
    const options = binding.value || {}
    const callback = options.callback || (() => {})
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      callback(entry.isIntersecting, entry)
      
      if (entry.isIntersecting && options.once) {
        observer.disconnect()
      }
    }, {
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold || 0
    })
    
    el._visibility_observer = observer
    observer.observe(el)
  },
  
  unmounted(el: HTMLElementWithObserver) {
    if (el._visibility_observer) {
      el._visibility_observer.disconnect()
    }
  }
} 