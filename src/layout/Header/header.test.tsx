import { render, screen, fireEvent, act } from "@testing-library/react";
import Header from "./index";
import useMediaQuery from "./../../hooks/useMediaQuery";
import '@testing-library/jest-dom';

// Mock useMediaQuery
jest.mock("./../../hooks/useMediaQuery", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    useMediaQuery.mockReturnValue(false);
  });

  it('renders the Logo and NavBar components', () => {
    render(<Header />);
    expect(screen.getByLabelText('Urban Bites Logo')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it("removes the active class when scrolled above the target element", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    expect(header).not.toHaveClass("active");
  });

  it("calls handleResetActive when Logo is clicked", () => {
    useMediaQuery.mockReturnValue(false); // Mock as mobile/tablet
    render(<Header />);

    const logo = screen.getByLabelText('Urban Bites Logo');
    fireEvent.click(logo);

    const header = screen.getByRole("banner");
    expect(header).not.toHaveClass("active");
  });
});
