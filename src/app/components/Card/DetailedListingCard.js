"use client";
import {
  AddToPhotosOutlined,
  DirectionsBusFilled,
  DirectionsCarFilled,
  DirectionsWalk,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  MeetingRoom,
  OfflineBolt,
  School,
} from "@mui/icons-material";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DetailedListingCard = ({
  content = {
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
      walk: "4mins",
      bus: "3mins",
      car: "2mins",
    },
    conditionalPrice: {
      shared: 315,
      private: 420,
    },
    rating: { rating: 4.5, count: 11 },
  },
  setList = () => {},
}) => {
  const [liked, setLiked] = useState(content?.liked || false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="flex flex-col detailed-card sm:flex-row shadow-lg gap-3 p-5 dropdown-animation">
      <div className="sm:w-[300px] h-[220px] w-full relative">
        <Image
          className="w-full h-full object-cover"
          src={content?.image}
          alt="featured-img"
          width={200}
          height={150}
        />
        <div className="absolute flex gap-3 flex-col justify-center top-[7%] right-[7%] w-fit">
          <button
            className="w-[40px] h-[40px] rounded-full bg-white"
            onClick={handleLike}
          >
            {liked ? (
              <FavoriteOutlined style={{ fill: "red" }} />
            ) : (
              <FavoriteBorderOutlined />
            )}
          </button>
          <button className="w-[40px] h-[40px] rounded-full bg-white">
            <AddToPhotosOutlined className="scale-x-[-1]" />
          </button>
        </div>
      </div>
      <div className="w-full detailed-list-content flex flex-col lg:flex-row gap-3">
        <div className="flex flex-col gap-2 w-full lg:w-3/4">
          <div className="w-full flex items flex-col lg:flex-row">
            <h5
              className={`text-xl text-[#716a67] font-bold text-ellipsis text-nowrap whitespace-nowrap overflow-hidden w-full ${
                content?.rating ? "lg:w-1/2" : ""
              } lg:gap-2`}
            >
              {content?.title}
            </h5>
            {content?.rating && (
              <div className="flex gap-1 items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={content?.rating?.rating}
                  precision={0.1}
                  value={content?.rating?.rating}
                  className="text-[#fccc02]"
                  readOnly
                />
                <span className="text-xl">({content?.rating?.count})</span>
              </div>
            )}
          </div>
          <div className="truncate-2-lines">{content?.description}</div>
          <div className="flex gap-2 flex-wrap items-center">
            <School className="text-md text-[#716a67]" />
            <span className="text-[#716a67] text-sm font-bold">
              Distanct to Campus:
            </span>
            {content?.distance?.walk && (
              <div className="flex gap-2 items-center text-sm">
                <DirectionsWalk className="text-md text-[#716a67]" />{" "}
                {content?.distance?.walk}
              </div>
            )}
            {content?.distance?.bus && (
              <div className="flex gap-2 items-center text-sm">
                <DirectionsBusFilled className="text-md text-[#716a67]" />{" "}
                {content?.distance?.bus}
              </div>
            )}
            {content?.distance?.car && (
              <div className="flex gap-2 items-center text-sm">
                <DirectionsCarFilled className="text-md text-[#716a67]" />{" "}
                {content?.distance?.car}
              </div>
            )}
            <Link href="/" className=" text-[#38b2a7]">
              View map
            </Link>
          </div>
          <div className="flex gap-2  items-center text-ellipsis text-nowrap whitespace-nowrap overflow-hidden w-full">
            <MeetingRoom className="text-md text-[#716a67]" />
            <span className="text-[#716a67] text-sm font-bold">
              Facilities:
            </span>
            <div className="w-full text-ellipsis text-nowrap whitespace-nowrap overflow-hidden">
              {content?.facilities}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-white text-sm font-bold rounded bg-[#3d5896] px-2 py-1 w-fit">
              Cheapest in the past {content?.cheapestIn}
            </span>
            {content?.priceDrop && (
              <span className="text-white text-sm font-bold rounded bg-[#3d5896] px-2 py-1 w-fit">
                Price drop
              </span>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full flex flex-col justify-between gap-3">
          {" "}
          <div className="flex gap-2 items-end">
            <p className="text-md font-medium ">
              {content?.flashSale && (
                <OfflineBolt className="text-[#f0591a] text-md" />
              )}{" "}
              From{" "}
              <span className="text-[#f0591a] font-bold text-3xl">
                &pound;{content?.pricePerWeek}
              </span>{" "}
              /week
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {!content?.conditionalPrice ? (
              <div className="flex justify-between text-sm w-full">
                <span className="font-bold">Entire place</span>
                <span className="ms-auto text-[#716a67] ">
                  &pound;{content?.pricePerWeek}
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm w-full">
                  {content?.conditionalPrice?.shared && (
                    <>
                      <span className="font-bold">Shared Room</span>
                      <span className="ms-auto text-[#716a67] ">
                        &pound;{content?.conditionalPrice?.shared}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex justify-between text-sm w-full">
                  {content?.conditionalPrice?.private && (
                    <>
                      <span className="font-bold">Private Room</span>
                      <span className="ms-auto text-[#716a67] ">
                        &pound;{content?.conditionalPrice?.private}
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}
            <button className="w-full bg-[#fccc02] text-sm font-bold rounded text-[#716a67] text-center px-2 py-3">
              View room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedListingCard;
