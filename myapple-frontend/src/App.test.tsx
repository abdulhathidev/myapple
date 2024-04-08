import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My apple - front end', () => {
  render(<App />)
  const element = screen.getByText(/My apple - front end/i)
  expect(element).toBeInTheDocument()
})
