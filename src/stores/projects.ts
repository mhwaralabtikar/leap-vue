import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  // Projects data
  const projects = [
    {
      id: 'riyadh-metro',
      title: 'Riyadh Metro',
      category: 'Transportation',
      location: 'Saudi Arabia',
      description: 'A major public transit project in Riyadh, consisting of six metro lines covering the capital city.',
      imageUrl: 'https://picsum.photos/id/155/800/600'
    },
    {
      id: 'jazan-airport',
      title: 'Jazan Airport',
      category: 'Aviation',
      location: 'Saudi Arabia',
      description: 'A new regional airport under construction in Jazan aimed at boosting local infrastructure and connectivity.',
      imageUrl: 'https://picsum.photos/id/28/800/600'
    },
    {
      id: 'amaala-staff-village',
      title: 'AMAALA Staff Village',
      category: 'Residential',
      location: 'Saudi Arabia',
      description: 'A dedicated residential and support zone for staff working on the luxury AMAALA development on the Red Sea.',
      imageUrl: 'https://picsum.photos/id/167/800/600'
    },
    {
      id: 'national-guard-housing',
      title: 'Saudi National Guard Housing Project',
      category: 'Housing',
      location: 'Saudi Arabia',
      description: 'A residential project providing modern housing units for members of the Saudi National Guard.',
      imageUrl: 'https://picsum.photos/id/173/800/600'
    },
    {
      id: 'riyadh-bus-stops',
      title: 'Riyadh Bus Stops & Bus Rapid Transit Project',
      category: 'Transportation',
      location: 'Saudi Arabia',
      description: 'Development of smart bus stops and BRT lines in Riyadh to enhance urban mobility.',
      imageUrl: 'https://picsum.photos/id/183/800/600'
    },
    {
      id: 'dammam-sewage-treatment',
      title: 'Dammam Sewage Treatment Plant',
      category: 'Infrastructure',
      location: 'Saudi Arabia',
      description: 'A major infrastructure project to improve wastewater management in the Dammam metropolitan area.',
      imageUrl: 'https://picsum.photos/id/160/800/600'
    },
    {
      id: 'jeddah-tower',
      title: 'Jeddah Tower Support Services',
      category: 'Commercial',
      location: 'Saudi Arabia',
      description: 'Project management services for supporting facilities of the iconic Jeddah Tower development.',
      imageUrl: 'https://picsum.photos/id/42/800/600'
    },
    {
      id: 'neom-residential',
      title: 'NEOM Residential Community',
      category: 'Residential',
      location: 'Saudi Arabia',
      description: 'A modern residential community being developed as part of the visionary NEOM project.',
      imageUrl: 'https://picsum.photos/id/164/800/600'
    },
    {
      id: 'red-sea-tourism',
      title: 'Red Sea Tourism Infrastructure',
      category: 'Tourism',
      location: 'Saudi Arabia',
      description: 'Development of key tourism infrastructure along the Red Sea coast to support the growing tourism sector.',
      imageUrl: 'https://picsum.photos/id/110/800/600'
    }
  ]
  
  // Available project categories
  const categories = [
    'All',
    'Transportation',
    'Aviation',
    'Residential',
    'Housing',
    'Infrastructure',
    'Commercial',
    'Tourism'
  ]
  
  // Get featured projects (first 5)
  const featuredProjects = projects.slice(0, 5)
  
  // Get project by ID
  function getProjectById(id: string) {
    return projects.find(project => project.id === id)
  }
  
  // Get projects by category
  function getProjectsByCategory(category: string) {
    if (category === 'All') {
      return projects
    }
    return projects.filter(project => project.category === category)
  }
  
  return {
    projects,
    categories,
    featuredProjects,
    getProjectById,
    getProjectsByCategory
  }
}) 