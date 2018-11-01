import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  display: block;
  width: 100%;
  padding: 5px 0;
  line-height: 1.5;
  border-radius: 3px;
  border: 1px solid lightgray;
  margin-top: 2px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled(InputBase)`
  text-indent: 5px;
`;

const LongText = styled(InputBase)`
  text-indent: 5px;
  font-family: inherit;
  resize: none;
`;

export const TextInput = ({ name, id, label, placeholder, ...props }) => (
  <Label htmlFor={name}>
    {label}
    <Input
      as="input"
      name={name}
      id={id}
      placeholder={placeholder}
      {...props}
    />
  </Label>
);

export const Select = ({ name, label, options, selected }) => (
  <Label htmlFor={name}>
    {label}
    <InputBase as="select" name={name} defaultValue={selected}>
      {options.map(({ value, text }, i) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </InputBase>
  </Label>
);

export const TextArea = ({ name, label, placeholder, rows, ...props }) => (
  <Label htmlFor={name}>
    {label}
    <LongText
      as="textarea"
      name={name}
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  </Label>
);
