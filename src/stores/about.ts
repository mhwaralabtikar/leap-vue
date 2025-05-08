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
      image: 'https://picsum.photos/id/1005/300/300',
      linkedin: '#',
      email: 'ahmed@leap-pm.com'
    },
    {
      name: 'Layla Al-Nasser',
      role: 'Head of Operations',
      image: 'https://picsum.photos/id/1011/300/300',
      linkedin: '#',
      email: 'layla@leap-pm.com'
    },
    {
      name: 'Mohamed Ibrahim',
      role: 'Technical Director',
      image: 'https://picsum.photos/id/1012/300/300',
      linkedin: '#',
      email: 'mohamed@leap-pm.com'
    },
    {
      name: 'Sara Al-Qahtani',
      role: 'Client Services Manager',
      image: 'https://picsum.photos/id/1027/300/300',
      linkedin: '#',
      email: 'sara@leap-pm.com'
    }
  ])

  const stats = ref([
    { value: '50', label: 'Completed Projects' },
    { value: '25', label: 'Active Clients' },
    { value: '10', label: 'Years Experience' },
    { value: '45', label: 'Team Members' }
  ])

  const partners = ref([
    { id: 1, name: 'Partner 1', logo: 'https://placehold.co/200x80?text=Partner+1' },
    { id: 2, name: 'Partner 2', logo: 'https://placehold.co/200x80?text=Partner+2' },
    { id: 3, name: 'Partner 3', logo: 'https://placehold.co/200x80?text=Partner+3' },
    { id: 4, name: 'Partner 4', logo: 'https://placehold.co/200x80?text=Partner+4' },
    { id: 5, name: 'Partner 5', logo: 'https://placehold.co/200x80?text=Partner+5' }
  ])

  return {
    companyHistory,
    valueProps,
    missionVision,
    values,
    teamMembers,
    stats,
    partners
  }
}) 