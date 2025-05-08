import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext, RouteRecordRaw } from 'vue-router'

// Define routes with type assertion to avoid TypeScript errors
// These components will be created later
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomePage.vue'),
    meta: {
      title: 'Welcome to Leap PM',
      subtitle: 'Your all-in-one project management solution'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/AboutPage.vue'),
    meta: {
      title: 'About Us',
      subtitle: 'Learn more about our company and mission',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' }
      ]
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/services/ServicesPage.vue'),
    meta: {
      title: 'Our Services',
      subtitle: 'Comprehensive project management services for your needs',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' }
      ]
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/projects/ProjectsPage.vue'),
    meta: {
      title: 'Our Projects',
      subtitle: 'Explore our portfolio of successful projects',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' }
      ]
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog/BlogPage.vue'),
    meta: {
      title: 'Blog & Insights',
      subtitle: 'Latest news and insights from our experts',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' }
      ]
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('../views/jobs/JobsPage.vue'),
    meta: {
      title: 'Careers',
      subtitle: 'Join our team of project management professionals',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/jobs' }
      ]
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/ContactPage.vue'),
    meta: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  },
  {
    path: '/contact/admin',
    name: 'contact-admin',
    component: () => import('../views/contact/AdminContactPage.vue'),
    meta: {
      title: 'Contact Management',
      subtitle: 'View and manage contact form submissions',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
        { name: 'Admin', path: '/contact/admin' }
      ]
    }
  },
  // Detail views
  {
    path: '/services/:id',
    name: 'service-detail',
    component: () => import('../views/services/ServiceDetailPage.vue'),
    meta: {
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Service Details', dynamic: true }
      ]
    },
    // Add dynamic title and subtitle based on the service
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const { id } = to.params;
      if (id) {
        // We'll set meta data dynamically when the component loads
        // Handled in the component's onMounted
        next();
      } else {
        next('/services');
      }
    }
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: () => import('../views/projects/ProjectDetailPage.vue'),
    meta: {
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Project Details', dynamic: true }
      ]
    }
  },
  {
    path: '/blog/:id',
    name: 'blog-detail',
    component: () => import('../views/blog/BlogPostDetailPage.vue'),
    meta: {
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Article', dynamic: true }
      ]
    }
  },
  {
    path: '/jobs/:id',
    name: 'job-detail',
    component: () => import('../views/jobs/JobDetailPage.vue'),
    meta: {
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/jobs' },
        { name: 'Job Details', dynamic: true }
      ]
    }
  }
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router 