import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '..';

it('Should render Header', () => {
  render(<Header />);
  expect(screen).toBeTruthy();
});

it('should recived props title', () => {
  render(<Header title='Title Test' />);
  expect(screen.getByText('Title Test')).toBeTruthy();
});
