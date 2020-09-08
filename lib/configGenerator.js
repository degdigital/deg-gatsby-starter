module.exports = settings => {
  const config = {
    siteMetadata: {
      title: settings.title,
      description: settings.description,
      author: settings.author,
      lang: settings.lang
    },
    plugins: [
      {
        resolve: `gatsby-plugin-alias-imports`,
        options: {
          alias: {
            '@components': 'src/components/',
            '@css': 'src/css',
            '@hooks': 'src/hooks/',
            '@images': 'src/images/',
            '@pages': 'src/pages/',
            '@src': 'src/',
            '@templates': 'src/templates/'
          },
          extensions: ['js', 'svg']
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: settings.title,
          short_name: settings.shortName,
          start_url: `/`,
          background_color: settings.backgroundColor,
          theme_color: settings.backgroundColor,
          display: `minimal-ui`,
          icon: settings.faviconPath
        }
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: settings.imagesPath
        }
      },
      `gatsby-transformer-sharp`
    ]
  };

  const conditionallyAddToConfig = (setting = null, content = null) => {
    if (setting) {
      config.plugins.push(content);
    }
  };

  conditionallyAddToConfig(settings.googleAnalyticsId, {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: settings.googleAnalyticsId
    }
  });

  conditionallyAddToConfig(settings.googleTagManagerId, {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: settings.googleTagManagerId,
      includeInDevelopment: false,
      defaultDataLayer: { platform: 'gatsby' }
    }
  });

  conditionallyAddToConfig(settings.googleFonts, {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: settings.googleFonts
    }
  });

  conditionallyAddToConfig(settings.netlify, `gatsby-plugin-netlify`);

  conditionallyAddToConfig(settings.contentfulAccessToken, {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: settings.contentfulSpaceId,
      accessToken: settings.contentfulAccessToken
    }
  });

  return config;
};
