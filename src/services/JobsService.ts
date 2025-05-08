import { ref, computed } from 'vue'

// Define the job type
export interface Job {
  id: string
  title: string
  type: 'Full Time' | 'Part Time' | 'Contract' | 'Internship'
  location: string
  department: string
  postedDate: string
  description: string
  skills?: string[]
  requirements?: string[]
  responsibilities?: string[]
  benefits?: string[]
  salary?: string
  experience?: string
  education?: string
  featured?: boolean
}

// Sample jobs data with enhanced details
const jobsData: Job[] = [
  {
    id: 'project-manager',
    title: 'Project Manager',
    type: 'Full Time',
    location: 'Riyadh, Saudi Arabia',
    department: 'Project Controls',
    postedDate: 'June 15, 2023',
    description: 'We are seeking an experienced Project Manager to join our team in Riyadh. The ideal candidate will be responsible for overseeing all aspects of project delivery, from initiation to closeout, ensuring that projects are completed on time, within budget, and to the highest quality standards.',
    skills: ['Project Management', 'Budgeting', 'Risk Management', 'Leadership', 'Communication'],
    requirements: [
      'Bachelor\'s degree in Engineering, Construction Management, or related field',
      'PMP certification preferred',
      'Minimum 7 years of experience in project management',
      'Strong leadership and team management skills',
      'Excellent communication and negotiation abilities',
      'Experience with project management software'
    ],
    responsibilities: [
      'Lead project teams and ensure project objectives are achieved',
      'Develop and manage project schedules, budgets, and resources',
      'Identify and mitigate project risks',
      'Coordinate with stakeholders, clients, and team members',
      'Prepare and present project status reports',
      'Ensure compliance with quality standards and regulations'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Health insurance and retirement benefits',
      'Professional development opportunities',
      'Flexible work arrangements'
    ],
    salary: 'SAR 25,000 - 35,000 per month',
    experience: '7+ years',
    education: 'Bachelor\'s degree',
    featured: true
  },
  {
    id: 'cost-controller',
    title: 'Cost Controller',
    type: 'Full Time',
    location: 'Jeddah, Saudi Arabia',
    department: 'Cost Management',
    postedDate: 'June 10, 2023',
    description: 'We are looking for a skilled Cost Controller to join our Cost Management team in Jeddah. The successful candidate will be responsible for monitoring and controlling project costs, preparing cost reports, and implementing cost control measures to ensure project financial success.',
    skills: ['Cost Management', 'Budgeting', 'Financial Analysis', 'Forecasting', 'Excel'],
    requirements: [
      'Bachelor\'s degree in Accounting, Finance, Engineering, or related field',
      'Minimum 5 years of experience in cost control',
      'Strong analytical and problem-solving skills',
      'Proficiency in financial software and MS Excel',
      'Knowledge of construction cost management principles'
    ],
    responsibilities: [
      'Monitor and control project costs throughout the project lifecycle',
      'Prepare cost reports, analyses, and forecasts',
      'Identify cost variances and recommend corrective actions',
      'Review and validate contractor payment applications',
      'Support the development of project budgets',
      'Assist in contract administration and change management'
    ],
    benefits: [
      'Competitive salary package',
      'Medical and life insurance',
      'Transportation allowance',
      'Housing allowance',
      'Annual bonus based on performance'
    ],
    salary: 'SAR 18,000 - 25,000 per month',
    experience: '5+ years',
    education: 'Bachelor\'s degree',
    featured: true
  },
  {
    id: 'planning-engineer',
    title: 'Planning Engineer',
    type: 'Full Time',
    location: 'Riyadh, Saudi Arabia',
    department: 'Project Controls',
    postedDate: 'June 5, 2023',
    description: 'We are seeking a Planning Engineer to join our Project Controls team in Riyadh. The ideal candidate will be responsible for developing and maintaining project schedules, monitoring progress, and providing timely schedule updates and analysis to support successful project delivery.',
    skills: ['Primavera P6', 'MS Project', 'Scheduling', 'Critical Path Method', 'Progress Monitoring'],
    requirements: [
      'Bachelor\'s degree in Engineering or Construction Management',
      'Minimum 3 years of experience as a Planning Engineer',
      'Proficiency in Primavera P6 and/or Microsoft Project',
      'Strong analytical and problem-solving skills',
      'Knowledge of critical path method scheduling',
      'Experience in construction or infrastructure projects'
    ],
    responsibilities: [
      'Develop and maintain detailed project schedules',
      'Monitor project progress and update schedules accordingly',
      'Prepare schedule variance analyses and recovery plans',
      'Coordinate with project teams to collect progress data',
      'Generate schedule reports for management and clients',
      'Support project managers with schedule optimization'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Transportation allowance',
      'Professional development opportunities',
      'Collaborative work environment'
    ],
    salary: 'SAR 15,000 - 22,000 per month',
    experience: '3+ years',
    education: 'Bachelor\'s degree',
    featured: true
  },
  {
    id: 'bim-specialist',
    title: 'BIM Specialist',
    type: 'Full Time',
    location: 'Riyadh, Saudi Arabia',
    department: 'Technical Services',
    postedDate: 'May 28, 2023',
    description: 'We are looking for a BIM Specialist to join our Technical Services team. The ideal candidate will be responsible for implementing BIM solutions, maintaining BIM standards, and supporting project teams with BIM-related activities.',
    skills: ['Autodesk Revit', 'Navisworks', 'AutoCAD', '3D Modeling', 'BIM Coordination'],
    requirements: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      'Minimum 4 years of experience in BIM implementation',
      'Advanced proficiency in Autodesk Revit and Navisworks',
      'Knowledge of BIM standards and protocols',
      'Experience in clash detection and coordination',
      'Strong problem-solving and communication skills'
    ],
    responsibilities: [
      'Develop and maintain BIM models for projects',
      'Perform clash detection and coordination',
      'Implement and enforce BIM standards and protocols',
      'Provide technical support to project teams',
      'Conduct BIM training for team members',
      'Generate reports and visualizations from BIM models'
    ],
    education: 'Bachelor\'s degree',
    experience: '4+ years'
  },
  {
    id: 'claims-analyst',
    title: 'Claims Analyst',
    type: 'Full Time',
    location: 'Jeddah, Saudi Arabia',
    department: 'Claims Management',
    postedDate: 'May 22, 2023',
    description: 'We are seeking a Claims Analyst to join our Claims Management team. The ideal candidate will be responsible for analyzing contractual claims, preparing claim documentation, and providing support to project teams in claim resolution.',
    skills: ['Contract Analysis', 'Delay Analysis', 'Quantum Assessment', 'Negotiation', 'Documentation'],
    requirements: [
      'Bachelor\'s degree in Engineering, Construction Management, or Law',
      'Minimum 5 years of experience in construction claims',
      'Knowledge of contract types and terms',
      'Experience with delay analysis methods',
      'Strong analytical and writing skills',
      'Familiarity with FIDIC contracts preferred'
    ],
    responsibilities: [
      'Analyze potential claims and evaluate merit and value',
      'Prepare claim documentation and substantiation',
      'Perform delay analyses using industry-standard methods',
      'Assist in negotiating settlements',
      'Provide guidance to project teams on contractual matters',
      'Support dispute resolution processes'
    ],
    education: 'Bachelor\'s degree',
    experience: '5+ years'
  },
  {
    id: 'project-controls-specialist',
    title: 'Project Controls Specialist',
    type: 'Full Time',
    location: 'Riyadh, Saudi Arabia',
    department: 'Project Controls',
    postedDate: 'May 15, 2023',
    description: 'We are looking for a Project Controls Specialist to join our team. The successful candidate will be responsible for establishing and maintaining project control systems, including schedule, cost, and risk management frameworks.',
    skills: ['Earned Value Management', 'Risk Analysis', 'Progress Reporting', 'Cost Control', 'Scheduling'],
    requirements: [
      'Bachelor\'s degree in Engineering, Construction Management, or related field',
      'Minimum 6 years of experience in project controls',
      'Knowledge of earned value management principles',
      'Experience with risk management frameworks',
      'Proficiency in project controls software',
      'Strong analytical and problem-solving abilities'
    ],
    responsibilities: [
      'Develop and implement project control systems',
      'Monitor project performance using earned value methods',
      'Identify and analyze project risks',
      'Prepare integrated performance reports',
      'Support project forecasting and trend analysis',
      'Provide recommendations for performance improvement'
    ],
    education: 'Bachelor\'s degree',
    experience: '6+ years'
  },
  {
    id: 'document-controller',
    title: 'Document Controller',
    type: 'Full Time',
    location: 'Riyadh, Saudi Arabia',
    department: 'Project Management Office',
    postedDate: 'May 8, 2023',
    description: 'We are seeking a Document Controller to join our Project Management Office. The ideal candidate will be responsible for managing project documentation, maintaining document control systems, and ensuring compliance with document management procedures.',
    skills: ['Document Management', 'Filing Systems', 'MS Office', 'EDMS', 'Quality Control'],
    requirements: [
      'Bachelor\'s degree in Business Administration or related field',
      'Minimum 2 years of experience in document control',
      'Proficiency in document management systems',
      'Strong organizational and attention to detail',
      'Knowledge of document control procedures',
      'Experience with EDMS software'
    ],
    responsibilities: [
      'Manage and organize project documentation',
      'Maintain document control systems and registers',
      'Process document submissions and distributions',
      'Track document revisions and approvals',
      'Ensure compliance with document management procedures',
      'Assist team members with document retrieval'
    ],
    education: 'Bachelor\'s degree',
    experience: '2+ years'
  },
  {
    id: 'administrative-assistant',
    title: 'Administrative Assistant',
    type: 'Part Time',
    location: 'Jeddah, Saudi Arabia',
    department: 'Administration',
    postedDate: 'May 1, 2023',
    description: 'We are looking for an Administrative Assistant to provide administrative support to our project teams. The ideal candidate will be responsible for managing administrative tasks, coordinating meetings, and supporting office operations.',
    skills: ['Office Administration', 'MS Office', 'Scheduling', 'Communication', 'Organization'],
    requirements: [
      'Associate\'s or Bachelor\'s degree',
      'Minimum 1 year of administrative experience',
      'Proficiency in MS Office applications',
      'Strong organizational and time management skills',
      'Excellent communication abilities',
      'Attention to detail'
    ],
    responsibilities: [
      'Provide administrative support to project teams',
      'Coordinate meetings and manage calendars',
      'Prepare correspondence and documents',
      'Manage office supplies and equipment',
      'Handle phone calls and visitors',
      'Assist with travel arrangements'
    ],
    education: 'Associate\'s degree',
    experience: '1+ years'
  },
  {
    id: 'sustainability-consultant',
    title: 'Sustainability Consultant',
    type: 'Contract',
    location: 'Riyadh, Saudi Arabia',
    department: 'Technical Services',
    postedDate: 'April 25, 2023',
    description: 'We are seeking a Sustainability Consultant to support our projects in achieving sustainability goals. The ideal candidate will provide expertise in sustainable design, green building certification, and environmental compliance.',
    skills: ['LEED', 'Sustainability Assessment', 'Energy Modeling', 'Environmental Regulations', 'Green Building'],
    requirements: [
      'Bachelor\'s degree in Environmental Engineering, Architecture, or related field',
      'LEED AP or other sustainability credentials preferred',
      'Minimum 4 years of experience in sustainability consulting',
      'Knowledge of green building rating systems',
      'Experience with sustainability assessment tools',
      'Understanding of Saudi Vision 2030 sustainability goals'
    ],
    responsibilities: [
      'Provide sustainability consulting for projects',
      'Support green building certification processes',
      'Conduct sustainability assessments and analyses',
      'Advise on energy efficiency strategies',
      'Ensure compliance with environmental regulations',
      'Collaborate with design and construction teams'
    ],
    education: 'Bachelor\'s degree',
    experience: '4+ years'
  },
  {
    id: 'junior-engineer',
    title: 'Junior Engineer',
    type: 'Internship',
    location: 'Riyadh, Saudi Arabia',
    department: 'Engineering',
    postedDate: 'April 15, 2023',
    description: 'We are offering an internship opportunity for a Junior Engineer to gain practical experience in project management and engineering. The selected candidate will work alongside experienced professionals and contribute to real projects.',
    skills: ['Engineering Basics', 'CAD', 'Technical Writing', 'Problem Solving', 'Teamwork'],
    requirements: [
      'Currently pursuing a Bachelor\'s degree in Engineering',
      'Strong academic performance',
      'Basic knowledge of CAD software',
      'Good communication skills',
      'Eagerness to learn and grow',
      'Ability to work in a team environment'
    ],
    responsibilities: [
      'Assist senior engineers with technical tasks',
      'Participate in project meetings and site visits',
      'Help prepare engineering drawings and documents',
      'Collect and organize project data',
      'Conduct basic engineering calculations',
      'Support project teams with administrative tasks'
    ],
    education: 'Pursuing Bachelor\'s degree',
    experience: 'Entry level'
  }
]

