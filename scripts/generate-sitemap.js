const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
    
    <url>
      <loc>https://mucotresor.com/</loc>
      <lastmod>2020-06-27T10:59:26+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://mucotresor.com/blog</loc>
      <lastmod>2020-06-27T10:59:26+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://mucotresor.com/about</loc>
      <lastmod>2020-06-27T10:59:26+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://mucotresor.com/blog/inspire-me-episode-1-meet-a-teen-burundian-developer</loc>
      <lastmod>2020-06-27T10:59:26+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://mucotresor.com/blog/teach-your-self-touch-typing</loc>
      <lastmod>2020-06-27T10:59:26+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    
    
    </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html'
    });

    // eslint-disable-next-line no-sync
    fs.writeFileSync('public/sitemap.xml', formatted);
})();
