import { H } from '@highlight-run/node'

export default defineEventHandler((event) => {
  const headers = getRequestHeaders(event)
  const parsed = H.parseHeaders(headers)

  try {
    throw new Error('example error!')
  } catch (e: any) {
    H.consumeError(e, parsed?.secureSessionId, parsed?.requestId)
  }
})
