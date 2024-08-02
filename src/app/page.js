import Image from "next/image";
import Page from "./components/Layout/Page";
import FeaturedListingCard from "./components/Card/FeaturedListingCard";
import FeaturedContents from "./components/FeaturedContents";
import DetailedListingCard from "./components/Card/DetailedListingCard";
import DetailedContent from "./components/DetailedContent";

export default function Home() {
  return (
    <Page>
      <section className="flex flex-col gap-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <section className="flex flex-col w-full" id="Featured">
          <h2 className="text-3xl font-bold mt-5">Featured List</h2>
          <FeaturedContents />
        </section>
        <section className="flex flex-col w-full" id="Detailed">
          <h2 className="text-3xl font-bold mt-5">Detailed List</h2>
          <DetailedContent />
        </section>
      </section>
    </Page>
  );
}
