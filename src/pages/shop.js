import React from "react"

import { graphql, Link } from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import ProductSnippet from "../components/product-snippet"

const Products = ({ data: { allContentfulProduct} }) => (
  <Layout>
    <div className="ProductsPage">
      <h2 className="ProductsPage__title">Products</h2>

      <div className="ProductsPage__products">
        {allContentfulProduct.edges.map(({ node: product }) => (
          // <div className = "ProductsPage__products__product-box" key = {product.id}>
          //     <Link className = "ProductsPage__products__product-box__link" to={`/products/${product.slug}`}>
          //     <h3 className = "ProductsPage__products__product-box__title"> {product.name}</h3>
          //     </Link>
          //     <div className = "ProductsPage__products__product-box__image-box">
          //     <Img className = "ProductsPage__products__product-box__image-box__image"
          //     fluid = {product.imageList[0].fluid}
          //     alt = {product.description}
          //     />
          //     </div>
          // </div>
          <ProductSnippet key={product.id} product={product} />
        ))}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          name
          price
          slug
          imageList {
            fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid
            }
              file {
                  url
              }
          }
        }
      }
    }
  }
`

export default Products
