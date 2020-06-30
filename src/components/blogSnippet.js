import React from "react"
import { Link } from "gatsby"
import IconTags from "../assets/price-tags.svg"


const BlogSnippet = ({ post }) => {
  const tags = post.frontmatter.tags.join(', ')
  let snippetString = post.frontmatter.snippetText.substring(0,200) + "..."
  return (
    <Link to = {`/posts${post.fields.slug}`}  className="BlogSnippet">   

      <figure className="BlogSnippet__image-box">
        <img
          className="BlogSnippet__image-box__image"
          src={require(`../images/blogPics/${post.frontmatter.snippetImageName}.jpg`)}
        />
      </figure>
      {/* <div className="BlogSnippet__tags">general, etc, butts</div> */}
      <h2 className="BlogSnippet__title">
        {post.frontmatter.title}
        </h2>
        <h4 className="BlogSnippet__date italics">{post.frontmatter.date}</h4>
 
      <div className = "BlogSnippet__tag-box">

      <IconTags className = "BlogSnippet__tag-box__icon" />
      <div className = "BlogSnippet__tag-box__tags">
      {tags}
      </div>
      </div>
      <p className="BlogSnippet__blurb">
       {snippetString}
      </p>

    </Link>
  )
}

export default BlogSnippet
