import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';

// const StyledImage = styled(props => <Img {...props} />)`
//   @media (max-width: 980px) {
//     height: 60vh;
//   }
// `

const Hotlink = ({ className }) => (
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <p gutterBottom variant="h5" component="h2">
            Lizard
          </p>
          <p variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

const StyledHotlink = styled(Hotlink)`
  color: var(--primary-color);
`

export default StyledHotlink;
