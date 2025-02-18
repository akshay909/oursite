import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FiDollarSign , FiActivity, FiDownloadCloud, FiFilm, FiBarChart } from "react-icons/fi";
import Banner from '../components/Banner';
import type { Metadata } from "next";
import Expertise from "../components/ Expertise";
export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
};

export default function About() {
  return (
    <>
      <Banner
        heading="SEO Services for Traffic & Revenue Generation"
        subheading="Driving $10 Billion in Revenue for Brands Worldwide"
        description="Get more traffic and revenue from search with award-winning SEO services that blend talent and tech to improve SEO performance while tracking its bottom-line impact. Connect with our SEO agency today to get a custom proposal!"
        imageUrl="/images/wedrive.png" backgroundColor="#083A74" className="text-white" />
      <section className="py-5">
        <div className="container">
          <div className="row industrylist py-3">
            <h2>Select your industry. Discover our impact.</h2>
            <div className="col-md-6"><Link href="/">  <div><FiDollarSign size={20} /> Banking  </div> <FaArrowRight /></Link></div>
            <div className="col-md-6"><Link href="/">  <div><FiActivity size={20} /> Capital Markets</div>  <FaArrowRight /> </Link></div>
            <div className="col-md-6"><Link href="/">  <div><FiDownloadCloud size={20} /> High Tech </div> <FaArrowRight /> </Link></div>
            <div className="col-md-6"><Link href="/">  <div><FiFilm size={20} /> Education </div> <FaArrowRight /></Link></div>
            <div className="col-md-6"><Link href="/"> <div> <FiBarChart size={20} /> Health Care  </div><FaArrowRight /></Link></div>
            <div className="col-md-6"><Link href="/">  <div><FiActivity size={20} /> Manufacturing </div><FaArrowRight /></Link></div>
          </div>
        </div>
      </section>

      <Expertise/>

      <section className="py-5"> 
       <div className="container">
       <div className='headcontent pb-3'>
                        <h2>Website Design and Development Lifecycle (WDDLC)</h2>
                        <p>
Though we have a specific web design and development plan for a specific industry or business requirement, we follow an industry-standard WDDLC – website design and development lifecycle to ensure that the final product meets or surpasses your expectations and is in-line with your business objectives and company goal.
</p>
<p>
When you fill out the form to outsource web design and development, our sales experts contact you soonest to know the primary objective. We then follow a standard method to build a customized website. Whether a single page, parallax design, or a complex eCommerce portal, our website design and development services turn your dream project into a profitable digital product.</p>

  <Image src="/images/lifecycle.png" alt="drupal" width={200} height={200} className="w-100 h-100 mt-4" />
                    </div>

       </div>
      </section>
    </>

  );
}