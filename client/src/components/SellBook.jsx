import React from 'react';
import styled from 'styled-components';

import { TextInput, Select, TextArea } from './FormInputs';
import { PrimaryButton } from './Buttons';
import { saveBook } from '../utils/books';

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: stretch;
  padding: 20px 0;
`;

const Header = styled.h2`
  display: inline;
  margin-top: 0;
`;

const Message = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

const AddButton = styled(PrimaryButton)`
  height: 45px;
  margin-top: 10px;
`;

// Options for "Format" select element
const formatOptions = [
  { value: 'paperback', text: 'Paperback' },
  { value: 'hardcover', text: 'Hardcover' },
];

export default class SellBook extends React.Component {
  state = {
    newBook: {
      title: '',
      author: '',
      format: formatOptions[0].value,
      price: null,
      overview: '',
    },
    isSubmitting: false,
    success: null,
    error: null,
  };

  handleChange = e => {
    const { newBook } = this.state;
    newBook[e.target.name] = e.target.value;
    this.setState({ newBook });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ isSubmitting: true });

    const { title, author, price } = this.state.newBook;
    if (!(title && author && price)) {
      // TODO error feedback
      this.setState({
        isSubmitting: false,
        success: false,
        error: 'Please enter title, author and price',
      });
      return;
    }

    // Convert string to number
    const numericPrice = Number(price);

    const newBook = {
      ...this.state.newBook,
      price: numericPrice,
    };

    saveBook(newBook)
      .then(savedBook => {
        this.setState({
          newBook: savedBook,
          isSubmitting: false,
          success: true,
          error: null,
        });
        // TODO success feedback
      })
      .catch(e => console.error(e));
  };

  render() {
    return (
      <Container>
        <Header>Sell Your Book</Header>
        <Message>Please provide some information:</Message>
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name="Sell Form"
        >
          <TextInput name="title" label="Title" />
          <TextInput name="author" label="Author" />
          <Select
            name="format"
            label="Format"
            options={formatOptions}
            selected={formatOptions[0].value}
          />
          <TextInput name="price" label="Price" />
          <TextArea name="overview" label="Overview" rows={3} />
          <AddButton type="submit">Add to Marketplace</AddButton>
        </form>
      </Container>
    );
  }
}
