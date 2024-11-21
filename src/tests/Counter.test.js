// Import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Expect to find the text indicating the counter is displayed
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Expect the initial count value to be 0
  const countValue = screen.getByText(/current count: 0/i); // Updated selector to be more specific
  expect(countValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Find the increment button by role or text and click it
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);

  // Expect the count to be 1 after clicking the increment button
  const countValue = screen.getByText(/current count: 1/i); // Updated selector to be more specific
  expect(countValue).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Find the increment button and click it to increment the count initially
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);

  // Find the decrement button by role or text and click it
  const decrementButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrementButton);

  // Expect the count to be 0 after incrementing and then decrementing
  const countValue = screen.getByText(/current count: 0/i); // Updated selector to be more specific
  expect(countValue).toBeInTheDocument();
});
