/**
 * Image optimization helpers for fast previews and crisp full-resolution displays.
 * Automatically leverages Cloudinary CDN transformations and Unsplash parameters.
 */

export function getPreviewImageUrl(url: string): string {
  if (!url) return '';

  if (url.includes('res.cloudinary.com')) {
    // Inject lightweight thumbnail transformation: width 900px, auto format, auto compression
    return url.replace(
      /\/image\/upload\/(?:w_\d+[^/]*\/)?/,
      '/image/upload/w_900,c_limit,f_auto,q_auto/'
    );
  }

  if (url.includes('images.unsplash.com')) {
    const cleanUrl = url.split('?')[0];
    return `${cleanUrl}?w=900&auto=format&fit=max&q=75`;
  }

  return url;
}

export function getFullResImageUrl(url: string): string {
  if (!url) return '';

  if (url.includes('res.cloudinary.com')) {
    // Deliver pristine 2400px ultra high-res image for fullscreen viewer
    return url.replace(
      /\/image\/upload\/(?:w_\d+[^/]*\/)?/,
      '/image/upload/w_2400,c_limit,f_auto,q_auto/'
    );
  }

  if (url.includes('images.unsplash.com')) {
    const cleanUrl = url.split('?')[0];
    return `${cleanUrl}?w=2400&auto=format&fit=max&q=90`;
  }

  return url;
}

