import { Link } from "gatsby"

import React from "react"
// import CartIcon from './cart-icon'
import IconShopping from '../assets/cart.svg'



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
          <IconShopping className="NavBar__nav__item__sublist__item__icon"/>
          <span className="snipcart-total-items"/>

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
