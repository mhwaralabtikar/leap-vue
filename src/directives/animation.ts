import type { Directive, DirectiveBinding } from 'vue'

// Animation Directive
const animation: Directive = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    // Extract animation type and delay from binding
    const animationType = binding.value || 'fade-in'
    const delayValue = binding.modifiers.delay 
      ? Object.keys(binding.modifiers).find(key => key.startsWith('delay-'))?.split('-')[1] || '0'
      : '0'
    
    const delay = parseInt(delayValue)
    
    // Initially hide element
    el.style.opacity = '0'
    
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When element is visible, add the animation class
            setTimeout(() => {
              el.style.opacity = ''
              el.classList.add(`animate-${animationType}`)
              
              if (delay) {
                el.style.animationDelay = `${delay}ms`
              }
            }, 0)
            
            // Stop observing once animation is triggered
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px' // Trigger a bit before element is fully visible
      }
    )
    
    // Start observing the element
    observer.observe(el)
  }
}

export default animation 