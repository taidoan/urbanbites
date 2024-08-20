import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '.';

describe('Button Component', () => {
  test('renders a button', () => {
    render(<Button title="Click Me" />);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('primary');
    expect(button.tagName).toBe('BUTTON');
  })

  test('renders button with a specific variant', () => {
    render(<Button title="Click Me" variant="danger" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('danger');
  });

  test('renders button as disabled when variant is "disabled"', () => {
    render(<Button title="Click Me" variant="disabled" />);
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });

  test('renders link when href is provided', () => {
    render(<Button title="Go to Google" href="https://www.google.com" />);
    const link = screen.getByText('Go to Google');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveClass('primary');
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.google.com');
  });

  test('calls the click handler when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button title="Click Me" onClick={handleClick} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders button with correct type attribute', () => {
    render(<Button title="Submit" type="submit" />);
    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('applies additional className', () => {
    render(<Button title="Extra Class" className="extra-class" />);
    const button = screen.getByText('Extra Class');
    expect(button).toHaveClass('extra-class');
  });
}) 