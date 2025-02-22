import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FiDollarSign , FiActivity, FiDownloadCloud, FiFilm, FiBarChart } from "react-icons/fi";
import Banner from '../components/Banner';
import type { Metadata } from "next";
import Expertise from "../components/ Expertise";
export const metadata: Metadata = {
  title: "Seo Page",
  description: "Seo Page",
};

export default function SEO() {
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

      <section className="pricing py-5">
      <div className="container">
      <div className='headcontent pb-5 text-center'>
      <h2>SEO Services Pricing<br/>
      <span>Tailored</span> to Your Business Goals</h2>
      <p>Too many SEO firms take a copy-and-paste approach to SEO services. That’s not our style. Instead, we build custom plans based on your position, industry, and business goals.</p>
      </div>
      <div className="row justify-content-center align-items-center pricerow">
      <div className="col-md-5 prleftcol p-0">
        <div className="topcard text-center">
          <Image src="/images/plan_icon.png" alt="plan" width={80} height={80} className="" />
        <h4>CUSTOM SEO PLANS</h4>
        <span>Starting at</span>
        <p><span>$3,000</span> / month</p>
        </div>


    <div className="content">

    <h5>How we determine pricing</h5>

        <h6>Content Marketing Needs</h6>
        <p>With 65+ different content formats, WebFX’s dedicated content team can help grow your business through professionally-written, SEO optimized content no matter your industry.</p>
    </div>
    <div className="content">
    <h6>Website Size</h6>
    <p>The size of your website will determine your relative SEO needs for content, management, on-page optimization, and more. Your WebFX strategist will consider your website’s needs for your custom SEO strategy.</p>
    </div>
    <div className="content">
    <h6>Consultation Needs</h6>
    <p>Every WebFX client gets the support of our 500+ digital marketing team, regular consultation calls, and ongoing business reviews, plus the ROI reporting power of MarketingCloudFX. Our team can support complex needs as well, which you can discuss with your web strategist.</p>
    </div>
      </div>

      <div className="col-md-5 prightcol p-0">
        <h4>INCLUDED IN ALL PLANS:</h4>
        <ul>
            <li>AI-powered strategy recommendations</li>
            <li>Competitor site, strategy, & lead gen monitoring</li>
            <li>Data-backed optimization ideas</li>
            <li>Engaging copy written by industry experts</li>
            <li>Expertise of a 500+ digital strategy team</li>
            <li>Full-funnel ROI tracking</li>
            <li>Marketing and sales data unification</li>
            <li>MarketingCloudFX access</li>
        </ul>

        <a href="/" className="mainbtn"> Get My Custom Proposal</a>
      </div>
    
      </div>
      
      </div>


      </section>
    </>

  );
}