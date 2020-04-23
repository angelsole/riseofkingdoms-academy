import { Link } from "gatsby"
import { Grid } from '@material-ui/core';
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Container } from "../layoutComponents"
import Logo from '../logo';
import NavBar from '../navBar';


const DesktopHeader = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <Grid
        container
        spacing={1}
        alignItems="center"
      >
        <Grid item sm={8}>
          <Link to="/">
            <Grid
              container
              spacing={1}
              alignItems="center"
            >
              <Grid item sm={2}>
                <Logo />
              </Grid>
              <Grid item sm={10}>
                <h1>{siteTitle}</h1>
              </Grid>
            </Grid>
          </Link>
        </Grid>
        <Grid item sm={4}>
          <NavBar />
        </Grid>
      </Grid>
    </Container>
  </header>
)

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
}

DesktopHeader.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled(DesktopHeader)`
  color: var(--primary-color);
  background: var(--white);
  padding: 1rem 0;
  margin-bottom: 1rem;
  box-shadow: 0px 0.5px 5px 0px #f4f4f4;
  h1 {
    font-size: 1rem;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  a {
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`

export default StyledHeader
