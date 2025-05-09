import { createApp } from './main'
import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory } from 'vue-router'

export async function render(url: string, manifest: Record<string, any>) {
  // Create the app instance
  const { app, router, pinia } = createApp(createMemoryHistory())

  // Set the URL and wait for route to be resolved
  await router.push(url)
  await router.isReady()

  // Context to be used by the app for rendering
  const ctx = {}
  const html = await renderToString(app, ctx)

  // Get initial state from pinia stores
  const initialState = JSON.stringify(pinia.state.value)

  // Return HTML and state for hydration
  return { html, initialState }
} 