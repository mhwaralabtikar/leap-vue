import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAboutStore = defineStore('about', () => {
  // Sample data for about page
  const companyHistory = ref({
    foundedYear: '2018',
    story: {
      content1: 'LEAP Project Management was founded in 2018 with a vision to transform project management practices in the Middle East by implementing global best practices and innovative technologies.',
      content2: 'Since our inception, we have successfully delivered project management services to over 50 major projects across the region, establishing ourselves as a trusted partner for both public and private sector clients.'
    }
  })

  const valueProps = ref({
    expertise: 'Industry Expertise',
    expertiseContent: 'Our team brings decades of combined experience in project management across various sectors including infrastructure, commercial, and industrial projects.',
    global: 'Global Standards',
    globalContent: 'We implement internationally recognized methodologies and standards adapted to local requirements and conditions.'
  })

  const missionVision = ref({
    missionTitle: 'Our Mission',
    missionContent: 'To deliver exceptional project management services that ensure successful project outcomes for our clients through innovation, expertise, and dedication.',
    visionTitle: 'Our Vision',
    visionContent: 'To be the leading project management consultant in the Middle East, known for excellence in service delivery and innovative solutions.'
  })

  const values = ref([
    {
      value: 'Excellence',
      content: 'We strive for excellence in everything we do, always seeking to exceed expectations.',
      icon: 'AwardIcon'
    },
    {
      value: 'Integrity',
      content: 'We uphold the highest standards of integrity and transparency in all our dealings.',
      icon: 'ShieldIcon'
    },
    {
      value: 'Collaboration',
      content: 'We believe in the power of collaboration and teamwork to achieve exceptional results.',
      icon: 'UsersIcon'
    },
    {
      value: 'Innovation',
      content: 'We constantly innovate and embrace new technologies and methodologies.',
      icon: 'LightbulbIcon'
    }
  ])

  const teamMembers = ref([
    {
      name: 'Ahmed Al-Farsi',
      role: 'CEO & Founder',
      avatar: 'https://picsum.photos/id/1005/300/300',
      image: 'https://picsum.photos/id/1005/300/300',
      linkedin: '#',
      email: 'ahmed@leap-pm.com',
      bio: 'Ahmed brings over 15 years of experience in project management across the Middle East, with a particular focus on large-scale infrastructure and construction projects.'
    },
    {
      name: 'Layla Al-Nasser',
      role: 'Head of Operations',
      avatar: 'https://picsum.photos/id/1011/300/300',
      image: 'https://picsum.photos/id/1011/300/300',
      linkedin: '#',
      email: 'layla@leap-pm.com',
      bio: 'Layla specializes in operational efficiency and cost management, with extensive experience in optimizing project delivery processes.'
    },
    {
      name: 'Mohamed Ibrahim',
      role: 'Technical Director',
      avatar: 'https://picsum.photos/id/1012/300/300',
      image: 'https://picsum.photos/id/1012/300/300',
      linkedin: '#',
      email: 'mohamed@leap-pm.com',
      bio: 'Mohammad is an expert in digital construction technologies with a focus on BIM implementation and integration with project management processes.'
    },
    {
      name: 'Sara Al-Qahtani',
      role: 'Client Services Manager',
      avatar: 'https://picsum.photos/id/1027/300/300',
      image: 'https://picsum.photos/id/1027/300/300',
      linkedin: '#',
      email: 'sara@leap-pm.com',
      bio: 'Sara is a dedicated client services manager with a strong focus on client satisfaction and project success.'
    }
  ])

  const stats = ref([
    { value: '50', label: 'Completed Projects' },
    { value: '25', label: 'Active Clients' },
    { value: '10', label: 'Years Experience' },
    { value: '45', label: 'Team Members' }
  ])

  const partners = ref([
    { id: 1, name: 'Partner 1', logo: '/partners/c1.png' },
    { id: 2, name: 'Partner 2', logo: '/partners/c2.png' },
    { id: 3, name: 'Partner 3', logo: '/partners/c3.png' },
    { id: 4, name: 'Partner 4', logo: '/partners/c4.png' },
    { id: 5, name: 'Partner 5', logo: '/partners/c5.png' },
    { id: 6, name: 'Partner 6', logo: '/partners/c6.png' },
    { id: 7, name: 'Partner 7', logo: '/partners/c7.png' },
    { id: 8, name: 'Partner 8', logo: '/partners/c8.png' },
    { id: 9, name: 'Partner 9', logo: '/partners/c9.png' },
    { id: 10, name: 'Partner 10', logo: '/partners/c10.png' }
  ])


  // Values that define the company
  const companyValues = ref([
    {
      id: 'integrity',
      title: 'about.values.integrity',
      description: 'about.values.integrityContent',
      icon: 'shield'
    },
    {
      id: 'excellence',
      title: 'about.values.excellence',
      description: 'about.values.excellenceContent',
      icon: 'award'
    },
    {
      id: 'innovation',
      title: 'about.values.innovation',
      description: 'about.values.innovationContent',
      icon: 'lightbulb'
    },
    {
      id: 'collaboration',
      title: 'about.values.collaboration',
      description: 'about.values.collaborationContent',
      icon: 'users'
    }
  ])
  
  return {
    companyHistory,
    valueProps,
    missionVision,
    values,
    teamMembers,
    stats,
    partners,
    companyValues
  }
}) 