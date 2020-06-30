/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem")

const PostTemplate = path.resolve("./src/templates/post-template.js")
const BlogTemplate = path.resolve("./src/templates/blog-template.js")
const ProductTemplate = path.resolve("./src/templates/product-template.js")
// const ProductTemplate = path.resolve("./src/templates/product-template.js")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //allows us to easily request all our markdown data
  const result = await graphql(`
    {
 
      
  allContentfulProductNew{
    totalCount
    edges{
      node{
        slug
        }
      }
    }

    }
  `)

  const products = result.data.allContentfulProductNew.edges

  products.forEach(({ node: product }) => {
    createPage({
      path: `/products/${product.slug}`,
      component: ProductTemplate,
      context: {
        slug: product.slug,
      }
    })
  })

}

