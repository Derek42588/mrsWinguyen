import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

// import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Featured = () => {
  const { totes, pouches, cards } = useStaticQuery(
    graphql`
      query {
        totes: file(relativePath: { eq: "featured-totes.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        pouches: file(relativePath: { eq: "featured-pouches.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        cards: file(relativePath: { eq: "featured-cards.jpg" }) {
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
      <div className="Featured__gallery">
        <Link to="/shop" className="Featured__gallery__image-box">
          <BackgroundImage
            fluid={totes.childImageSharp.fluid}
            alt="Featured Pic - Totes"
            className="background-image"
          />
          <div className="content">
            <h1 className="title">Totes</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </Link>
        <Link to="/shop" className="Featured__gallery__image-box">
          <BackgroundImage
            fluid={pouches.childImageSharp.fluid}
            alt="Featured Pic - Pouches"
            className="background-image"
          />
          <div className="content">
            <h1 className="title">Pouches</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </Link>
        <Link to="/shop" className="Featured__gallery__image-box">
          <BackgroundImage
            fluid={cards.childImageSharp.fluid}
            alt="Featured Pic - Cards"
            className="background-image"
          />
          <div className="content">
            <h1 className="title">Cards</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Featured
