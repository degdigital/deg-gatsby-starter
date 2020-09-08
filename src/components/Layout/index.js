import React from 'react';
import PropTypes from 'prop-types';
import { SVGSprite, Header } from '@components';
import '@css/app.css';

const Layout = ({ children }) => (
  <>
    <SVGSprite />
    <Header />
    <main className="site-main" role="main">
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
