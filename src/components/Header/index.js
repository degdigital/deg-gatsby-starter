import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className="site-header" role="banner">
      <div className="page-wrapper">
        <h1 className="site-title">{data.site.siteMetadata.title}</h1>
      </div>
    </header>
  );
};

export default Header;
