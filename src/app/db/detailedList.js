const detailedList = [
  {
    id: 1,
    title: "Stuhome Student Living Heights",
    description:
      "Student Living height is idally located near various universities making it a great choice for those who want to cut down on their cumute time, Payment can be mirror to student financies Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/assets/images/bedroom.jpg",
    liked: true,
    flashSale: true,
    priceDrop: true,
    pricePerWeek: 399,
    cheapestIn: "5 months",
    facilities:
      "Laundry Facilities in Room, Refigerator, Wifi, Bike, Storage, Kitchen",
    distance: {
      walk: "34mins",
      bus: "16mins",
      car: "12mins",
    },
  },
  {
    id: 1,
    title: "Rathbone Apartment",
    description:
      "A Rathford apartment you'll be a stone's throw from Oxford Street flagship stores and cultural centre that is London's theatre district",
    image: "/assets/images/bedroom.jpg",
    liked: false,
    flashSale: true,
    priceDrop: true,
    pricePerWeek: 315,
    cheapestIn: "past months",
    facilities:
      "Laundry Facilities in Room, Refigerator, Wifi, Bike, Storage, Kitchen",
    distance: {
      walk: "24mins",
      bus: "13mins",
      car: "7mins",
    },
    conditionalPrice: {
      shared: 315,
      private: 420,
    },
    rating: { rating: 4.5, count: 11 },
  },
  {
    id: 1,
    title: "Stuhome Student Living Heights",
    description:
      "A Rathford apartment you'll be a stone's throw from Oxford Street flagship stores and cultural centre that is London's theatre district",
    image: "/assets/images/bedroom.jpg",
    liked: false,
    flashSale: true,
    priceDrop: true,
    pricePerWeek: 200,
    cheapestIn: "2 months",
    facilities:
      "Kitchen, Funished, On-site Laundry(Free), Wifi, On-site Manager",
    distance: {
      walk: "17mins",
      bus: "12mins",
      car: "8mins",
    },
    conditionalPrice: {
      shared: 200,
      private: 300,
    },
    rating: { rating: 2.5, count: 6 },
  },
];

export default detailedList;
