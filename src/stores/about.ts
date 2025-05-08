import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', () => {
  // Company History data
  const companyHistory = {
    foundedYear: '2008',
    story: {
      title: 'Building a Legacy of Project Excellence',
      content1: 'Founded in 2008, LEAP PM has grown from a small consulting firm to one of the region\'s leading project management companies, with a focus on delivering exceptional results across diverse industries.',
      content2: 'Our journey has been defined by a commitment to innovation, excellence, and client satisfaction. We\'ve successfully delivered hundreds of projects, building long-lasting relationships with clients who trust us to bring their vision to life.'
    }
  }
  
  // Company value propositions
  const valueProps = {
    expertise: 'Industry Expertise',
    expertiseContent: 'Our team brings specialized knowledge across construction, infrastructure, healthcare, and technology sectors.',
    global: 'Global Experience',
    globalContent: 'With projects completed across the Middle East, Europe, and Asia, we bring a global perspective to every engagement.'
  }
  
  // Mission and vision
  const missionVision = {
    missionTitle: 'Our Mission',
    missionContent: 'To deliver exceptional project management solutions that enable our clients to achieve their business objectives through successful project delivery.',
    visionTitle: 'Our Vision',
    visionContent: 'To be the most trusted project management partner in the Middle East, known for excellence, innovation, and positive impact on the communities we serve.'
  }
  
  // Company values
  const values = [
    {
      key: 'integrity',
      value: 'Integrity',
      content: 'Integrity in all our business dealings',
      icon: 'ShieldIcon'
    },
    {
      key: 'excellence',
      value: 'Excellence',
      content: 'Commitment to the highest standards of quality',
      icon: 'AwardIcon'
    },
    {
      key: 'collaboration',
      value: 'Collaboration',
      content: 'Working together to achieve extraordinary results',
      icon: 'UsersIcon'
    },
    {
      key: 'innovation',
      value: 'Innovation',
      content: 'Embracing new ideas and approaches',
      icon: 'LightbulbIcon'
    }
  ]
  
  // Team members
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmad Al-Saud',
      role: 'CEO & Founder',
      image: 'https://picsum.photos/id/1005/300/300',
      linkedin: '#',
      // twitter: '#',
      email: 'ahmad@leappm.sa'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Operations Director',
      image: 'https://picsum.photos/id/1011/300/300',
      linkedin: '#',
      // twitter: '#',
      email: 'sarah@leappm.sa'
    },
    {
      id: 3,
      name: 'Mohammed Al-Harbi',
      role: 'Technical Director',
      image: 'https://picsum.photos/id/1012/300/300',
      linkedin: '#',
      // twitter: '#',
      email: 'mohammed@leappm.sa'
    },
    {
      id: 4,
      name: 'Layla Al-Otaibi',
      role: 'Finance Manager',
      image: 'https://picsum.photos/id/1027/300/300',
      linkedin: '#',
      // twitter: '#',
      email: 'layla@leappm.sa'
    }
  ]
  
  // Company stats
  const stats = [
    {
      key: 'projects',
      value: '250',
      label: 'Projects Completed'
    },
    {
      key: 'clients',
      value: '120',
      label: 'Happy Clients'
    },
    {
      key: 'countries',
      value: '15',
      label: 'Countries Served'
    },
    {
      key: 'team',
      value: '50',
      label: 'Team Members'
    }
  ]
  
  // Partners/clients
  const partners = [
    {
      id: 1,
      name: 'Saudi Aramco',
      logo: 'https://picsum.photos/id/101/150/60'
    },
    {
      id: 2,
      name: 'NEOM',
      logo: 'https://picsum.photos/id/102/150/60'
    },
    {
      id: 3,
      name: 'SABIC',
      logo: 'https://picsum.photos/id/103/150/60'
    },
    {
      id: 4,
      name: 'Saudi Electricity Company',
      logo: 'https://picsum.photos/id/104/150/60'
    },
    {
      id: 5,
      name: 'Royal Commission',
      logo: 'https://picsum.photos/id/105/150/60'
    }
  ]
  
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