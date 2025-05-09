import { createRouter as createVueRouter } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext, RouteRecordRaw, RouterHistory } from 'vue-router'

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
    path: '/services/not-found',
    name: 'service-not-found',
    component: () => import('../views/errors/detail/ServiceNotFoundPage.vue'),
    meta: {
      title: 'Service Not Found',
      subtitle: 'The service you are looking for does not exist',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Not Found', path: '' }
      ]
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
    path: '/projects/not-found',
    name: 'project-not-found',
    component: () => import('../views/errors/detail/ProjectNotFoundPage.vue'),
    meta: {
      title: 'Project Not Found',
      subtitle: 'The project you are looking for does not exist',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Not Found', path: '' }
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
    path: '/blog/not-found',
    name: 'blog-not-found',
    component: () => import('../views/errors/detail/BlogNotFoundPage.vue'),
    meta: {
      title: 'Blog Post Not Found',
      subtitle: 'The blog post you are looking for does not exist',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Not Found', path: '' }
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
  },
  {
    path: '/jobs/:id/apply',
    name: 'job-apply',
    component: () => import('../views/jobs/JobApplyPage.vue'),
    meta: {
      title: 'Apply for Job',
      subtitle: 'Submit your application for this position',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/jobs' },
        { name: 'Job Details', dynamic: true, parentParam: true },
        { name: 'Apply', path: '' }
      ]
    }
  },
  {
    path: '/jobs/not-found',
    name: 'job-not-found',
    component: () => import('../views/errors/detail/JobNotFoundPage.vue'),
    meta: {
      title: 'Job Not Found',
      subtitle: 'The job posting you are looking for does not exist',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/jobs' },
        { name: 'Not Found', path: '' }
      ]
    }
  },
  // Legal Pages
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/legal/TermsPage.vue'),
    meta: {
      title: 'Terms and Conditions',
      subtitle: 'Our terms of service and usage agreement',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Terms', path: '/terms' }
      ]
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/legal/PrivacyPage.vue'),
    meta: {
      title: 'Privacy Policy',
      subtitle: 'How we collect, use, and protect your data',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Privacy', path: '/privacy' }
      ]
    }
  },
  // Error Pages
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/errors/NotFoundPage.vue'),
    meta: {
      title: 'Page Not Found',
      subtitle: 'The page you are looking for does not exist',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Not Found', path: '' }
      ]
    }
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/errors/ErrorPage.vue'),
    meta: {
      title: 'Error',
      subtitle: 'Something went wrong',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Error', path: '/error' }
      ]
    }
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: () => import('../views/errors/MaintenancePage.vue'),
    meta: {
      title: 'Maintenance',
      subtitle: 'We are currently performing maintenance',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Maintenance', path: '/maintenance' }
      ]
    }
  }
] as RouteRecordRaw[]

// Create router with dynamic history mode for SSR support
export function createRouter(history: RouterHistory) {
  return createVueRouter({
    history,
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
}

// Export the default router instance for compatibility
import { createWebHistory } from 'vue-router'
const router = createRouter(createWebHistory())
export default router 