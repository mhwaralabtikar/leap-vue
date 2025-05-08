import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', () => {
  // Services data
  const services = [
    {
      id: 'project-controls',
      title: 'Project Controls',
      description: 'Comprehensive project controls services including cost tracking, performance measurement, and variance analysis.',
      imageUrl: 'https://picsum.photos/id/311/600/400',
      link: '/services/project-controls',
      icon: 'chart-bar'
    },
    {
      id: 'cost-management',
      title: 'Cost Management',
      description: 'Strategic cost management services focused on budget development, cost estimation, and financial oversight.',
      imageUrl: 'https://picsum.photos/id/334/600/400',
      link: '/services/cost-management',
      icon: 'dollar-sign'
    },
    {
      id: 'claims-management',
      title: 'Claims Management',
      description: 'Expert claims management services to address disputes, evaluate delay claims, and provide resolution strategies.',
      imageUrl: 'https://picsum.photos/id/360/600/400',
      link: '/services/claims-management',
      icon: 'file-text'
    },
    {
      id: '4d-bim-modeling',
      title: '4D-BIM Modeling',
      description: 'Advanced 4D BIM modeling services to integrate scheduling with 3D models for enhanced visualization and coordination.',
      imageUrl: 'https://picsum.photos/id/364/600/400',
      link: '/services/4d-bim-modeling',
      icon: 'layers'
    },
    {
      id: 'planning-schedule-management',
      title: 'Planning & Schedule Management',
      description: 'Comprehensive planning and scheduling services including baseline development, progress monitoring, and schedule optimization.',
      imageUrl: 'https://picsum.photos/id/259/600/400',
      link: '/services/planning-schedule-management',
      icon: 'calendar'
    },
    {
      id: 'training-development',
      title: 'Training & Development Services',
      description: 'Industry-focused training programs offering online, live, and offline sessions to enhance project management skills.',
      imageUrl: 'https://picsum.photos/id/180/600/400',
      link: '/services/training-development',
      icon: 'book-open'
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      description: 'Identification, analysis, and mitigation of project risks through detailed risk planning and monitoring.',
      imageUrl: 'https://picsum.photos/id/355/600/400',
      link: '/services/risk-management',
      icon: 'alert-triangle'
    },
    {
      id: 'advanced-reporting',
      title: 'Advanced Reporting Systems Development',
      description: 'Design of automated, dynamic reporting solutions using Power BI and other tools to support decision-making.',
      imageUrl: 'https://picsum.photos/id/365/600/400',
      link: '/services/advanced-reporting',
      icon: 'bar-chart-2'
    },
    {
      id: 'pmis',
      title: 'Project Management Information Systems (PMIS) Implementation',
      description: 'Deployment of ERP systems and digital tools to streamline project documentation and control processes.',
      imageUrl: 'https://picsum.photos/id/366/600/400',
      link: '/services/pmis',
      icon: 'database'
    },
    {
      id: 'pmo',
      title: 'Project Management Office (PMO) Establishment',
      description: 'Design and implementation of frameworks and governance models to enhance project oversight and control.',
      imageUrl: 'https://picsum.photos/id/370/600/400',
      link: '/services/pmo',
      icon: 'briefcase'
    }
  ]
  
  // Service categories
  const categories = [
    'All',
    'Project Controls',
    'Cost Management',
    'Risk Management',
    'Digital Solutions',
    'Training'
  ]
  
  // Get featured services (first 6)
  const featuredServices = services.slice(0, 6)
  
  // Get service by ID
  function getServiceById(id: string) {
    return services.find(service => service.id === id)
  }
  
  // Get services by category - this would need a proper category field in each service
  function getServicesByCategory(category: string) {
    if (category === 'All') {
      return services
    }
    // This is a placeholder, you should add categories to each service object
    return services
  }
  
  return {
    services,
    categories,
    featuredServices,
    getServiceById,
    getServicesByCategory
  }
}) 