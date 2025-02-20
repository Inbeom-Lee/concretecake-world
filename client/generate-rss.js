const RSS = require("rss");
const { writeFileSync } = require("fs");

const feed = new RSS({
  title: "Concrete Cake",
  description: "Concrete Cake",
  feed_url: "https://concretecake.se/rss.xml",
  site_url: "https://concretecake.se",
  image_url: "https://concretecake.se/logo.png",
  managingEditor: "Dev ConcreteCake",
  webMaster: "Dev ConcreteCake",
  copyright: "2024 ConcreteCake",
  language: "en",
  pubDate: new Date().toString(),
  ttl: "60",
});

const articles = [];

if (articles.length > 0) {
  articles.forEach((article) => {
    feed.item({
      title: article.title,
      description: article.description,
      url: article.url,
      author: article.author,
      date: article.date,
    });
  });
} else {
  console.log("No articles to add to the RSS feed");
}

const rssOutput = feed.xml({ indent: true });
writeFileSync("./public/rss.xml", rssOutput);

console.log("RSS feed generated successfully");
