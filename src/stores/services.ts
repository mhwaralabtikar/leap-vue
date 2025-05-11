import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features?: string[]
  imageUrl?: string
  link?: string
}

export const useServicesStore = defineStore('services', () => {
  // Sample services data
  const services = ref<Service[]>([
    {
      id: 'project-controls',
      title: 'Project Controls',
      imageUrl: '/services/projects-managment.jpg',
      description: 'Comprehensive oversight and management of project scope, schedule, and cost to ensure successful project delivery.',
      icon: 'layers',
      features: [
        'Project performance monitoring',
        'Progress tracking and reporting',
        'Schedule and cost integration',
        'Change management procedures'
      ]
    },
    {
      id: 'cost-management',
      title: 'Cost Management',
      imageUrl: '/services/cost.jpg',
      description: 'Detailed budgeting, forecasting, and cost control with ERP integration and variance analysis.',
      icon: 'dollar-sign',
      features: [
        'Budget development and tracking',
        'Cost estimation and forecasting',
        'Earned value management',
        'Value engineering'
      ]
    },
    {
      id: 'scheduling',
      title: 'Scheduling',
      imageUrl: '/services/scheduling.jpg',
      description: 'Development and management of project schedules using advanced planning techniques and software.',
      icon: 'calendar',
      features: [
        'Master schedule development',
        'Critical path analysis',
        'Resource optimization',
        'Schedule risk assessment'
      ]
    },
    {
      id: 'document-control',
      title: 'Document Control',
      imageUrl: '/services/document-control.jpg',
      description: 'Complete document management solutions for tracking, storage, and retrieval of project documentation.',
      icon: 'file-text',
      features: [
        'Document tracking systems',
        'Version control procedures',
        'Approval workflows',
        'Document retrieval systems'
      ]
    },
    {
      id: '4d-bim-modeling',
      title: '4D BIM Modeling',
      imageUrl: '/services/4d-bim-modeling.jpg',
      description: 'Integration of 3D models with project schedules to visualize project timelines and optimize planning.',
      icon: 'bar-chart-2',
      features: [
        'Schedule visualization',
        'Clash detection',
        'Construction sequencing',
        'What-if scenario analysis'
      ]
    },
    {
      id: 'claims-management',
      title: 'Claims Management',
      imageUrl: '/services/claims-management.jpg',
      description: 'Expert preparation and analysis of time and cost-related claims following international standards.',
      icon: 'alert-triangle',
      features: [
        'Delay analysis',
        'Extension of time claims',
        'Disruption assessments',
        'Expert witness services'
      ]
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      imageUrl: '/services/risk-management.jpg',
      description: 'Identification, assessment, and mitigation of project risks to ensure successful project outcomes.',
      icon: 'shield',
      features: [
        'Risk identification workshops',
        'Qualitative and quantitative analysis',
        'Risk response planning',
        'Risk monitoring and control'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      imageUrl: '/services/project.jpg',
      description: 'End-to-end project management services to drive project success from initiation to closeout.',
      icon: 'briefcase',
      features: [
        'Project planning and execution',
        'Stakeholder management',
        'Quality assurance',
        'Project closeout and lessons learned'
      ]
    },
    {
      id: 'training-development',
      title: 'Training & Development',
      imageUrl: '/services/training-development.jpg',
      description: 'Specialized training programs in project management methodologies and software applications.',
      icon: 'book-open',
      features: [
        'Primavera P6 training',
        'Microsoft Project training',
        'PMP certification preparation',
        'Custom training programs'
      ]
    }
  ])

  // Loading state
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Fetch services from API or use local data
  async function fetchServices() {
    isLoading.value = true
    error.value = null
    
    try {
      // In a real app, you would fetch from an API
      // const response = await fetch('https://test.leap-pm.com/api/services')
      // const data = await response.json()
      // services.value = data
      
      // For now, we'll simulate a delay and use our pre-defined services
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Add random images if not present
      services.value = services.value.map(service => ({
        ...service,
        imageUrl: service.imageUrl || `https://picsum.photos/id/${180 + Math.floor(Math.random() * 20)}/600/400`
      }))
      
      isLoading.value = false
    } catch (err) {
      console.error('Error fetching services:', err)
      error.value = 'Failed to load services data'
      isLoading.value = false
    }
  }

  // Get service by ID
  function getServiceById(id: string) {
    return services.value.find(service => service.id === id)
  }

  return {
    services,
    isLoading,
    error,
    getServiceById,
    fetchServices
  }
}) 