import React from "react"
import { Link } from "gatsby"
import IconTags from "../assets/price-tags.svg"
import Img from "gatsby-image"

const ProductSnippet = ({ product }) => {
  //     <div className="ProductsPage__products">
  //     {allContentfulProductNew.edges.map(({node: product}) => (
  //         <div className = "ProductsPage__products__product-box" key = {product.id}>
  //             <Link className = "ProductsPage__products__product-box__link" to={`/products/${product.slug}`}>
  //             <h3 className = "ProductsPage__products__product-box__title"> {product.name}</h3>
  //             </Link>
  //             <div className = "ProductsPage__products__product-box__image-box">
  //             <Img className = "ProductsPage__products__product-box__image-box__image"
  //             fluid = {product.imageList[0].fluid}
  //             alt = {product.description}
  //             />
  //             </div>
  //         </div>
  //     ))}
  //     </div>
  // </div>
  //   const tags = post.frontmatter.tags.join(', ')
    // let snippetString = product.description.substring(0,200) + "..."
  return (
    <Link to={`/products/${product.slug}`} className="ProductSnippet">
      <figure className="ProductSnippet__image-box">
        <Img
          className="ProductSnippet__image-box__image"
          fluid={product.imageList[0].fluid}
          // alt={product.description}
        />
      </figure>
      {/* <div className="ProductSnippet__tags">general, etc, butts</div> */}
      <h2 className="ProductSnippet__title">{product.name}</h2>
      <span className="ProductSnippet__price">${product.price}</span>

      {/* <div className="ProductSnippet__tag-box">
        <IconTags className="ProductSnippet__tag-box__icon" />
        <div className="ProductSnippet__tag-box__tags">{tags}</div>
      </div> */}
      {/* <p className="ProductSnippet__blurb">{snippetString}</p> */}
    </Link>
  )
}

export default ProductSnippet
