import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  location: string
  client: string
  year: string
  services: string[]
  featured?: boolean
}

export const useProjectsStore = defineStore('projects', () => {
  // Sample projects data
  const projects = ref<Project[]>([
    {
      id: 'riyadh-metro',
      title: 'Riyadh Metro',
      description: 'Comprehensive project controls implementation for the Riyadh Metro project, including schedule management, cost control, and change management.',
      imageUrl: '/projects/riyadh-metro.jpg',
      category: 'Transportation',
      location: 'Saudi Arabia',
      client: 'Royal Commission for Riyadh City',
      year: '2021',
      services: ['Project Controls', 'Schedule Management', 'Cost Management'],
      featured: true
    },
    {
      id: 'king-abdullah-financial-district',
      title: 'King Abdullah Financial District',
      description: 'Implementation of integrated project controls system for this major financial hub development in Riyadh.',
      imageUrl: '/projects/kafd-building-2-1-1920x1080-1.jpg',
      category: 'Commercial',
      location: 'Saudi Arabia',
      client: 'Public Investment Fund',
      year: '2022',
      services: ['Project Controls', '4D-BIM Modeling', 'Claims Management'],
      featured: true
    },
    {
      id: 'jeddah-airport-expansion',
      title: 'Jeddah Airport Expansion',
      description: 'Schedule and cost management services for the expansion of King Abdulaziz International Airport in Jeddah.',
      imageUrl: '/projects/jazan-airport.jpg',
      category: 'Aviation',
      location: 'Saudi Arabia',
      client: 'General Authority of Civil Aviation',
      year: '2020',
      services: ['Schedule Management', 'Cost Management', 'Claims Management']
    },
    {
      id: 'red-sea-project',
      title: 'Red Sea Project',
      description: 'Implementation of advanced project controls for this luxury tourism development on Saudi Arabia\'s west coast.',
      imageUrl: '/projects/red-sea.webp',
      category: 'Tourism',
      location: 'Saudi Arabia',
      client: 'Red Sea Development Company',
      year: '2022',
      services: ['Project Controls', '4D-BIM Modeling', 'Schedule Management'],
      featured: true
    },
    {
      id: 'qiddiya-entertainment-city',
      title: 'Qiddiya Entertainment City',
      description: 'Comprehensive project controls services for this major entertainment destination development near Riyadh.',
      imageUrl: '/projects/Qiddiya.jpg',
      category: 'Entertainment',
      location: 'Saudi Arabia',
      client: 'Qiddiya Investment Company',
      year: '2023',
      services: ['Project Controls', 'Schedule Management', 'Cost Management']
    },
    {
      id: 'diriyah-gate',
      title: 'Diriyah Gate',
      description: 'Implementation of integrated schedule and cost management systems for this historical district development in Riyadh.',
      imageUrl: '/projects/diriyah-gate.jpg',
      category: 'Heritage',
      location: 'Saudi Arabia',
      client: 'Diriyah Gate Development Authority',
      year: '2023',
      services: ['Schedule Management', 'Cost Management', 'Claims Management']
    },
    {
      id: 'neom-line',
      title: 'NEOM - The Line',
      description: 'Advanced project controls consulting for this revolutionary linear city development in northwest Saudi Arabia.',
      imageUrl: '/projects/neom-line.jpg',
      category: 'Infrastructure',
      location: 'Saudi Arabia',
      client: 'NEOM Company',
      year: '2023',
      services: ['Project Controls', '4D-BIM Modeling', 'Schedule Management'],
      featured: true
    },
    {
      id: 'jubail-industrial-city-expansion',
      title: 'Jubail Industrial City Expansion',
      description: 'Schedule management and claims advisory services for the expansion of Jubail Industrial City.',
      imageUrl: '/projects/jubail-industrial-city-expansion.webp',
      category: 'Industrial',
      location: 'Saudi Arabia',
      client: 'Royal Commission for Jubail and Yanbu',
      year: '2021',
      services: ['Schedule Management', 'Claims Management']
    },
    {
      id: 'king-salman-park',
      title: 'King Salman Park',
      description: 'Project controls implementation for this major urban park development in Riyadh.',
      imageUrl: '/projects/king-salman-park.jpg',
      category: 'Landscape',
      location: 'Saudi Arabia',
      client: 'Royal Commission for Riyadh City',
      year: '2022',
      services: ['Project Controls', 'Schedule Management', 'Cost Management']
    }
  ])

  // Extract unique categories from projects
  const categories = computed(() => {
    const uniqueCategories = new Set(projects.value.map(project => project.category))
    return Array.from(uniqueCategories)
  })

  // Get featured projects
  const featuredProjects = computed(() => {
    return projects.value.filter(project => project.featured)
  })

  // Get project by ID
  function getProjectById(id: string) {
    return projects.value.find(project => project.id === id)
  }

  // Get projects by category
  function getProjectsByCategory(category: string) {
    if (!category || category === 'All') {
      return projects.value
    }
    return projects.value.filter(project => project.category === category)
  }

  return {
    projects,
    categories,
    featuredProjects,
    getProjectById,
    getProjectsByCategory
  }
}) 