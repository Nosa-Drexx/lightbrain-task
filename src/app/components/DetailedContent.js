"use client";
import { useEffect, useState } from "react";
import detailedList from "../db/detailedList";
import DetailedListingCard from "./Card/DetailedListingCard";

const DetailedContent = () => {
  const [list, setList] = useState([...detailedList]);
  const [listToShow, setListToshow] = useState([]);
  const [listSliceCount, setListSliceCount] = useState(1);
  const sliceBy = 2;

  const showMoreList = () => {
    if (list.length === listToShow.length) {
      const removeBy = 1;
      const sliceMoreOut = list.slice(0, Math.max(removeBy * sliceBy, sliceBy));
      setListSliceCount(removeBy);
      setListToshow(sliceMoreOut);
      return;
    }
    const addBy = Math.max(1, listSliceCount + 1);
    const sliceMoreOut = list.slice(0, Math.min(addBy * sliceBy, list.length));
    setListSliceCount((prev) => prev + 1);
    setListToshow(sliceMoreOut);
  };

  useEffect(() => {
    setListToshow(list.slice(0, sliceBy));
  }, []);
  return (
    <section className="flex flex-col gap-4">
      {listToShow.map((content, index) => {
        return <DetailedListingCard key={index} content={content} />;
      })}
      {listToShow.length > 0 && (
        <button
          className="text-lg font-bold bg-[#38b2a7] w-full p-3 text-center text-white"
          onClick={showMoreList}
        >
          {listToShow.length === list.length ? "Show less" : "Show more"}{" "}
        </button>
      )}
    </section>
  );
};

export default DetailedContent;
