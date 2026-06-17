import Hero from "@/components/home/hero/hero";
import Featured from "@/components/home/featured/featured";
import Services from "@/components/home/services/services";
import Reviews from "@/components/home/reviews/reviews";
import Banner from "@/components/home/banner/banner";


export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Services/>
      <Reviews/>
      <Banner />
    </>
  );
}
