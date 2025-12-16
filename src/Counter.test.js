import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('renders counter with initial count 0', () => {
  render(<Counter />);
  const countText = screen.getByText(/You clicked 0 times/i);
  expect(countText).toBeInTheDocument();
});

test('increments count when button is clicked', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  const button = screen.getByRole('button', { name: /click me/i });
  const countText = screen.getByText(/You clicked 0 times/i);
  
  await user.click(button);
  
  expect(screen.getByText(/You clicked 1 times/i)).toBeInTheDocument();
  expect(countText).not.toBeInTheDocument();
});

test('increments count multiple times', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  const button = screen.getByRole('button', { name: /click me/i });
  
  await user.click(button);
  await user.click(button);
  await user.click(button);
  
  expect(screen.getByText(/You clicked 3 times/i)).toBeInTheDocument();
});