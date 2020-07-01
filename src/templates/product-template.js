import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const ProductTemplate = ({ data: { contentfulProduct}, location }) => {

  // const { testTest } = contentfulProductNew

  const { patternDropdownOptions, materialDropdownOptions, tags } = contentfulProduct
  const tagsArray = tags.childMarkdownRemark.html.split("<p>").join("").split("</p>").join("").split("|")
  const materialsString = materialDropdownOptions.childMarkdownRemark.html.split("<p>").join("").split("</p>").join("")
  const patternsString = patternDropdownOptions.childMarkdownRemark.html.split("<p>").join("").split("</p>").join("")
  return (
    <Layout>
      <div className="ProductPage">
        <div className = "ProductPage__product-box">
        <h2 className="ProductPage__product-box__title">{contentfulProduct.name}</h2>
        <div
            className="ProductPage__product-box__subtitle"
            dangerouslySetInnerHTML={{ __html: contentfulProduct.shortDesc.childMarkdownRemark.html }}
          />
          <span>
            {
              tagsArray.map(tag => 
                <span id = {tag}>{tag}{" "}</span>
              )
            }
          </span>
        <span className = "ProductPage__product-box__price"> ${contentfulProduct.price}</span>
        {/* <p className="ProductPage__product-box__desc">{contentfulProductNew.description}</p> */}
        <div className = "ProductPage__product-box__gallery">
        {contentfulProduct.imageList.map(image =>
        <div key = {image.file.url} className="ProductPage__product-box__gallery__img-box">
          <Img className="ProductPage__product-box__gallery__img-box__image"fluid = {image.fluid} />
          </div>
          
          )}
</div>
<div
            
            dangerouslySetInnerHTML={{ __html: contentfulProduct.longDesc.childMarkdownRemark.html }}
          /> 
          {/* {
            testTest ? 
            <div
            className="BlogPost__main"
            dangerouslySetInnerHTML={{ __html: testTest.childMarkdownRemark.html }}
          /> :
          null
          } */}
          {
            contentfulProduct.patternDropdown
            ?
            <button
            className = "snipcart-add-item product-button"
            data-item-id = {contentfulProduct.id}
            data-item-price = {contentfulProduct.price}
            data-item-image = {contentfulProduct.imageList[0].file.url}
            data-item-name = {contentfulProduct.name}
            data-item-url = {location.pathname}
            data-item-custom1-name="Pattern"
            data-item-custom1-options={patternsString}
            data-item-custom2-name="Material"
            data-item-custom2-options={materialsString}
            data-item-custom3-name="Customization"
  data-item-custom3-type="textarea">
            
            Add to Cart</button>
            :
          <button
          className = "snipcart-add-item product-button"
          data-item-id = {contentfulProduct.id}
          data-item-price = {contentfulProduct.price}
          data-item-image = {contentfulProduct.imageList[0].file.url}
          data-item-name = {contentfulProduct.name}
          data-item-url = {location.pathname}
          >Add to Cart</button>
        }
          </div>
        </div>
    </Layout>
  )
}


export const query = graphql`
query($slug: String!)  {
    contentfulProduct(slug: {eq: $slug}) {
      id
      name
      slug
      price
      imageList {
          fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
          }

          file {
              url
          }
      }
      shortDesc {
        childMarkdownRemark {
          html
        }
      }
      longDesc {
        childMarkdownRemark {
          html
        }
      }
      tags {
        childMarkdownRemark {
          html
        }
      }
      customizationDropdown
      materialDropdown
      offersPersonalization
      patternDropdown
      materialDropdownOptions {
        childMarkdownRemark {
          html
        }
      }
      patternDropdownOptions {
        childMarkdownRemark {
          html
        }
      }
      customizationDropdownOptions{
        childMarkdownRemark{
          html
        }
      }

    }
  }
`

export default ProductTemplate