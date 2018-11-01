import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PrimaryButton, TextInput, Select, TextArea } from '.';

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: stretch;
  padding-top: 10px;
  width: 100%;
`;

const Header = styled.h2`
  display: inline;
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

export default class BookForm extends React.Component {
  state = {
    book: this.props.values || initialBookState,
    isSubmitting: false,
    success: false,
    error: false,
    feedback: '',
  };

  componentDidMount() {
    // Store reference to title input. Used again on submit
    this.titleInput = document.querySelector('#title');
    this.titleInput.focus();
    console.log(this.props.values);
  }

  handleChange = e => {
    this.setState({
      book: {
        ...this.state.book,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { book } = this.state;

    // Validate required fields
    if (!(book.author && book.title && book.price)) {
      this.setState({
        error: true,
        feedback: 'Author, title and price are required',
      });
      return;
    }

    // Convert string price to numeric
    const numericPrice = Number(book.price);
    if (isNaN(numericPrice)) {
      this.setState({
        error: true,
        feedback: 'Please enter a numeric price',
      });
      return;
    }

    // Input is valid
    this.setState({ isSubmitting: true });
    const newBook = {
      ...book,
      price: numericPrice,
    };

    this.props
      .handleSubmit(newBook)
      .then(() => {
        this.setState({
          book: this.props.values ? newBook : initialBookState,
          isSubmitting: false,
          success: true,
          error: false,
          feedback: 'Successfully saved your book!',
        });

        // Reset form fields
        if (!this.props.values) {
          document.forms.sellForm.reset();
        }

        // Focus title input
        this.titleInput.focus();
      })
      .catch(() => {
        this.setState({
          setSubmitting: false,
          error: true,
          feedback: 'API error :(',
        });
      });
  };

  render() {
    const { error, success, feedback, isSubmitting, book } = this.state;

    return (
      <Container>
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name="sellForm"
        >
          <Header>{this.props.header}</Header>
          <Message error={error} success={success}>
            {feedback || this.props.message}
          </Message>
          <TextInput
            name="title"
            id="title"
            label="Title"
            defaultValue={book.title}
          />
          <TextInput
            name="author"
            id="author"
            label="Author"
            defaultValue={book.author}
          />
          <Select
            name="format"
            label="Format"
            options={formatOptions}
            selected={book.format || formatOptions[0].value}
          />
          <TextInput
            name="price"
            id="price"
            label="Price"
            defaultValue={book.price}
          />
          <TextArea
            name="overview"
            id="overview"
            label="Overview"
            rows={4}
            defaultValue={book.overview}
          />
          <AddButton
            type="submit"
            disabled={
              !(book.title && book.author && book.price) || isSubmitting
            }
          >
            {this.props.submitBtnText}
          </AddButton>
        </form>
      </Container>
    );
  }
}

BookForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  submitBtnText: PropTypes.string.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    overview: PropTypes.string,
  }),
};
