import React from 'react';
import styled from 'styled-components';

const PriceAndFormat = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Currency = styled.span`
  font-size: 18px;
  position: relative;
  top: -10px;
  padding-right: 2px;
`;

const Amount = styled.span`
  font-size: 36px;
`;

const Format = styled.span`
  font-size: 16px;
`;

const BookPrice = ({ format = 'Paperback', price }) => (
  <PriceAndFormat>
    <Format>{format}</Format>
    <div>
      <Currency>$</Currency>
      <Amount>{price}</Amount>
    </div>
  </PriceAndFormat>
);

export default BookPrice;
