import BookNow from "@/components/BookNow/BookNow";
import Dest from "@/components/dest/Dest";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Popular from "@/components/Popular/Popular";
import TopTrending from "@/components/TopTrending/TopTrending";
import Tourz from "@/components/Tourz/Tourz";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Header />
        <Tourz />
        <Dest />
        <Popular />
        <BookNow />
        <Gallery />
        <TopTrending />
      </main>
    </div>
  );
}
