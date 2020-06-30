/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Shelf from "./Shelf"
import "../css/style.css"

const Layout = ({ children }) => {

  const [showShelf, setShowShelf] = useState(false)

  function toggleShelf() {
    setShowShelf(!showShelf)
  }
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className = "Layout">
      <Header toggleShelf={toggleShelf}/>
      <Shelf shelfVisible={showShelf} toggleShelf={toggleShelf} />
      <div
        className={'backdrop' + (showShelf ? ' visible' : '')}
        onClick={() => toggleShelf()}
      />
        <main className = "Main">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
