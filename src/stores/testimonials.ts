import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatarUrl: string
  initials: string
  highlight: string
}

export const useTestimonialsStore = defineStore('testimonials', () => {
  // Testimonials data with i18n keys
  const testimonials = ref<Testimonial[]>([
    {
      id: 1,
      name: 'testimonials.testimonial1.name',
      role: 'testimonials.testimonial1.role',
      company: 'testimonials.testimonial1.company',
      content: 'testimonials.testimonial1.content',
      rating: 5,
      avatarUrl: "https://picsum.photos/id/1005/200/200",
      initials: "JD",
      highlight: "testimonials.highlights.exceptional"
    },
    {
      id: 2,
      name: 'testimonials.testimonial2.name',
      role: 'testimonials.testimonial2.role',
      company: 'testimonials.testimonial2.company',
      content: 'testimonials.testimonial2.content',
      rating: 5,
      avatarUrl: "https://picsum.photos/id/1011/200/200",
      initials: "SC",
      highlight: "testimonials.highlights.outstanding"
    },
    {
      id: 3,
      name: 'testimonials.testimonial3.name',
      role: 'testimonials.testimonial3.role',
      company: 'testimonials.testimonial3.company',
      content: 'testimonials.testimonial3.content',
      rating: 5,
      avatarUrl: "https://picsum.photos/id/1012/200/200",
      initials: "AR",
      highlight: "testimonials.highlights.professional"
    },
    {
      id: 4,
      name: 'testimonials.testimonial4.name',
      role: 'testimonials.testimonial4.role',
      company: 'testimonials.testimonial4.company',
      content: 'testimonials.testimonial4.content',
      rating: 5,
      avatarUrl: "https://picsum.photos/id/107/200/200",
      initials: "MK",
      highlight: "testimonials.highlights.communication"
    }
  ])

  // Featured testimonial is the first one
  const featuredTestimonial = ref(testimonials.value[0])

  // Get testimonial by ID
  function getTestimonialById(id: number) {
    return testimonials.value.find(testimonial => testimonial.id === id)
  }

  // Get random testimonials excluding one by ID
  function getRandomTestimonials(excludeId: number, count: number = 3) {
    const filtered = testimonials.value.filter(t => t.id !== excludeId)
    return filtered.sort(() => 0.5 - Math.random()).slice(0, count)
  }

  return {
    testimonials,
    featuredTestimonial,
    getTestimonialById,
    getRandomTestimonials
  }
}) 