import { Link, graphql } from "gatsby"

import React from "react"

import IconGithub from "../assets/github.svg"
import IconPDF from "../assets/file-pdf.svg"
import IconPhone from "../assets/mobile.svg"
import IconEmail from "../assets/mail4.svg"

import resume from "../media/DCP Resume 6420.pdf"

const Header = ({ toggleShelf }) => (
  <div className="NavBar">
    <ul className="NavBar__nav">
      <li className="NavBar__nav__item NavBar__nav__item--full">
        <Link to="/" className="NavBar__nav__item__link">
          Home
        </Link>
      </li>
      <li className="NavBar__nav__item NavBar__nav__item--full">
        <Link to="/shop" className="NavBar__nav__item__link">
          Shop
        </Link>
      </li>
      <li
        className="NavBar__nav__item NavBar__nav__item--mobile"
        onClick={() => toggleShelf()}
      >
        <span className="NavBar__nav__item__icon">&nbsp;</span>
      </li>
      <li className="NavBar__nav__item NavBar__nav__item--full snipcart-summary snipcart-checkout">
        <span className="NavBar__nav__item__span">
        Cart
        </span>
      </li>
    </ul>
  </div>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

// export const query = graphql`
// {
//   allImageSharp {
//     edges {
//       node{
//         fluid {
//           src
//         }
//       }
//     }
//   }
// }
// `
