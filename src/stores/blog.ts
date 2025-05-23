import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  imageUrl: string
  author: {
    name: string
    avatar?: string
  }
  date: string
  category: string
  tags: string[]
  readTime?: number
}

export const useBlogStore = defineStore('blog', () => {
  // Sample blog posts data
  const blogPosts = ref<BlogPost[]>([
    {
      id: 'construction-project-management',
      title: 'The Future of Construction Project Management',
      excerpt: 'Explore how technology is transforming construction project management with AI-powered tools and predictive analytics.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit nibh bibendum nisl, vel bibendum nibh nisl vel nibh.',
      imageUrl: 'https://picsum.photos/id/60/800/600',
      author: {
        name: 'Ahmed Al-Farsi',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      date: 'June 15, 2023',
      category: 'Project Management',
      tags: ['Construction', 'Project Management', 'Technology'],
      readTime: 8
    },
    {
      id: 'cost-control-best-practices',
      title: 'Cost Control Best Practices for Large Projects',
      excerpt: 'Discover effective strategies for controlling costs on large-scale construction and engineering projects.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit nibh bibendum nisl, vel bibendum nibh nisl vel nibh.',
      imageUrl: 'https://picsum.photos/id/180/800/600',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      date: 'May 28, 2023',
      category: 'Cost Management',
      tags: ['Cost Control', 'Budget', 'Construction'],
      readTime: 6
    },
    {
      id: 'bim-4d-modeling',
      title: 'How 4D BIM Modeling Improves Project Delivery',
      excerpt: 'Learn how 4D BIM modeling can enhance project visualization, planning, and coordination in complex projects.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit nibh bibendum nisl, vel bibendum nibh nisl vel nibh.',
      imageUrl: 'https://picsum.photos/id/1/800/600',
      author: {
        name: 'Mohammed Al-Sulaiman',
        avatar: 'https://i.pravatar.cc/150?img=3'
      },
      date: 'April 12, 2023',
      category: 'Technology',
      tags: ['BIM', 'Digital Construction', 'Project Planning'],
      readTime: 7
    },
    {
      id: 'risk-management-saudi',
      title: 'Risk Management in Saudi Arabian Construction Projects',
      excerpt: 'An analysis of common risks in Saudi construction projects and strategies for effective risk management.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit nibh bibendum nisl, vel bibendum nibh nisl vel nibh.',
      imageUrl: 'https://picsum.photos/id/20/800/600',
      author: {
        name: 'Tariq Al-Otaibi',
        avatar: 'https://i.pravatar.cc/150?img=8'
      },
      date: 'March 5, 2023',
      category: 'Risk Management',
      tags: ['Risk', 'Saudi Arabia', 'Construction'],
      readTime: 5
    },
    {
      id: 'schedule-optimization',
      title: 'Schedule Optimization Techniques for Construction Projects',
      excerpt: 'Explore advanced techniques for optimizing project schedules and improving project delivery timelines.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit nibh bibendum nisl, vel bibendum nibh nisl vel nibh.',
      imageUrl: 'https://picsum.photos/id/26/800/600',
      author: {
        name: 'Lisa Chen',
        avatar: 'https://i.pravatar.cc/150?img=9'
      },
      date: 'February 18, 2023',
      category: 'Planning & Scheduling',
      tags: ['Scheduling', 'Optimization', 'Construction'],
      readTime: 9
    }
  ])

  // Featured post is the first blog post
  const featuredPost = computed(() => blogPosts.value[0])

  // Extract unique categories from blog posts
  const categories = computed(() => {
    const uniqueCategories = new Set(blogPosts.value.map(post => post.category))
    return Array.from(uniqueCategories)
  })

  // Get blog post by ID
  function getBlogPostById(id: string) {
    return blogPosts.value.find(post => post.id === id)
  }

  // Filter blog posts by category
  function getBlogPostsByCategory(category: string) {
    return blogPosts.value.filter(post => post.category === category)
  }

  return {
    blogPosts,
    featuredPost,
    categories,
    getBlogPostById,
    getBlogPostsByCategory
  }
}) 