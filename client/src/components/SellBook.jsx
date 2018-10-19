import React from 'react';
import styled from 'styled-components';

import { TextInput, Select, TextArea } from './FormInputs';
import { PrimaryButton } from './Buttons';

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
    title: '',
    author: '',
    format: formatOptions[0].value,
    price: null,
    overview: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
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
