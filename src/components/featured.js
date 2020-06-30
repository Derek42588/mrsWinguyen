import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Featured = () => {
  const { first, second, third } = useStaticQuery(
    graphql`
      query {
        first: file(relativePath: { eq: "featured-1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        second: file(relativePath: { eq: "featured-2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        third: file(relativePath: { eq: "featured-3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div className="Featured">
      <h1 className="Featured__title">Featured Items</h1>
      <div className="Featured__gallery">
        <div className="Featured__gallery__image-box">
          <Img
            fluid={first.childImageSharp.fluid}
            alt="Featured Pic - 1"
            className="Featured__gallery__image-box__image"
          />
                    <div className="Featured__gallery__image-box__description">

            <span>$35.00</span>
            <span>Personalized Zipper Pouch</span>
            </div>
        </div>
        <div className="Featured__gallery__image-box">
          <Img
            fluid={second.childImageSharp.fluid}
            alt="Featured Pic - 1"
            className="Featured__gallery__image-box__image"
          />
          <div className="Featured__gallery__image-box__description">
            <span>$35.00</span>
            <span>Personalized Dip Dye Zipper Pouch</span>
            </div>
        </div>
        <div className="Featured__gallery__image-box">
          <Img
            fluid={third.childImageSharp.fluid}
            alt="Featured Pic - 1"
            className="Featured__gallery__image-box__image"
          />
                              <div className="Featured__gallery__image-box__description">

            <span>$35.00</span>
            <span>Hummingbird Leather Pouch</span>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Featured
