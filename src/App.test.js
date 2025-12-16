import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders app without crashing', () => {
  render(<App />);
  // If render doesn't throw, the test passes
});

test('renders logo image', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
  expect(logoElement).toHaveAttribute('src', 'logo.svg');
});

test('renders custom text', () => {
  render(<App />);
  expect(screen.getByText(/Avinash kumar sharma/i)).toBeInTheDocument();
  expect(screen.getByText(/some testing for jenkins with react app/i)).toBeInTheDocument();
});

test('link has correct href', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
});

test('renders counter component', () => {
  render(<App />);
  expect(screen.getByText(/You clicked 0 times/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
