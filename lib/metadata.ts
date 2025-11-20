
export function getBaseUrl(): string {

  if (process.env.NODE_ENV === 'production') {
    return 'https://viewpoints.stability.nexus'
  }
  return 'http://localhost:3000'
}

/**
 * Get absolute URL for a path
 */
export function getAbsoluteUrl(path: string): string {
  const baseUrl = getBaseUrl()
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

/**
 * Get absolute image URL for Open Graph
 */
export function getOgImageUrl(imagePath: string): string {

  // If already absolute URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }

  return getAbsoluteUrl(imagePath)
}

