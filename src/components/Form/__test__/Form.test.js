import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '..';

it('Should render Form', () => {
  render(<Form />);
  expect(screen).toBeTruthy();
  expect(screen.getByRole('button')).toBeTruthy();
});

it('should display text on input', () => {
  render(<Form placeholder='Todo' />);
  const inputName = screen.queryByPlaceholderText('Todo');
  fireEvent.change(inputName, { target: { value: 'Jhon mock' } });
  expect(inputName.value).toBe('Jhon mock');
});

it('should update input and send the value to onSubmit', () => {
  const onSubmit = (value) => {
    return value;
  };
  render(<Form placeholder='Todo' onSubmit={onSubmit} edit='task 3' label='Update' />);
  const inputName = screen.queryByPlaceholderText('Todo');
  inputName.value = 'task 4';
  userEvent.click(screen.queryByRole('button'));
  expect(inputName.value).toBe('task 4');
});
