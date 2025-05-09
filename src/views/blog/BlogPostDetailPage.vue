<template>
  <div>
    <!-- Blog Post Hero Section -->
    <section class="relative">
      <!-- Hero Image -->
      <div class="h-[40vh] md:h-[50vh] relative overflow-hidden">
        <img 
          :src="post.imageUrl" 
          :alt="post.title" 
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div class="absolute bottom-0 start-0 end-0 p-6 md:p-12 text-white">
          <div class="container mx-auto max-w-4xl">
            <div class="inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-medium mb-4">
              {{ post.category }}
            </div>
            <h1 class="text-3xl md:text-5xl font-bold mb-4">{{ post.title }}</h1>
            <div class="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div class="flex items-center">
                <CalendarIcon class="h-4 w-4 me-2" />
                <span>{{ post.date }}</span>
              </div>
              <div class="flex items-center">
                <ClockIcon class="h-4 w-4 me-2" />
                <span>{{ post.readTime }} min read</span>
              </div>
              <div class="flex items-center text-sm">
                <RouterLink to="/" class="text-white/80 hover:text-white transition-colors">
                  Home
                </RouterLink>
                <ChevronRightIcon class="h-4 w-4 mx-2 text-white/50" />
                <RouterLink to="/blog" class="text-white/80 hover:text-white transition-colors">
                  Blog
                </RouterLink>
                <ChevronRightIcon class="h-4 w-4 mx-2 text-white/50" />
                <span class="text-white">{{ post.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Post Content -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <!-- Author Information -->
            <div class="flex items-center mb-8 p-6 bg-white dark:bg-card dark:border dark:border-border/30 rounded-lg shadow-sm">
              <img 
                :src="post.author.avatar" 
                :alt="post.author.name" 
                class="w-16 h-16 rounded-full me-4"
              />
              <div>
                <h3 class="font-medium">{{ post.author.name }}</h3>
                <p class="text-foreground/70 text-sm">{{ post.author.role }}</p>
              </div>
            </div>
            
            <!-- Article Content -->
            <div class="prose prose-lg max-w-none">
              <p class="lead text-xl font-medium text-foreground/80 mb-8">
                {{ post.excerpt }}
              </p>
              
              <p>
                Project management in the Middle East is undergoing a significant transformation as organizations across the region embrace digital technologies and innovative methodologies to enhance project delivery. This shift is particularly evident in Saudi Arabia, where Vision 2030 has accelerated the demand for sophisticated project management techniques.
              </p>

              <h2>The Digital Transformation of Project Management</h2>
              <p>
                The integration of digital tools into project management workflows has revolutionized how projects are planned, executed, and monitored. Building Information Modeling (BIM), artificial intelligence, and data analytics are now essential components of the project manager's toolkit, enabling more accurate forecasting and decision-making.
              </p>
              <p>
                At LEAP PM, we've observed firsthand how these technologies have enhanced our ability to deliver complex projects on time and within budget. By leveraging real-time data and advanced analytics, project managers can identify potential issues before they impact project timelines, allowing for proactive rather than reactive management.
              </p>

              <figure>
                <img src="https://picsum.photos/id/180/800/500" alt="Digital project management dashboard" class="rounded-lg" />
                <figcaption>Modern project management platforms provide comprehensive visibility into project performance metrics.</figcaption>
              </figure>

              <h2>Embracing Agile Methodologies</h2>
              <p>
                While traditional waterfall approaches remain common in construction and infrastructure projects, we're seeing increasing adoption of agile and hybrid methodologies across various sectors. These approaches offer greater flexibility and responsiveness to changing project requirements, particularly valuable in today's dynamic business environment.
              </p>
              <p>
                The key benefits of agile methodologies include:
              </p>
              <ul>
                <li>Increased stakeholder engagement throughout the project lifecycle</li>
                <li>Greater adaptability to changing requirements and priorities</li>
                <li>More frequent delivery of tangible results</li>
                <li>Enhanced team collaboration and communication</li>
                <li>Continuous improvement through regular retrospectives</li>
              </ul>

              <h2>Sustainability and Project Management</h2>
              <p>
                Environmental considerations are increasingly being integrated into project management practices across the Middle East. As governments and organizations prioritize sustainability, project managers must incorporate environmental impact assessments and green building principles into their planning and execution processes.
              </p>
              <p>
                This shift towards sustainable project management aligns with global trends and represents a significant opportunity for the region to demonstrate leadership in responsible development. By balancing economic objectives with environmental stewardship, project managers can deliver long-term value that extends beyond immediate project outcomes.
              </p>

              <blockquote>
                "The future of project management lies in the seamless integration of technology, methodology, and sustainability. Those who can master this integration will be positioned to lead the next generation of transformative projects in the Middle East."
                <cite>- Abdullah Al-Faisal, CEO of LEAP PM</cite>
              </blockquote>

              <h2>Building Local Expertise</h2>
              <p>
                Perhaps the most important trend we're observing is the development of local project management expertise. As knowledge transfer occurs between international consultants and local professionals, a robust community of skilled project managers is emerging across the region.
              </p>
              <p>
                This growing talent pool is essential for the successful delivery of the ambitious projects planned as part of Vision 2030 and similar initiatives throughout the Middle East. By combining international best practices with deep understanding of local contexts, these professionals are uniquely positioned to navigate the complexities of regional project delivery.
              </p>

              <h2>Conclusion</h2>
              <p>
                The future of project management in the Middle East is bright, characterized by technological innovation, methodological flexibility, sustainability focus, and developing expertise. As the region continues its ambitious development programs, effective project management will remain a critical success factor.
              </p>
              <p>
                At LEAP PM, we're committed to staying at the forefront of these trends, continually enhancing our capabilities to deliver exceptional value to our clients and contributing to the region's transformative vision.
              </p>
            </div>
            
            <!-- Tags -->
            <div class="mt-12 flex flex-wrap gap-2">
              <span v-for="(tag, i) in post.tags" :key="i" class="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                #{{ tag }}
              </span>
            </div>
            
            <!-- Social Sharing -->
            <div class="mt-8 pt-8 border-t border-border">
              <h4 class="font-medium mb-4">{{ $t('blog.shareArticle') }}</h4>
              <div class="flex space-s-3 rtl:space-s-reverse">
                <a 
                  href="#" 
                  @click.prevent="shareOnFacebook" 
                  class="p-2 bg-[#1877F2]/10 text-[#1877F2] dark:bg-[#1877F2]/20 dark:text-[#4293FB] rounded-full hover:bg-[#1877F2]/20 transition-colors"
                  :aria-label="$t('blog.shareOnFacebook')"
                >
                  <FacebookIcon class="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  @click.prevent="shareOnX"
                  class="p-2 bg-black/10 text-black dark:bg-white/20 dark:text-white rounded-full hover:bg-black/20 dark:hover:bg-white/30 transition-colors"
                  :aria-label="$t('blog.shareOnX')"
                >
                  <XIcon class="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  @click.prevent="shareOnLinkedIn"
                  class="p-2 bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 dark:text-[#0A86E2] rounded-full hover:bg-[#0A66C2]/20 transition-colors"
                  :aria-label="$t('blog.shareOnLinkedIn')"
                >
                  <LinkedinIcon class="h-5 w-5" />
                </a>
                <button 
                  @click="sharePost"
                  class="p-2 bg-[#25D366]/10 text-[#25D366] dark:bg-[#25D366]/20 dark:text-[#3DE37D] rounded-full hover:bg-[#25D366]/20 transition-colors"
                  :aria-label="$t('blog.share')"
                >
                  <Share2Icon class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div>
            <!-- Author Bio -->
            <div class="bg-white dark:bg-card dark:border dark:border-border/30 rounded-lg shadow-md p-6 mb-8">
              <h3 class="text-xl font-bold mb-6 pb-4 border-b">About the Author</h3>
              <div class="flex flex-col items-center text-center">
                <img 
                  :src="post.author.avatar" 
                  :alt="post.author.name" 
                  class="w-24 h-24 rounded-full mb-4"
                />
                <h4 class="font-medium text-lg mb-1">{{ post.author.name }}</h4>
                <p class="text-primary mb-3">{{ post.author.role }}</p>
                <p class="text-foreground/70 text-sm mb-4">
                  {{ post.author.bio }}
                </p>
                <div class="flex justify-center space-s-3 rtl:space-s-reverse">
                  <a href="#" class="p-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full hover:bg-primary/20 transition-colors">
                    <LinkedinIcon class="h-4 w-4" />
                  </a>
                  <a href="#" class="p-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full hover:bg-primary/20 transition-colors">
                    <XIcon class="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Recent Posts -->
            <div class="bg-white dark:bg-card dark:border dark:border-border/30 rounded-lg shadow-md p-6 mb-8">
              <h3 class="text-xl font-bold mb-6 pb-4 border-b">Recent Posts</h3>
              <div class="space-y-4">
                <div v-for="(recentPost, i) in recentPosts" :key="i" class="flex items-start">
                  <img 
                    :src="recentPost.imageUrl" 
                    :alt="recentPost.title" 
                    class="w-16 h-16 object-cover rounded-md me-3"
                  />
                  <div>
                    <h4 class="font-medium line-clamp-2 mb-1 hover:text-primary transition-colors">
                      <RouterLink :to="`/blog/${recentPost.id}`">{{ recentPost.title }}</RouterLink>
                    </h4>
                    <p class="text-foreground/60 text-sm">{{ recentPost.date }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Categories -->
            <div class="bg-white dark:bg-card dark:border dark:border-border/30 rounded-lg shadow-md p-6 mb-8">
              <h3 class="text-xl font-bold mb-6 pb-4 border-b">Categories</h3>
              <div class="space-y-3">
                <RouterLink 
                  v-for="(category, i) in categories" 
                  :key="i" 
                  to="#" 
                  class="flex justify-between items-center hover:text-primary transition-colors"
                >
                  <span>{{ category.name }}</span>
                  <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{{ category.count }}</span>
                </RouterLink>
              </div>
            </div>
            
            <!-- Newsletter -->
            <div class="bg-primary rounded-lg shadow-md p-6">
              <h3 class="text-xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h3>
              <p class="text-white/80 text-sm mb-4">
                Stay updated with our latest insights and news.
              </p>
              <div class="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  class="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button class="w-full px-4 py-2 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related Posts -->
    <section class="py-16 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">You Might Also Like</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(relatedPost, i) in relatedPosts" :key="i" class="bg-white dark:bg-card dark:border dark:border-border/30 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="aspect-[16/9] overflow-hidden">
              <img 
                :src="relatedPost.imageUrl" 
                :alt="relatedPost.title" 
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <div class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {{ relatedPost.category }}
                </div>
                <span class="text-foreground/60 text-sm">{{ relatedPost.date }}</span>
              </div>
              <h3 class="text-xl font-bold mb-3">{{ relatedPost.title }}</h3>
              <p class="text-foreground/70 mb-4 line-clamp-3">{{ relatedPost.excerpt }}</p>
              <RouterLink :to="`/blog/${relatedPost.id}`" class="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
                Read More
                <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ChevronRightIcon, CalendarIcon, ClockIcon, FacebookIcon, XIcon, LinkedinIcon, Share2Icon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CtaSection from '@/components/CtaSection.vue'
import { useBlogStore } from '@/stores/blog'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const linkCopied = ref(false)
const blogStore = useBlogStore()

// Get current post based on route params
const postId = computed(() => route.params.id as string)
const post = computed(() => {
  const found = blogStore.getBlogPostById(postId.value)
  return found || null // Return null if post not found
})

// Redirect to not found page if post doesn't exist
onMounted(() => {
  if (!post.value) {
    router.replace('/blog/not-found')
  }
})

// Recent posts (excluding current one)
const recentPosts = computed(() => {
  return blogStore.blogPosts
    .filter(p => p.id !== postId.value)
    .slice(0, 3)
})

// Related posts (excluding current one)
const relatedPosts = computed(() => {
  // First try to get posts in the same category
  const sameCategory = blogStore.blogPosts
    .filter(p => p.id !== postId.value && p.category === post.value.category)
  
  let related = [...sameCategory]
  
  // If we don't have 3 posts in the same category, add others
  if (related.length < 3) {
    const others = blogStore.blogPosts
      .filter(p => p.id !== postId.value && p.category !== post.value.category)
    
    // Randomize the others array
    const randomOthers = [...others].sort(() => 0.5 - Math.random())
    
    // Add enough to make up 3 total
    related = [...related, ...randomOthers.slice(0, 3 - related.length)]
  }
  
  return related.slice(0, 3)
})

// Blog categories
const categories = computed(() => {
  const categoryCounts = blogStore.blogPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return Object.entries(categoryCounts).map(([name, count]) => ({ name, count }))
})

// Sharing functionality
const getShareUrl = () => {
  return window.location.href
}

const getShareTitle = () => {
  return post.value.title
}

const getShareText = () => {
  return post.value.excerpt
}

// Main share function using navigator.share if available
const sharePost = async () => {
  const shareData = {
    title: getShareTitle(),
    text: getShareText(),
    url: getShareUrl()
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      // Fallback to copy to clipboard if Web Share API is not available
      copyToClipboard()
    }
  } catch (error) {
    console.error('Error sharing post:', error)
  }
}

// Social media sharing functions
const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnX = () => {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareTitle())}&url=${encodeURIComponent(getShareUrl())}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`
  window.open(url, '_blank', 'width=600,height=400')
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(getShareUrl())
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
    alert(t('blog.linkCopied'))
  } catch (error) {
    console.error('Failed to copy link:', error)
  }
}
</script>
