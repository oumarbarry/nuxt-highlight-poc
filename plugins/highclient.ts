import { H } from 'highlight.run'

export default defineNuxtPlugin(() => {
  H.init(process.env.HIGHLIGHT_PROJECT_ID, {
    tracingOrigins: true,
    environment: 'production',
    networkRecording: {
      enabled: true,
      recordHeadersAndBody: true,
    },
  })
})
