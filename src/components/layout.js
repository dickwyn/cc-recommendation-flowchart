import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';

import Header from './header';
import './layout.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: {
      main: '#b9f6ca',
    },
  },
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="content-container">{children}</div>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
