import React from "react";
import {graphql} from "gatsby";

import {SEO, Jumbo} from "../components";
import Products from "../components/Products";
import priceFormat from '../utils/priceFormat';
import ImageComponente from '../components/image';

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
const IndexPage = ({data}) =>  (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}>
      <ImageComponente name="icon" />
    </Jumbo>
    <Products edges={data.allStripeSku.edges} priceFormat={priceFormat} />
  </>
)

export default IndexPage;
