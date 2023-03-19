import { H } from '@highlight-run/node'

export default defineNitroPlugin(() => {
  H.init({ projectID: process.env.HIGHLIGHT_PROJECT_ID! })
})
