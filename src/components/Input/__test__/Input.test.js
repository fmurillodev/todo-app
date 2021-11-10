import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '..';

const onChange = (value) => {
  return value;
};
it('should render Input', () => {
  render(<Input placeholder='Name' value='Name text' onChange={onChange} />);
  expect(screen.getByPlaceholderText('Name')).toBeTruthy();
  expect(screen.getByPlaceholderText('Name')).toBeTruthy();
});

it('should display text on input', () => {
  render(<Input placeholder='Name' value='Hello World' onChange={onChange} />);

  expect(screen.getByPlaceholderText('Name').value).toBe('Hello World');
});
