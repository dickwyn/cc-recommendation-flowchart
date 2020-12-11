import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const Header = ({ siteTitle }) => (
  <div style={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <p style={{ flexGrow: 1, margin: 0 }}>{siteTitle}</p>
        <Button variant="outlined" target="_blank" href="https://www.reddit.com/r/churning/">
          /churning
          <OpenInNewIcon />
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
