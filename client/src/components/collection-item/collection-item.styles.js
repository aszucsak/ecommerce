import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component.jsx';

export const StyledCollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  ${StyledCollectionItem}:hover & {
    opacity: 0.8;
  }
`;

export const StyledCustomButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${StyledCollectionItem}:hover & {
    opacity: 0.85;
    display: flex;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const StyledName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const StyledPrice = styled.span`
  width: 10%;
`;
