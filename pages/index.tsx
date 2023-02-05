import Banner from "@/components/Banner";
import BasicCard from "@/components/BasicCard";
import BasicCardLayout from "@/components/BasicCardLayout";
import Footer from "@/components/Footer";
import MustSeeEventsCards from "@/components/MustSeeEventsCards";
import Navbar from "@/components/Navbar";

export default function index() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BasicCardLayout />
      <MustSeeEventsCards />
      <Footer />
    </div>
  );
}
