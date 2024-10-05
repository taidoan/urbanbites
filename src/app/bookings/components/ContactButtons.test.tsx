import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactButton from './ContactButtons';

describe('ContactButton Component', () => {
  it('renders a button when no href is provided', () => {
    render(<ContactButton method="email" content="Contact Us" />);
    
    const buttonElement = screen.getByRole('button', { name: /email: Contact Us/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders a link when href is provided', () => {
    render(<ContactButton method="phone" content="Call Us" href="tel:+123456789" />);
    
    const linkElement = screen.getByRole('link', { name: /phone: Call Us/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'tel:+123456789');
  });

  it('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    render(<ContactButton method="email" content="Contact Us" onClick={handleClick} />);
    
    const buttonElement = screen.getByRole('button', { name: /email: Contact Us/i });
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct class names', () => {
    render(<ContactButton method="email" content="Contact Us" className="custom-class" />);
    
    const buttonElement = screen.getByRole('button', { name: /email: Contact Us/i });
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('email');
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('renders the correct icon for email', () => {
    const {container} = render(<ContactButton method="email" content="Contact Us" />);
    const svgElement = container.querySelector("[data-icon='envelope']") as HTMLImageElement
    expect(svgElement.classList.toString()).toContain("fa-envelope")
  });

  it('renders the correct icon for phone', () => {
    const {container} = render(<ContactButton method="phone" content="Contact Us" />);
    const svgElement = container.querySelector("[data-icon='phone']") as HTMLImageElement
    expect(svgElement.classList.toString()).toContain("fa-phone")
  });

  it('sets target and rel attributes correctly when target is "_blank"', () => {
    render(<ContactButton method="email" content="Contact Us" href="mailto:test@example.com" target="_blank" />);
    
    const linkElement = screen.getByRole('link', { name: /email: Contact Us/i });
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
