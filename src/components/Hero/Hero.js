import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from '@material-ui/core/Button';


const Container = styled.div`
  position: relative;
`

const TextWrapper = styled.div`
  background: #0000007a;
  height: 100%;
  left: 50%;
  padding: 60vh 40px 0 40px;
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
        render={data => <Img fluid={data.heroImage.childImageSharp.fluid} />}
      />
      <TextWrapper>
        <HeroTitle>Creado por y para jugadores</HeroTitle>
        <StyledButton variant="outlined">Ver guías esenciales</StyledButton>
        <StyledButton variant="outlined">Blog de novedades</StyledButton>
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
