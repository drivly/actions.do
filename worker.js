export const api = {
  icon: '🚀',
  name: 'actions.do',
  description: 'Cloudflare Worker Template',
  url: 'https://actions.do/api',
  type: 'https://apis.do/primitives',
  endpoints: {
    listCategories: 'https://actions.do/api',
    getCategory: 'https://actions.do/:type',
  },
  site: 'https://actions.do',
  login: 'https://actions.do/login',
  signup: 'https://actions.do/signup',
  subscribe: 'https://actions.do/subscribe',
  repo: 'https://github.com/drivly/actions.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://actions.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
