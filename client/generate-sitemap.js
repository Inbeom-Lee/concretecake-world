const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://concretecake.se" });

  const links = [
    { url: "/", changefreq: "never", priority: 1.0 },
    { url: "/about", changefreq: "never", priority: 1.0 },
    { url: "/product", changefreq: "never", priority: 1.0 },
  ];

  links.forEach((link) => sitemap.write(link));

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  createWriteStream("./public/sitemap.xml").write(sitemapOutput.toString());
}

generateSitemap().catch(console.error);
