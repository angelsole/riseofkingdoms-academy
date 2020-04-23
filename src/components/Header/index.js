

import React from "react"
import { Hidden } from '@material-ui/core';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

import menuOptions from '../../utils/menuOptions';


const Header = ({ siteTitle }) => (
  <>
    <Hidden smDown>
      <DesktopHeader
      siteTitle={siteTitle}
      menuOptions={menuOptions}
      />
    </Hidden>
    <Hidden mdUp>
      <MobileHeader
        siteTitle={siteTitle}
        menuOptions={menuOptions}
      />
    </Hidden>
  </>
)

export default Header;
