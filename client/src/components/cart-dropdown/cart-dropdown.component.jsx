import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  StyledCartDropdown,
  ButtonWithMargin,
  CartItems,
  EmptyMsg,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <StyledCartDropdown>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMsg>Your cart is empty.</EmptyMsg>
      )}
    </CartItems>
    <ButtonWithMargin
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </ButtonWithMargin>
  </StyledCartDropdown>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
