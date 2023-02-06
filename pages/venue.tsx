import Footer from "@/components/Footer";
import GalleryImage from "@/components/GalleryImage";
import MultipleImageCard from "@/components/MultipleImageCard";
import Navbar from "@/components/Navbar";
import TwoCardComponent from "@/components/TwoCardComponent";

export default function index() {
  return (
    <div>
      <Navbar />
      <TwoCardComponent />
      <GalleryImage />
      <MultipleImageCard />
      <Footer />
    </div>
  );
}
