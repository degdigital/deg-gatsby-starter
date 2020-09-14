import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ pageTitle, siteTitle, description, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  );
  const metaSiteTitle = siteTitle || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.lang
      }}
      title={pageTitle}
      titleTemplate={`%s | ${metaSiteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaSiteTitle || metaDescription
        },
        {
          property: `og:title`,
          content: pageTitle
        },
        {
          property: `og:description`,
          content: siteTitle || metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: pageTitle
        },
        {
          name: `twitter:description`,
          content: metaSiteTitle || metaDescription
        }
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  meta: [],
};

SEO.propTypes = {
  pageTitle: PropTypes.string,
  siteTitle: PropTypes.string,
  description: PropTypes.string
};

export default SEO;
