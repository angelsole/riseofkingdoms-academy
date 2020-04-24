import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Button, Grid } from '@material-ui/core';


const Container = styled.div`
  position: relative;
`

const TextWrapper = styled.div`
  background: #0000007a;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  @media (max-width: 1200px) {
    padding: 20px;
  }
`
const HeroTitle = styled.h1`
  font-size: 2rem;
  color: white;
`

const StyledButton = styled(props => <Button {...props} />)`
  color: white !important;
  border-color: white !important;
  margin-right: 10px;
  margin-bottom: 20px;
`

const StyledImage = styled(props => <Img {...props} />)`
  @media (max-width: 980px) {
    height: 60vh;
  }
`

const Hero = ({ className }) => (
  <section className={className}>
    <Container>
      <StaticQuery
        query={graphql`
          query {
            heroImage: file(relativePath: { eq: "hero.png" }) {
              childImageSharp {
                fluid(maxWidth: 1900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <StyledImage fluid={data.heroImage.childImageSharp.fluid} />}
      />
      <TextWrapper>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justify="center"
        >
          <Grid item sm={12}>
            <HeroTitle>Creado por y para jugadores</HeroTitle>
          </Grid>
          <Grid item sm={12}>
            <StyledButton variant="outlined">Ver guías esenciales</StyledButton>
            <StyledButton variant="outlined">Blog de novedades</StyledButton>
          </Grid>
        </Grid>
      </TextWrapper>
    </Container>
  </section>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

const StyledHero = styled(Hero)`
  color: var(--primary-color);
`

export default StyledHero;
