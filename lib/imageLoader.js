export default function imageLoader({ src, width, quality }) {
  const basePath = process.env.DEPLOY_TARGET === 'github' ? '/my-portfolio' : ''
  if (src.startsWith('/')) {
    return `${basePath}${src}?w=${width}&q=${quality || 75}`
  }
  return src
} 