import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '..';

it('Should render Button', () => {
  render(<Button label='Hello' />);
  expect(screen.getByTestId('button')).toBeTruthy();
  expect(screen.getByText('Hello')).toBeTruthy();
});
