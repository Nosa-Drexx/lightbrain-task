import {
  DirectionsBusFilled,
  DirectionsCarFilled,
  DirectionsWalk,
  LocalOffer,
  OfflineBolt,
} from "@mui/icons-material";
import Image from "next/image";

const FeaturedListingCard = ({
  content = {
    id: "ca38a9d1-c3bf-4058-8f00-b250412b2be6",
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
  },
}) => {
  return (
    <div
      className="flex flex-col featured-card shadow-lg w-[300px] h-[350px] max-w-[300px] snap-start"
      data-testid={`featured-card-${content?.id}`}
    >
      <div className="featured-img relative h-1/2">
        <Image
          src={content?.image}
          alt="featured-img"
          className="w-full h-full object-cover"
          width={300}
          height={175}
        />
        {content?.voucher && (
          <div className="absolute flex justify-center bottom-0 left-0 w-full bg-[#f9a600] gap-2 featured-voucher h-1/5 text-white items-center font-bold">
            <LocalOffer className="text-[#fdcf2f] scale-x-[-1]" /> &pound;
            {content?.voucher?.Amount} {content?.voucher?.type} voucher
          </div>
        )}
      </div>
      <div className="featured-content h-1/2 flex flex-col gap-1 py-5 px-4 justify-between">
        <h5 className="text-lg font-bold text-ellipsis text-nowrap whitespace-nowrap overflow-hidden w-full">
          {content?.title}
        </h5>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-medium ">
            From{" "}
            <span className="text-[#f0591a] font-bold text-xl">
              &pound;{content?.pricePerWeek}
            </span>{" "}
            /week
          </p>
          {content?.flashSale && (
            <OfflineBolt className="text-[#f0591a] text-md" />
          )}
        </div>
        <span className="text-white text-sm font-bold rounded bg-[#3d5896] px-2 py-1 w-fit">
          Cheapest in the past {content?.cheapestIn}
        </span>
        <div className="w-full flex gap-2">
          {content?.distance?.walk && (
            <div className="flex gap-2 items-center">
              <DirectionsWalk /> {content?.distance?.walk}
            </div>
          )}
          {content?.distance?.bus && (
            <div className="flex gap-2 items-center">
              <DirectionsBusFilled /> {content?.distance?.bus}
            </div>
          )}
          {content?.distance?.car && (
            <div className="flex gap-2 items-center">
              <DirectionsCarFilled /> {content?.distance?.car}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListingCard;
