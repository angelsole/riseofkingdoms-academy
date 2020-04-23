
import React from "react"
import { Link } from "gatsby";
import { Grid } from '@material-ui/core';
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--primary-color);
  margin-right: 20px;
  text-decoration: none;
`;
const NavBarContainer = styled.div`
  padding-right: 20px;
  flex: 1;
`

const NavBar = () => (
  <NavBarContainer>
    <Grid
      container
      spacing={1}
      justify="flex-end"
      alignItems="center"
    >
      <StyledLink to="/item1">
        item 1
      </StyledLink>
      <StyledLink to="/item1">
        item 2
      </StyledLink>
      <StyledLink to="/item1">
        item 3
      </StyledLink>
    </Grid>
  </NavBarContainer>
)

export default NavBar;