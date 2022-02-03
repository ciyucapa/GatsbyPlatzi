import {graphql, useStaticQuery} from 'gatsby';

export const GET_IMAGEN = useStaticQuery(
    graphql`
        query GET_IMAGEN{
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