// loader.js
export default function customLoader({ src, width, quality }) {
  // Assuming 'src' is the path relative to the public directory
  return `/${src}`;
}
