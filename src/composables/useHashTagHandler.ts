import { onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

/**
 * Composable for handling hashtags across the application
 * Redirects to search page when a hashtag is detected in the URL
 * Supports both #tag and #search/tag formats
 */
export function useHashTagHandler() {
  const router = useRouter()
  const route = useRoute()

  // Process the hashtag and redirect to search if needed
  const processHashTag = () => {
    // Check if there's a hashtag in the URL that's not a route anchor
    if (window.location.hash && !window.location.hash.startsWith('#/')) {
      const hash = window.location.hash.slice(1)
      
      // Skip empty hashtags
      if (!hash) return
      
      // Handle #search/tag format
      if (hash.startsWith('search/')) {
        const searchQuery = hash.substring('search/'.length)
        if (searchQuery && route.path !== '/search' && router && typeof router.push === 'function') {
          router.push({
            path: '/search',
            query: { q: searchQuery },
            hash: `#${searchQuery}`
          })
        }
      } 
      // Handle regular hashtags (#tag)
      else if (route.path !== '/search' && router && typeof router.push === 'function') {
        router.push({
          path: '/search', 
          query: { q: hash },
          hash: `#${hash}`
        })
      }
    }
  }

  // Watch for hash changes
  watch(() => window.location.hash, processHashTag)

  // Check hash on component mount
  onMounted(processHashTag)

  return {
    processHashTag
  }
} 