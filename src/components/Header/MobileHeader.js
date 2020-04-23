
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
  font-size: 1rem !important;
`;

const MobileHeader = ({ menuOptions, siteTitle }) => {

  const [isOpenDrawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!isOpenDrawer);
  }
  return (
    <AppBar
      position="static"
      style={{
        background: 'var(--white)',
        color: 'var(--primary-color)'
      }}
    >
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
                <ListItem
                  key={id}
                >
                  {name}
                </ListItem>
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