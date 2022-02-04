import React from "react";
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

const ImageComponente = () => {
    const data = useStaticQuery(
        graphql`
            query GET_IMAGE{
                file(relativePath: {eq: "icon.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }   
                }
            }
        `
    );
    return <Img fluid={data?.file?.childImageSharp?.fluid}/>
};

export default ImageComponente;