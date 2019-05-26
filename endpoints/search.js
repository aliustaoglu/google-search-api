const fetch = require('node-fetch');
const Crawler = require('crawler');
const crawler = new Crawler({
  maxConnections: 20
});

const getCrawler = uri =>
  new Promise((resolve, reject) => {
    crawler.queue([
      {
        uri,
        jQuery: 'cheerio',
        callback: function(error, crawlResponse, done) {
          const $ = crawlResponse.$;
          if (error) {
            reject(error);
          } else {
            resolve(crawlResponse);
          }
          done();
        }
      }
    ]);
  });

const getSearch = async (req, res, next) => {
  let result = [];
  const { q } = req.query;
  const query = `https://www.google.com/search?q=${q}`;
  const searchCrawl = await getCrawler(query);
  const $ = searchCrawl.$;
  $('a').each((ind, val) => {
    let link = $(val).attr('href');
    if (link.startsWith('/url')) {
      const text = $(val.parent.parent.children[2])
        .contents()
        .text();
      link = link.replace('/url?q=', '')
      link = link.substring(0, link.indexOf('&'));
      result.push({ link, text });
    }
  });

  res.json(result);
};

module.exports = {
  getSearch
};
