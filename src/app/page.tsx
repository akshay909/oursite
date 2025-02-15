import Banner from './components/Banner';
import Blogs from './components/Blogs';
import Footerform from './components/Footerform';
import Scrollsection from "./components/Scrollsection";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};
export default function Home() {

  return (
    <>
      <Banner
      heading="Unlock Revenue Growth through Digital Marketing"
      subheading="Digital Marketing That Drives Revenue®"
      description="Not every digital marketing agency can seamlessly connect marketing activities to your bottom line. Our award-winning expertise, data-backed decision making, and innovative technology have generated over $10 billion in revenue for clients like you. Request your personalized strategy proposal today to start driving ROI from digital marketing!"
      imageUrl="/images/hombanner.png" backgroundColor="#083A74" className="text-white" />
      <Scrollsection />
      <Blogs/>
      <Footerform/>
    </>
  );
}
