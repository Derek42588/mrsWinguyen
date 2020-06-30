import React from "react"
import {  graphql, Link } from "gatsby"

import Layout from "../components/layout"
import BlogSnippet from '../components/blogSnippet'

export default ( { data, pageContext }) => {

  const { currentPage, isFirstPage, isLastPage, totalPages} = pageContext
  const nextPage = `/blog/${String(currentPage +1)}`
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage -1)}`
return (
  <Layout>
    <div className = "Blog">
      <h1 className = "Blog__title italics">
        Code Every Day
      </h1>
   
            <h4 className = "Blog__postCount">{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogSnippet key={node.id} post = {node}/>
              // <div key={node.id}>
              //   <h3>
              //     <Link to = {`/posts${node.fields.slug}`}>{node.frontmatter.title}</Link>{" "}
              //     <span style={{ color: "#bbb" }}>
              //       - {node.frontmatter.date}
              //     </span>
              //   </h3>
              //   <p>{node.excerpt}</p>
              //   <img className = "providerImage" src = {require(`../images/${node.frontmatter.snippetImageName}.png`)}/>
              // </div>
            ))}
    </div>
    {/* Pagination Links */}
    <div className = "BlogFooter">
      <span className="BlogFooter__item italics">More</span>
      {!isFirstPage && (
        <Link to ={prevPage} rel= "prev" className="BlogFooter__item">Prev Page</Link>
      )}
      {` `}
      {Array.from({ length: totalPages}, (_, index) => (
        <Link key = {index} to = {`/blog/${index === 0 ? "": index +1}`} className="BlogFooter__item">
          {index +1}
        </Link>
      ))}
      {!isLastPage && (
        <Link to = {nextPage} rel="next" className="BlogFooter__item">Next Page</Link>
      )}
      </div>       
  </Layout>
  
  )}

export const query = graphql`
  query($skip: Int!, $limit: Int!){
    allMarkdownRemark(
      skip: $skip
      limit: $limit
     sort: {order: DESC, fields: [frontmatter___date]}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString:"MMMM Do, YYYY")
            snippetImageName
            tags
            snippetText
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`