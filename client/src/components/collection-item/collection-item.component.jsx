import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  StyledCollectionItem,
  CollectionFooter,
  StyledImage,
  StyledName,
  StyledPrice,
  StyledCustomButton,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <StyledCollectionItem>
      <StyledImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooter>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </CollectionFooter>
      <StyledCustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </StyledCustomButton>
    </StyledCollectionItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