// Create a composable for jobs data
export function useJobs() {
  const jobs = ref(jobsData)
  
  // Get all jobs
  const getAllJobs = () => jobs.value
  
  // Get job by ID
  const getJobById = (id: string) => jobs.value.find(job => job.id === id)
  
  // Get featured jobs
  const getFeaturedJobs = computed(() => 
    jobs.value.filter(job => job.featured || ['project-manager', 'cost-controller', 'planning-engineer'].includes(job.id))
  )
  
  // Get jobs by type
  const getJobsByType = (type: string) => jobs.value.filter(job => job.type === type)
  
  // Get jobs by department
  const getJobsByDepartment = (department: string) => jobs.value.filter(job => job.department === department)
  
  // Get jobs by location
  const getJobsByLocation = (location: string) => jobs.value.filter(job => job.location === location)
  
  // Search jobs by query
  const searchJobs = (query: string) => {
    const lowerQuery = query.toLowerCase()
    return jobs.value.filter(job => 
      job.title.toLowerCase().includes(lowerQuery) ||
      job.description.toLowerCase().includes(lowerQuery) ||
      job.department.toLowerCase().includes(lowerQuery) ||
      (job.skills && job.skills.some(skill => skill.toLowerCase().includes(lowerQuery)))
    )
  }
  
  return {
    jobs,
    getAllJobs,
    getJobById,
    getFeaturedJobs,
    getJobsByType,
    getJobsByDepartment,
    getJobsByLocation,
    searchJobs
  }
} 