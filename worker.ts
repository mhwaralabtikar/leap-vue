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

// Export default object with fetch handler
export default {
  fetch: (request: Request, env: any, ctx: any) => {
    return router.handle(request)
  }
}
