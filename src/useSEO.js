import { useEffect } from 'react';

const SITE_URL = 'https://tuautomatizado.com';
const DEFAULT_IMAGE = `${SITE_URL}/img/logo.jpg`;

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Updates document title, meta description/keywords, canonical and
 * Open Graph/Twitter tags per route. Needed because the site is an SPA:
 * without this every route would share the home page's <title>/<meta>,
 * which flattens all sub-pages into one indexable document for Google.
 */
export default function useSEO({ title, description, keywords, path = '/', image, structuredData }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta('name', 'title', title);
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    const url = `${SITE_URL}${path}`;
    setLink('canonical', url);

    setMeta('property', 'og:url', url);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image || DEFAULT_IMAGE);

    setMeta('name', 'twitter:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image || DEFAULT_IMAGE);

    let script = document.getElementById('route-structured-data');
    if (structuredData) {
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'route-structured-data';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    } else if (script) {
      script.remove();
    }
  }, [title, description, keywords, path, image, structuredData]);
}
