import React from "react";
import { Link, graphql } from "gatsby";

import Jumbo from '../components/Jumbo';
import {SEO} from "../components";
import Products from "../components/Products";

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
  },
  allStripeSku {
    edges {
      node {
        id
        price
        image
        product {
          name
          metadata {
            description
            img
            wear
          }
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  console.log("data:", data)
  return (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <Products edges={data.allStripeSku.edges} />
    <Link to="/gracias/">Go to gracias</Link>
  </>
)}

export default IndexPage;
