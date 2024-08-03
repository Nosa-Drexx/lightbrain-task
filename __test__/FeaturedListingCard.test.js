// FeaturedListingCard.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for the "toBeInTheDocument" matcher
import FeaturedListingCard from "@/app/components/Card/FeaturedListingCard";

// Mocking next/image
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

const defaultContent = {
  title: "Janet Pool House",
  image: "/assets/images/bedroom.jpg",
  flashSale: false,
  pricePerWeek: 399,
  cheapestIn: "5 months",
  distance: {
    walk: "4mins",
    bus: "3mins",
    car: "2mins",
  },
  voucher: {
    type: "Uber",
    Amount: 100,
  },
};

describe("FeaturedListingCard", () => {
  test("renders the card with the correct content", () => {
    render(<FeaturedListingCard content={defaultContent} />);

    expect(screen.getByText(/janet pool house/i)).toBeInTheDocument();
    expect(screen.getByAltText(/featured-img/i)).toBeInTheDocument();
    expect(screen.getByText(/£399/i)).toBeInTheDocument();
    expect(
      screen.getByText(/cheapest in the past 5 months/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/4mins/i)).toBeInTheDocument();
    expect(screen.getByText(/3mins/i)).toBeInTheDocument();
    expect(screen.getByText(/2mins/i)).toBeInTheDocument();
    expect(screen.getByText(/£100 uber voucher/i)).toBeInTheDocument();
  });

  test("renders flash sale icon when flashSale is true", () => {
    const contentWithFlashSale = { ...defaultContent, flashSale: true };
    render(<FeaturedListingCard content={contentWithFlashSale} />);

    expect(screen.getByText(/£399/i)).toBeInTheDocument();
    expect(screen.getByTestId("OfflineBoltIcon")).toBeInTheDocument();
  });

  test("does not render voucher section if no voucher is provided", () => {
    const contentWithoutVoucher = { ...defaultContent, voucher: null };
    render(<FeaturedListingCard content={contentWithoutVoucher} />);

    expect(screen.queryByText(/voucher/i)).not.toBeInTheDocument();
  });

  test("handles missing distance information gracefully", () => {
    const contentWithoutDistance = { ...defaultContent, distance: {} };
    render(<FeaturedListingCard content={contentWithoutDistance} />);

    expect(screen.queryByText(/mins/i)).not.toBeInTheDocument();
  });
});
