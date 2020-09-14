const generateConfig = require('./lib/configGenerator');

const settings = {
  title: `DEG Gatsby Starter`,
  shortName: `DEG`,
  description: `A Gatsby starter preconfigured for DEG UI-App's processes, tooling and best practices`,
  author: `@DEGdigital`,
  lang: `en-US`,
  backgroundColor: `#0080c7`,
  themeColor: `#0080c7`,
  faviconPath: `src/images/favicon.png`,
  imagesPath: `${__dirname}/src/images`,
  googleAnalyticsId: null,
  googleTagManagerId: null,
  googleFonts: [
    {
      family: `Open Sans`,
      variants: [`400`, `700`]
    }
  ],
  contentfulSpaceId: null,
  contentfulAccessToken: null,
  netlify: false
};

module.exports = generateConfig(settings);
