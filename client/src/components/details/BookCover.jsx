import React from 'react';
import styled from 'styled-components';

import backdrop from '../../img/book-backdrop.jpg';

const FauxCover = styled.div`
  background-image: url(${backdrop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 240px;
  margin: 0 auto;
`;

const InnerBox = styled.div`
  margin: 24px 28px;
  height: 240px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.default.bg};
`;

const AuthorAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 15px;
`;

const Author = styled.span`
  padding-bottom: 6px;
  font-size: 18px;
  display: block;
`;

const Title = styled.span`
  padding-top: 6px;
  display: block;

  /* Decrease font-size if title is longer than 25 characters, 
    or if any words are longer than 7 letters */
  font-size: ${({ children: title }) => {
    if (!title) return;

    const longTitle = title.length > 25;
    const longWords = title.split(' ').some(word => word.length > 7);

    return longTitle || longWords ? '24px' : '36px';
  }};

  /* Break words and hide overflow if text is still too big */
  word-break: break-word;
  overflow-y: hidden;
`;

const BookCover = ({ author, title }) => (
  <FauxCover>
    <InnerBox>
      <AuthorAndTitle>
        <Author>{author}</Author>
        <Title>{title}</Title>
      </AuthorAndTitle>
    </InnerBox>
  </FauxCover>
);

export default BookCover;
