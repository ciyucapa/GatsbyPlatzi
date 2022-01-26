import React from "react";
import { Link, graphql } from "gatsby";

import Jumbo from '../components/Jumbo';
import {SEO} from "../components";
import {Button} from '../components/styledComponents'

export const query = graphql`
query GET_DESCRIPTION {
  allSite {
    edges {
      node {
        siteMetadata {
          description
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <Button color="white">Comprar</Button>
    <Link to="/gracias/">Go to gracias</Link>
  </>
)

export default IndexPage;
