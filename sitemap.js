const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const hostname = 'https://webies-media.com';

const routes = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/development', changefreq: 'monthly', priority: 0.8 },
  { url: '/seo', changefreq: 'monthly', priority: 0.8 },
  { url: '/maintenance', changefreq: 'monthly', priority: 0.8 },
  { url: '/social', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs as needed
];

const stream = new SitemapStream({ hostname });

// Convert routes to a Readable stream and pipe it to the sitemap stream
const sitemapPromise = streamToPromise(Readable.from(routes).pipe(stream));

sitemapPromise
  .then((sitemap) => {
    const writeStream = createWriteStream('./public/sitemap.xml');
    writeStream.write(sitemap.toString());
    writeStream.end();
  })
  .catch((error) => {
    console.error(error);
  });
