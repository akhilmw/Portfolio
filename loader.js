// loader.js
const customImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  
  export default customImageLoader;
  