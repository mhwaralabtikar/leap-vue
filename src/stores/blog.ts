import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
  // Featured post
  const featuredPost = {
    id: 'future-of-project-management',
    title: 'The Future of Project Management in the Middle East',
    category: 'Industry Insights',
    date: 'June 15, 2023',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    excerpt: 'As the Middle East continues its ambitious development trajectory, project management practices are evolving to meet the unique challenges and opportunities of the region.'
  }
  
  // Blog posts
  const blogPosts = [
    {
      id: 'cost-management-techniques',
      title: 'Advanced Cost Management Techniques for Complex Projects',
      category: 'Best Practices',
      date: 'May 28, 2023',
      imageUrl: 'https://picsum.photos/id/15/600/400',
      excerpt: 'Effective cost management is crucial for project success. Learn about advanced techniques to control costs in complex, multi-stakeholder projects.'
    },
    {
      id: 'bim-implementation',
      title: 'BIM Implementation Strategies for Saudi Construction Projects',
      category: 'Technology',
      date: 'May 10, 2023',
      imageUrl: 'https://picsum.photos/id/60/600/400',
      excerpt: 'Building Information Modeling (BIM) is transforming construction project management. Discover key strategies for successful implementation.'
    },
    {
      id: 'risk-management-saudi',
      title: 'Risk Management in Saudi Megaprojects: Lessons Learned',
      category: 'Case Studies',
      date: 'April 22, 2023',
      imageUrl: 'https://picsum.photos/id/28/600/400',
      excerpt: 'Saudi Arabia is home to some of the world\'s most ambitious megaprojects. Explore key risk management lessons from these complex initiatives.'
    },
    {
      id: 'project-controls-implementation',
      title: 'Implementing Project Controls Systems: A Practical Guide',
      category: 'Best Practices',
      date: 'April 5, 2023',
      imageUrl: 'https://picsum.photos/id/180/600/400',
      excerpt: 'Effective project controls are essential for project success. Learn how to implement robust project control systems in your organization.'
    },
    {
      id: 'digital-transformation-pm',
      title: 'Digital Transformation in Project Management',
      category: 'Technology',
      date: 'March 18, 2023',
      imageUrl: 'https://picsum.photos/id/48/600/400',
      excerpt: 'Digital tools and technologies are revolutionizing project management. Discover how to leverage digital transformation for better project outcomes.'
    },
    {
      id: 'claims-management-strategy',
      title: 'Developing a Proactive Claims Management Strategy',
      category: 'Best Practices',
      date: 'March 2, 2023',
      imageUrl: 'https://picsum.photos/id/92/600/400',
      excerpt: 'Claims can significantly impact project success. Learn how to develop a proactive approach to claims management and dispute resolution.'
    },
    {
      id: 'saudi-vision-2030-pm',
      title: 'Project Management and Saudi Vision 2030',
      category: 'Industry Insights',
      date: 'February 15, 2023',
      imageUrl: 'https://picsum.photos/id/43/600/400',
      excerpt: 'Vision 2030 is driving massive infrastructure development in Saudi Arabia. Explore the implications for project management professionals.'
    },
    {
      id: 'agile-construction',
      title: 'Agile Methodologies in Construction Project Management',
      category: 'Best Practices',
      date: 'January 30, 2023',
      imageUrl: 'https://picsum.photos/id/142/600/400',
      excerpt: 'Can agile methodologies be applied to construction projects? Discover how adaptive approaches can enhance traditional construction management.'
    },
    {
      id: 'sustainability-project-management',
      title: 'Incorporating Sustainability in Project Management Practices',
      category: 'Industry Insights',
      date: 'January 12, 2023',
      imageUrl: 'https://picsum.photos/id/164/600/400',
      excerpt: 'Sustainability is becoming increasingly important in project management. Learn how to integrate sustainable practices into your projects.'
    }
  ]
  
  // Blog categories
  const categories = [
    'All',
    'Best Practices',
    'Technology',
    'Case Studies',
    'Industry Insights'
  ]
  
  // Get recent posts (latest 3)
  const recentPosts = [...blogPosts].slice(0, 3)
  
  // Get blog post by ID
  function getPostById(id: string) {
    if (id === featuredPost.id) {
      return featuredPost
    }
    return blogPosts.find(post => post.id === id)
  }
  
  // Get posts by category
  function getPostsByCategory(category: string) {
    if (category === 'All') {
      return blogPosts
    }
    return blogPosts.filter(post => post.category === category)
  }
  
  return {
    featuredPost,
    blogPosts,
    categories,
    recentPosts,
    getPostById,
    getPostsByCategory
  }
}) 