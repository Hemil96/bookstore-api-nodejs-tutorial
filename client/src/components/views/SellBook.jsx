import React from 'react';
import styled from 'styled-components';

import { TextInput, Select, TextArea } from '../ui';
import { PrimaryButton } from '../ui';

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: stretch;
  padding: 15px 0;
`;

const Header = styled.h2`
  display: inline;
  margin-top: 0;
`;

const Message = styled.p`
  font-weight: ${({ theme, error, success }) =>
    error || success ? theme.fontWeights.semiBold : theme.fontWeights.light};
  color: ${({ error, success }) =>
    error ? 'red' : success ? 'green' : 'inherit'};
  margin-top: 0;
`;

const AddButton = styled(PrimaryButton)`
  height: 45px;
  margin-top: 10px;
  transition: background 0.25s;

  &:disabled {
    background: #d1bdfe;
    cursor: default;
  }

  &:hover {
    box-shadow: none;
  }
`;

// Options for "Format" select element
const formatOptions = [
  { value: 'paperback', text: 'Paperback' },
  { value: 'hardcover', text: 'Hardcover' },
];

// Initial state for new book form
const initialBookState = {
  title: '',
  author: '',
  format: formatOptions[0].value,
  price: null,
  overview: '',
};

class SellBook extends React.Component {
  state = {
    newBook: initialBookState,
    isSubmitting: false,
    success: false,
    error: false,
    feedback: '',
  };

  componentDidMount() {
    // Get reference to title input. Used again on submit
    this.titleInput = document.querySelector('#title');
    this.titleInput.focus();
  }

  handleChange = e => {
    const { newBook } = this.state;
    newBook[e.target.name] = e.target.value;
    this.setState({ newBook });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { newBook } = this.state;

    // Convert string to number
    const numericPrice = Number(newBook.price);
    if (isNaN(numericPrice)) {
      this.setState({
        error: true,
        feedback: 'Please enter a numeric price...',
      });
      return;
    }

    // Input is valid
    this.setState({ isSubmitting: true });

    const createdBook = {
      ...newBook,
      price: numericPrice,
    };

    this.props
      .handleSave(createdBook)
      .then(() => {
        this.setState({
          newBook: initialBookState,
          isSubmitting: false,
          success: true,
          error: false,
          feedback: 'Successfully created new book!',
        });

        // Reset form fields
        document.forms.sellForm.reset();

        // Focus title input
        this.titleInput.focus();
      })
      .catch(() => {
        this.setState({
          isSubmitting: false,
          success: false,
          error: true,
          feedback: 'API error :(',
        });
      });
  };

  render() {
    const { title, author, price } = this.state.newBook;
    const { isSubmitting } = this.state;

    return (
      <Container>
        <Header>Sell Your Book</Header>
        <Message error={this.state.error} success={this.state.success}>
          {this.state.feedback || 'Please provide some information:'}
        </Message>
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name="sellForm"
        >
          <TextInput name="title" id="title" label="Title" />
          <TextInput name="author" id="author" label="Author" />
          <Select
            name="format"
            label="Format"
            options={formatOptions}
            selected={formatOptions[0].value}
          />
          <TextInput name="price" id="price" label="Price" />
          <TextArea name="overview" id="overview" label="Overview" rows={3} />
          <AddButton
            type="submit"
            disabled={!(title && author && price) || isSubmitting}
          >
            Add to Marketplace
          </AddButton>
        </form>
      </Container>
    );
  }
}

export default SellBook;
