
import React, { useState } from "react"
import styled from "styled-components"
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Grid,
  Drawer,
  List,
  ListItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../logo';

const StyledMaterialTitle = styled(props => <Typography {...props} />)`
  font-family: 'SpaceRanger' !important;
  font-size: 1rem !important;
`;
const StyledMaterialItem = styled(props => <ListItem {...props} />)`
  font-family: 'SpaceRanger' !important;
`;

const MobileHeader = ({ menuOptions, siteTitle }) => {

  const [isOpenDrawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!isOpenDrawer);
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
            container
            spacing={2}
            alignItems="center"
            justify="space-between"
          >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={isOpenDrawer}
            onClose={toggleDrawer}
          >
            <List>
              {menuOptions.map(({ id, name }) => (
                <StyledMaterialItem
                  key={id}
                >
                  {name}
                </StyledMaterialItem>
              ))}
            </List>
            </Drawer>
              <StyledMaterialTitle variant="h6">{siteTitle}</StyledMaterialTitle>
          <Logo />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default MobileHeader;