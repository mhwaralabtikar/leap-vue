import { Router } from 'itty-router'

const router = Router()

router.get('*', async (req) => {
  const url = new URL(req.url)
  const path = url.pathname === '/' ? '/index.html' : url.pathname

  // Fetch the requested file from the dist directory
  const response = await fetch(path, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
  return response
})

// Default export of the worker function
addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request))
})
