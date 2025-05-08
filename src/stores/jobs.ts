import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', () => {
  // Jobs data
  const jobs = [
    {
      id: 'project-manager',
      title: 'Project Manager',
      type: 'Full Time',
      location: 'Riyadh, Saudi Arabia',
      department: 'Project Controls',
      postedDate: 'June 15, 2023',
      salary: 'SAR 25,000 - 35,000 per month',
      education: 'Bachelor\'s degree in Engineering or related field',
      experience: '7-10 years of experience',
      description: 'We are seeking an experienced Project Manager to join our team in Riyadh. The ideal candidate will be responsible for overseeing all aspects of project delivery, from initiation to closeout, ensuring that projects are completed on time, within budget, and to the highest quality standards.',
      responsibilities: [
        'Develop and manage project plans, schedules, budgets, and resource allocations',
        'Lead cross-functional teams to successfully deliver complex projects',
        'Identify, assess, and mitigate project risks',
        'Monitor project progress and implement corrective actions as needed',
        'Prepare regular status reports and presentations for stakeholders',
        'Coordinate with clients, consultants, and contractors throughout the project lifecycle',
        'Ensure compliance with all relevant regulations and standards',
        'Implement best practices in project management methodologies'
      ],
      requirements: [
        'Bachelor\'s degree in Engineering, Construction Management, or related field',
        '7-10 years of experience in project management, preferably in construction or infrastructure projects',
        'PMP certification or equivalent professional qualification',
        'Strong knowledge of project management methodologies and tools',
        'Experience with project management software (Primavera P6, MS Project)',
        'Excellent communication, leadership, and problem-solving skills',
        'Ability to work effectively in a multicultural environment',
        'Fluency in English; Arabic language skills are a plus'
      ],
      benefits: [
        'Competitive salary package',
        'Medical insurance for employee and dependents',
        'Annual leave and flight tickets',
        'Housing and transportation allowance',
        'Professional development opportunities',
        'Performance-based bonuses'
      ]
    },
    {
      id: 'cost-controller',
      title: 'Cost Controller',
      type: 'Full Time',
      location: 'Jeddah, Saudi Arabia',
      department: 'Cost Management',
      postedDate: 'June 10, 2023',
      salary: 'SAR 18,000 - 25,000 per month',
      education: 'Bachelor\'s degree in Quantity Surveying, Engineering, or related field',
      experience: '5-8 years of experience',
      description: 'We are looking for a skilled Cost Controller to join our Cost Management team in Jeddah. The successful candidate will be responsible for monitoring and controlling project costs, preparing cost reports, and implementing cost control measures to ensure project financial success.',
      responsibilities: [
        'Monitor and control project costs against budgets',
        'Prepare cost reports and forecasts',
        'Analyze cost variances and recommend corrective actions',
        'Support the preparation of project budgets and estimates',
        'Review and approve contractor payment applications',
        'Coordinate with project teams to ensure cost awareness',
        'Implement cost control systems and procedures',
        'Conduct cost risk assessments'
      ],
      requirements: [
        'Bachelor\'s degree in Quantity Surveying, Engineering, Finance, or related field',
        '5-8 years of experience in cost control, preferably in construction or infrastructure projects',
        'Strong analytical skills and attention to detail',
        'Proficiency in cost management software and MS Excel',
        'Knowledge of contract types and financial principles',
        'Good communication and reporting skills',
        'Ability to work under pressure and meet deadlines',
        'Fluency in English; Arabic language skills are a plus'
      ],
      benefits: [
        'Competitive salary package',
        'Medical insurance for employee and dependents',
        'Annual leave and flight tickets',
        'Housing and transportation allowance',
        'Professional development opportunities',
        'Performance-based bonuses'
      ]
    },
    {
      id: 'planning-engineer',
      title: 'Planning Engineer',
      type: 'Full Time',
      location: 'Riyadh, Saudi Arabia',
      department: 'Project Controls',
      postedDate: 'June 5, 2023',
      education: 'Bachelor\'s degree in Engineering or related field',
      experience: '3-5 years of experience',
      description: 'We are seeking a Planning Engineer to join our Project Controls team in Riyadh. The ideal candidate will be responsible for developing and maintaining project schedules, monitoring progress, and providing timely schedule updates and analysis to support successful project delivery.',
      responsibilities: [
        'Develop and maintain detailed project schedules using Primavera P6',
        'Monitor and report on project progress against baseline schedules',
        'Perform schedule risk assessments and develop mitigation strategies',
        'Prepare schedule recovery plans when necessary',
        'Coordinate with project teams to collect progress information',
        'Prepare schedule analysis and reports for management and clients',
        'Support the development of resource-loaded schedules',
        'Participate in project planning meetings and workshops'
      ],
      requirements: [
        'Bachelor\'s degree in Engineering, Construction Management, or related field',
        '3-5 years of experience in project planning and scheduling',
        'Proficiency in Primavera P6 and MS Office applications',
        'Knowledge of scheduling techniques and critical path method',
        'Strong analytical and problem-solving skills',
        'Good communication and presentation abilities',
        'Ability to work in a team environment',
        'Fluency in English; Arabic language skills are a plus'
      ],
      benefits: [
        'Competitive salary package',
        'Medical insurance for employee and dependents',
        'Annual leave and flight tickets',
        'Housing and transportation allowance',
        'Professional development opportunities',
        'Performance-based bonuses'
      ]
    }
  ]
  
  // Department/Category options for filtering
  const departments = [
    'All Departments',
    'Project Controls',
    'Cost Management',
    'Claims Management',
    'Risk Management'
  ]
  
  // Location options for filtering
  const locations = [
    'All Locations',
    'Riyadh, Saudi Arabia',
    'Jeddah, Saudi Arabia',
    'Dammam, Saudi Arabia'
  ]
  
  // Get featured jobs (latest 3)
  const featuredJobs = jobs.slice(0, 3)
  
  // Get job by ID
  function getJobById(id: string) {
    return jobs.find(job => job.id === id)
  }
  
  // Get jobs by department
  function getJobsByDepartment(department: string) {
    if (department === 'All Departments') {
      return jobs
    }
    return jobs.filter(job => job.department === department)
  }
  
  // Get jobs by location
  function getJobsByLocation(location: string) {
    if (location === 'All Locations') {
      return jobs
    }
    return jobs.filter(job => job.location === location)
  }
  
  return {
    jobs,
    departments,
    locations,
    featuredJobs,
    getJobById,
    getJobsByDepartment,
    getJobsByLocation
  }
}) 