import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component.jsx';

export const ButtonWithMargin = styled(CustomButton)`
  margin-top: auto;
`;

export const StyledCartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMsg = styled.span`
  font-size: 1.2rem;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
