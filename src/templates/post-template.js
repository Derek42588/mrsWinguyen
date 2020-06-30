import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data: post }) => {

  return (
    <Layout>
      <div className="BlogPost">
        <h1 className="BlogPost__title">
          {post.markdownRemark.frontmatter.title}
        </h1>
        <figure className="BlogPost__image-box">
          <img
            src={require(`../images/blogPics/${post.markdownRemark.frontmatter.fullImageName}.jpg`)}
            alt={post.markdownRemark.frontmatter.fullImageAlt}
            className="BlogPost__image-box__header-image"
          />
        </figure>
        <h3 className="BlogPost__subtitle">
          {post.markdownRemark.frontmatter.subtitle}
        </h3>
        <div
          className="BlogPost__main"
          dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}
        />
        <Link className="BlogPost__button" to="/blog">
          <button className="button button--BlogPostPage">More Posts</button>
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        subtitle
        fullImageName
        fullImageAlt
      }
    }
  }
`
