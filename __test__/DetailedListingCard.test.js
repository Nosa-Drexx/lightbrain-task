// DetailedListingCard.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for the "toBeInTheDocument" matcher
import DetailedListingCard from "@/app/components/Card/DetailedListingCard";

// Mocking next/image and next/link
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

jest.mock("next/link", () => ({ children, href }) => (
  <a href={href}>{children}</a>
));

const defaultContent = {
  id: 1,
  title: "Stuhome Student Living Heights",
  description:
    "Student Living height is idally located near various universities...",
  image: "/assets/images/bedroom.jpg",
  liked: true,
  flashSale: true,
  priceDrop: true,
  pricePerWeek: 399,
  cheapestIn: "5 months",
  facilities:
    "Laundry Facilities in Room, Refrigerator, Wifi, Bike, Storage, Kitchen",
  distance: {
    walk: "4mins",
    bus: "3mins",
    car: "2mins",
  },
  conditionalPrice: {
    shared: 315,
    private: 420,
  },
  rating: { rating: 4.5, count: 11 },
};

describe("DetailedListingCard", () => {
  test("renders the card with the correct content", () => {
    render(<DetailedListingCard content={defaultContent} />);

    expect(
      screen.getByText(/stuhome student living heights/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/student living height is idally located/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/featured-img/i)).toBeInTheDocument();
    expect(screen.getByText(/£399/i)).toBeInTheDocument();
    expect(
      screen.getByText(/cheapest in the past 5 months/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/price drop/i)).toBeInTheDocument();
    expect(screen.getByText(/4mins/i)).toBeInTheDocument();
    expect(screen.getByText(/3mins/i)).toBeInTheDocument();
    expect(screen.getByText(/2mins/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /laundry facilities in room, refrigerator, wifi, bike, storage, kitchen/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/shared room/i)).toBeInTheDocument();
    expect(screen.getByText(/private room/i)).toBeInTheDocument();
    expect(screen.getByText(/view room/i)).toBeInTheDocument();
  });

  test("toggles the liked state when the like button is clicked", () => {
    render(<DetailedListingCard content={defaultContent} />);

    const likeButton = screen.getByTestId("like-button");

    expect(screen.getByTestId("FavoriteOutlinedIcon")).toBeInTheDocument();

    fireEvent.click(likeButton);
    expect(
      screen.getByTestId("FavoriteBorderOutlinedIcon")
    ).toBeInTheDocument();

    fireEvent.click(likeButton);
    expect(screen.getByTestId("FavoriteOutlinedIcon")).toBeInTheDocument();
  });

  test("does not render price drop tag when priceDrop is false", () => {
    const contentWithoutPriceDrop = { ...defaultContent, priceDrop: false };
    render(<DetailedListingCard content={contentWithoutPriceDrop} />);

    expect(screen.queryByText(/price drop/i)).not.toBeInTheDocument();
  });

  test("renders only one price when conditionalPrice is not provided", () => {
    const contentWithoutConditionalPrice = {
      ...defaultContent,
      conditionalPrice: null,
    };
    render(<DetailedListingCard content={contentWithoutConditionalPrice} />);

    expect(screen.queryByText(/shared room/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/private room/i)).not.toBeInTheDocument();
    expect(screen.getByText(/entire place/i)).toBeInTheDocument();
  });

  test("handles missing distance information gracefully", () => {
    const contentWithoutDistance = { ...defaultContent, distance: {} };
    render(<DetailedListingCard content={contentWithoutDistance} />);

    expect(screen.queryByText(/mins/i)).not.toBeInTheDocument();
  });
});
