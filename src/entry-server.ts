import { createApp } from './main'
import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import type { SSRContext } from 'vue/server-renderer'

// SSR render function
export async function render(url: string, manifest: Record<string, string[]>) {
  // Create app for server-side rendering with memory history
  const { app, router, pinia, head } = createApp(createMemoryHistory())
  
  // Set the router to the requested URL
  await router.push(url)
  await router.isReady()
  
  // Create SSR context
  const ctx = {} as SSRContext
  
  // Render app to string
  const html = await renderToString(app, ctx)
  
  // Get Pinia state for client hydration
  const state = JSON.stringify(pinia.state.value)
  
  // Get head elements
  const { headTags } = head

  return { html, state, headTags }
} 