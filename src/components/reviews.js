import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Reviews = () => {
  const { firstReview, secondReview, thirdReview } = useStaticQuery(
    graphql`
      query {
        firstReview: file(relativePath: { eq: "reviews-1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        secondReview: file(relativePath: { eq: "reviews-2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        thirdReview: file(relativePath: { eq: "reviews-3.jpg" }) {
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
    <div className="Reviews">
      <div className="Reviews__review-box">
      <Img
            fluid={firstReview.childImageSharp.fluid}
            alt="Review Pic - Perla"
            className="background-image circle"
          />
          <div className="Reviews__review-box__review">
        <span className="Reviews__review-box__review__reviewer">Perla</span>
        <span className="Reviews__review-box__review__quote">
          "I absolutely love this handcrafted bag! I love the pattern and
          attention to detail. The material feels strong and durable and the bag
          is the perfect size."
        </span>
        </div>
      </div>
      <div className="Reviews__review-box">
      <Img
            fluid={secondReview.childImageSharp.fluid}
            alt="Review Pic - Amanda"
            className="background-image circle"
          />
          <div className="Reviews__review-box__review">
        <span className="Reviews__review-box__review__reviewer">Amanda</span>
        <span className="Reviews__review-box__review__quote">
          "This bag is even more beautiful in person! I am so happy with how
          this came out, it is flawless! She pays such great attention to detail
          and it shows in her work. I can’t wait to use it and will definitely
          be ordering other personalized items from her! Highly recommended!"
        </span>
        </div>
      </div>
      <div className="Reviews__review-box">
      <Img
            fluid={thirdReview.childImageSharp.fluid}
            alt="Review Pic - Victoria"
            className="background-image circle"
          />
          <div className="Reviews__review-box__review">
        <span className="Reviews__review-box__review__reviewer">Victoria</span>
        <span className="Reviews__review-box__review__quote">
          "Omg it is sooo cute! Very well made and exactly what I wanted! I can’t wait to use it!"
        </span>
        </div>
      </div>
      {/* <div className="Reviews__review-box">
        <span className="Reviews__review-box__reviewer">Amanda</span>
        <span className="Reviews__review-box__review">
          "This bag is even more beautiful in person! I am so happy with how
          this came out, it is flawless! She pays such great attention to detail
          and it shows in her work. I can’t wait to use it and will definitely
          be ordering other personalized items from her! Highly recommended!"
        </span>
      </div>
      <div className="Reviews__review-box">
        <span className="Reviews__review-box__reviewer">Tracy</span>
        <span className="Reviews__review-box__review">
          "I love this bag! Outstanding quality and so cute! Exactly what I
          requested :) "
        </span>
      </div> */}
    </div>
  )
}

export default Reviews
