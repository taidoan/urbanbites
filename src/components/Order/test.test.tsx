import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { OrderMethod, OrderLocation, OrderBasket } from "./index";
import { useSearchParams } from "next/navigation";
import useMediaQuery  from "../../hooks/useMediaQuery"

jest.mock("../../content/locations", () => ({
  Locations: [
    { id: 1, name: "Location 1" },
    { id: 2, name: "Location 2" },
  ],
}));

describe("OrderLocation Component", () => {
  test("renders the first location as the default", () => {
    render(<OrderLocation />);
    
    const defaultLocation = screen.getByText("Location 1");
    expect(defaultLocation).toBeInTheDocument();
  });

  test("toggles location selector dropdown when the button is clicked", () => {
    render(<OrderLocation />);
    
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    
    const locationList = screen.getByRole("list");
    expect(locationList).toBeInTheDocument();
  });

  test("changes current location when a location is clicked", () => {
    render(<OrderLocation />);
    
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    
    const newLocation = screen.getByText("Location 2");
    fireEvent.click(newLocation);
    
    expect(screen.getByText("Location 2")).toBeInTheDocument();
  });
});

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("OrderMethod Component", () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(null),
    });
  });

  test("renders with default order method as delivery", () => {
    render(<OrderMethod />);
    const deliveryButton = screen.getByRole("button", { name: /delivery/i });
    const collectionButton = screen.getByRole("button", { name: /collection/i });

    expect(deliveryButton).toHaveClass("orderMethodOptionActive");
    expect(collectionButton).not.toHaveClass("orderMethodOptionActive");
  });

  test("changes order method to collection when collection button is clicked", () => {
    render(<OrderMethod />);
    const collectionButton = screen.getByRole("button", { name: /collection/i });

    fireEvent.click(collectionButton);

    expect(collectionButton).toHaveClass("orderMethodOptionActive");
  });

  test("sets order method from query parameter", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("collection"),
    });

    render(<OrderMethod />);
    const collectionButton = screen.getByRole("button", { name: /collection/i });

    expect(collectionButton).toHaveClass("orderMethodOptionActive");
  });
});