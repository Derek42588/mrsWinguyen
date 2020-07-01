import React from 'react';

import IconShopping from '../assets/shoppingCart.svg'

const CartIcon = () => (
  <div className="CartIcon">
    <IconShopping
      className="CartIcon__shopping-icon"
    />
    <span className="CartIcon__item-count snipcart-total-items"/>
  </div>
);

export default CartIcon
