import { ref, onMounted, onUnmounted } from 'vue'

// Options for the intersection observer
interface UseIntersectionObserverOptions {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number | number[]
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const isIntersecting = ref(false)
  const target = ref<HTMLElement | null>(null)

  // Default options
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
  } = options

  let observer: IntersectionObserver | null = null

  // Create observer when mounted
  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting.value = entry.isIntersecting
        
        // If target is intersecting, add animation class and disconnect
        if (entry.isIntersecting && target.value) {
          target.value.classList.add('has-animated')
          
          // Remove observer after animation is triggered
          if (observer) {
            observer.disconnect()
          }
        }
      },
      { root, rootMargin, threshold }
    )

    if (target.value) {
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  // Function to set target element
  const setTarget = (el: HTMLElement | null) => {
    if (!el) return

    target.value = el
    
    // If observer is already created, disconnect and reconnect with new target
    if (observer && target.value) {
      observer.disconnect()
      observer.observe(target.value)
    }
  }

  return { isIntersecting, setTarget }
}

// Function to register animation directive
export function createAnimationDirective() {
  return {
    mounted(el: HTMLElement, binding: any) {
      // Default animation type
      const animationType = binding.value || 'fade-in'
      const delay = binding.modifiers.delay || 0
      
      // Apply animation class
      el.classList.add(`animate-${animationType}`)
      
      if (delay) {
        el.style.animationDelay = `${delay}ms`
      }
      
      // Set up intersection observer
      const { setTarget } = useIntersectionObserver({
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px' // Trigger when element is 100px from bottom of viewport
      })
      
      // Initially hide the element
      el.style.opacity = '0'
      
      // Set target for observer
      setTarget(el)
      
      // When observer detects intersection, play animation
      el.addEventListener('animationstart', () => {
        el.style.opacity = ''
      })
    }
  }
} 