import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Logo from '.';
import '@testing-library/jest-dom'

describe('Logo Component', () => {
  test('renders with the default logo variant', () => {
    render(<Logo />);
    const logoElement = screen.getByRole('img', {  });
    expect(logoElement).toHaveAttribute('xlink:href', `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/logo-sprite.svg#logo-orange-white`);
  });

  test('renders with the active logo variant when active prop is true', () => {
    render(<Logo active />);
    const logoElement = screen.getByRole('img', {  });
    expect(logoElement).toHaveAttribute('xlink:href', `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/logo-sprite.svg#logo-orange-brown`);
  });

  test('renders with the footer logo variant when footer prop is true', () => {
    render(<Logo footer />);
    const logoElement = screen.getByRole('img', {  });
    expect(logoElement).toHaveAttribute('xlink:href', `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/logo-sprite.svg#logo-cream`);
  });

  test('calls the action prop when the logo is clicked', () => {
    const mockAction = jest.fn();
    render(<Logo action={mockAction} />);
    const logoLink = screen.getByRole('link');
    fireEvent.click(logoLink);
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

});
