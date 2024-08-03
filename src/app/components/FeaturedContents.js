import Link from "next/link";
import featuredList from "../db/featuredList";
import FeaturedListingCard from "./Card/FeaturedListingCard";
const FeaturedContents = () => {
  return (
    <section className="flex gap-6 sm:gap-12 w-full overflow-auto hide-scrollbar py-3 overscroll-x-contain scroll-snap-x snap-x mandatory">
      {featuredList.map((content, index) => {
        return <FeaturedListingCard key={index} content={content} />;
      })}
      <div className="flex flex-col justify-end shadow-lg w-[300px] h-[350px] min-w-[300px] p-6 gap-5 bg-no-repeat last-card-featured relative scroll-snap-start">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-10"></div>
        <div className="flex flex-col justify-end w-full h-full  top-0 left-0 p-6 gap-5 bg-no-repeat absolute z-20">
          <div className="text-black font-bold text-lg text-white">
            More Collected Properties new University College London
          </div>
          <Link
            href=""
            className="text-lg font-bold bg-[#38b2a7] w-full p-3 text-center text-white "
          >
            Check out
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContents;
