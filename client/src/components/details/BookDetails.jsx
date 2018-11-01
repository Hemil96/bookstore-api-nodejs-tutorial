import React from 'react';
import styled from 'styled-components';

import ModifyMenu from './ModifyMenu';
import BookCover from './BookCover';
import BookPrice from './BookPrice';
import { PrimaryButton as OrderButton } from '../ui';

const DetailsBox = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 24px 15px;
`;

const OverviewSection = styled.section`
  margin-left: 30px;
  overflow-y: auto;
`;

const OverviewHeader = styled.header`
  font-size: 18px;
  display: block;
`;

const Title = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding-right: 8px;
`;

const Author = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

const Overview = styled.section`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 145%;
  font-size: 16px;
  padding-top: 8px;
`;

const BuySection = styled.section`
  display: grid;
  grid-template-rows: 290px 73px 51px;
  height: 100%;
  width: 240px;
  margin: 0 auto;
`;

const ErrorView = () => (
  <DetailsBox>
    <OverviewSection>
      <OverviewHeader />
      <Overview>No overview available</Overview>
    </OverviewSection>
    <BuySection>
      <BookCover author="Uh oh..." title="Something Went Wrong" />
    </BuySection>
  </DetailsBox>
);

const BookDetails = ({ book, ...props }) => {
  const hasError = !book || !(book.author && book.title && book.price);
  if (hasError) return <ErrorView />;

  return (
    <>
      <ModifyMenu
        handleDelete={props.handleDelete}
        handleUpdate={props.handleUpdate}
        selectedBook={book}
      />
      <DetailsBox>
        <OverviewSection>
          <OverviewHeader>
            <Title>{book.title}</Title>
            <Author>{`By ${book.author}`}</Author>
          </OverviewHeader>
          <Overview>{book.overview}</Overview>
        </OverviewSection>
        <BuySection>
          <BookCover title={book.title} author={book.author} />
          <BookPrice price={book.price} format={book.format} />
          <OrderButton>Buy</OrderButton>
        </BuySection>
      </DetailsBox>
    </>
  );
};

export default BookDetails;
