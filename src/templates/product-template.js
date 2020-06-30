import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const ProductTemplate = ({ data: { contentfulProductNew }, location }) => {

  return (
    <Layout>
      <div className="ProductPage">
        <div className = "ProductPage__product-box">
        <h2 className="ProductPage__product-box__title">{contentfulProductNew.name}</h2>
        <span className = "ProductsPage__products__product-box__price"> ${contentfulProductNew.price}</span>
        <p className="ProductPage__product-box__desc">{contentfulProductNew.description}</p>
        {contentfulProductNew.imageList.map(image =>
        <div key = {image.file.url} className="ProductPage__product-box__img-box">
          <Img className="ProductPage__product-box__img-box__image"fluid = {image.fluid} />
          </div>
          
          )}
          <button
          className = "snipcart-add-item"
          data-item-id = {contentfulProductNew.id}
          data-item-price = {contentfulProductNew.price}
          data-item-image = {contentfulProductNew.imageList[0].file.url}
          data-item-name = {contentfulProductNew.name}
          data-item-url = {location.pathname}
          >Add to Cart</button>
          </div>
        </div>
    </Layout>
  )
}


export const query = graphql`
query($slug: String!)  {
    contentfulProductNew(slug: {eq: $slug}) {
      id
      name
      slug
      price
      description
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
`

export default ProductTemplate