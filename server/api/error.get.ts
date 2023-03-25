import { H } from '@highlight-run/node'

export default defineEventHandler((event) => {
  const headers = getRequestHeaders(event)
  const parsed = H.parseHeaders(headers)

  console.log('hey there!');
  console.warn('whoa there', {'key': 'value'});

  try {
    throw new Error('example error!')
  } catch (e: any) {
    H.consumeError(e, parsed?.secureSessionId, parsed?.requestId)
  }
})
