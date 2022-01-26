import React from "react";
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

const ImageComponente = (props) => {
    
    const data = useStaticQuery(
        graphql`
            query GET_IMAGE{
                icon: file(relativePath: {eq: "icon.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }   
                }
            }
        `
    );
    
    return(
        <Img fluid={data[props.name].childImageSharp.fluid}/>
    );
};

export default ImageComponente;