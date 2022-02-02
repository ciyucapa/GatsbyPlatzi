const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const productTemplate = path.resolve(`src/templates/Product.js`)
    const result = await graphql(`
        query GET_SKUS {
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
                                color
                            }
                        }
                    }
                }
            }
        }`)
    
    if(result.errors) {
        throw result.errors
    }

    result.data.allStripeSku.edges.forEach(({node}) => {
        createPage({
            path: `${node.id}`,
            component: productTemplate,
            context: node
        })
    })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
      actions.setWebpackConfig({
        resolve: {
          alias: {
            "react-dom": "@hot-loader/react-dom",
          },
        },
      })
    }
  }