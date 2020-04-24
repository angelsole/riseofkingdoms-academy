import React from "react"
import { Grid } from '@material-ui/core';
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import Hero from '../components/Hero';
// import Hotlink from '../components/Hotlink';

const IndexPage = () => (
  <Layout>
    <SEO title="Rise of Kingdoms Academy" keywords={[`guías`, `tutoriales`, `rise of kingdoms`]} />
    <Hero />
    <Container>
      <Grid
        container
        spacing={1}
        alignItems="center"
      >
        {/* <Hotlink /> */}
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
      </Grid>
    </Container>
  </Layout>
)

export default IndexPage
