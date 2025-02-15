"use client"
import { useState, useEffect } from 'react';
import { FiActivity, FiDownloadCloud, FiFilm, FiBarChart } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';
import Resultslider from './Resultslider';
import Resulttabs from './Resulttabs';
import Insideslider from './Insideslider';
export default function Scrollsection() {

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };


  useEffect(() => {
    // Initialize ScrollSpy after the component mounts
    if (typeof window !== 'undefined') {
      const bootstrap = require('bootstrap'); // Import Bootstrap if it's client-side
      const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar' // ScrollSpy will track the nav with this ID
      });
    }
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // You can adjust the scroll threshold as needed
    if (window.scrollY > 500) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className='py-5 scroller'>
        <nav id="scrollnav" className={`scrollnav ${isSticky ? 'sticky' : ''}`} >
          <ul className="nav nav-pills list-unstyled m-0 d-flex gap-3 justify-content-center">
            <li className="nav-item"><Link className="nav-link" href="#driverevenue">How We Drive Revenue</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#technology">Our Technology</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#expertise">Our Expertise</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#results">Our Results</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#inside">Inside WebFX</Link></li>
          </ul>
        </nav>

        <div data-bs-spy="scroll" data-bs-target="#scrollnav" data-bs-offset="0" className="scrollspy-example" >

          <div className='container p-0 text-center py-5' id="driverevenue">
            <div className='headcontent d-flex gap-3 flex-column'>
              <h2>How We <span>Drive Revenue</span></h2>
              <p>By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.</p>
              <Image src="/images/wedrive.png"
                alt="Example Image"
                width={768}
                height={545} className='m-auto' />
            </div>
          </div>

          <div className='container-fluid px-5  py-5' id="technology">
            <div className='headcontent text-center d-flex gap-3 flex-column'>
              <h2>Uncover The Impact of Marketing on Revenue</h2>
              <p>Our expert-led strategies are backed by our award-winning technology. Together, our clients are empowered to make informed and strategic marketing decisions, ensuring they stay ahead in the ever-evolving digital landscape.</p>
            </div>

            <div className="counter pt-4 d-flex justify-content-between">
              <div className="setup">
                <h5>100%</h5>
                <p>set up by acssinfo</p>
              </div>

              <div className="setup">
                <h5>$500K</h5>
                <p>Built in value</p>
              </div>

              <div className="setup">
                <h5>20%</h5>
                <p>avg increase in roi</p>
              </div>

              <div className="setup">
                <h5>1B</h5>
                <p>Data points that drive <br /> decision making</p>
              </div>

            </div>

            {/* Vertical Tabs */}

            <div className="container-fluid mt-5">
              <div className="row techtabs">
                <div className="col-md-4">
                  {/* Vertical Tabs */}
                  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a
                      className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected={activeTab === 'tab1'}
                      onClick={() => handleTabClick('tab1')}
                    >
                      <FiActivity />  Actionable Analytics
                    </a>
                    <a
                      className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected={activeTab === 'tab2'}
                      onClick={() => handleTabClick('tab2')}
                    >
                      <FiDownloadCloud />  Data Empowerment
                    </a>
                    <a
                      className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected={activeTab === 'tab3'}
                      onClick={() => handleTabClick('tab3')}
                    >
                      <FiFilm /> Content Marketing
                    </a>

                    <a
                      className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
                      id="v-pills-enable-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-enable"
                      role="tab"
                      aria-controls="v-pills-enable"
                      aria-selected={activeTab === 'tab4'}
                      onClick={() => handleTabClick('tab4')}
                    >
                      <FiBarChart /> Sales Enablement
                    </a>

                  </div>
                </div>

                <div className="col-md-8 text-white">
                  {/* Tab Content */}
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className={`tab-pane p-5 bg-prime fade ${activeTab === 'tab1' ? 'show active' : ''}`}
                      id="v-pills-home"
                      role="tabpanel" aria-labelledby="v-pills-home-tab" >
                      <Image src="/images/tab.png" alt="analytics" width={600} height={400} className='pb-5' />
                      <h3>Actionable Analytics</h3>
                      <p>MarketingCloudFX simplifies your decision-making by clearly showing which marketing efforts are driving revenue for your business. </p>
                      <p>By connecting the dots between your various marketing activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.</p>
                    </div>

                    <div className={`tab-pane p-5 bg-prime fade ${activeTab === 'tab2' ? 'show active' : ''}`}
                      id="v-pills-profile"
                      role="tabpanel" aria-labelledby="v-pills-profile-tab" >
                      <Image src="/images/tab.png" alt="empowerment" width={600} height={400} className='pb-5' />
                      <h3>Data Empowerment</h3>
                      <p>MarketingCloudFX simplifies your decision-making by clearly showing which marketing efforts are driving revenue for your business. </p>
                      <p>By connecting the dots between your various marketing activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.</p>
                    </div>

                    <div className={`tab-pane p-5 bg-prime fade ${activeTab === 'tab3' ? 'show active' : ''}`}
                      id="v-pills-messages"
                      role="tabpanel" aria-labelledby="v-pills-messages-tab" >
                      <Image src="/images/tab.png" alt="marketing" width={600} height={400} className='pb-5' />
                      <h3>Content Marketing</h3>
                      <p>MarketingCloudFX simplifies your decision-making by clearly showing which marketing efforts are driving revenue for your business. </p>
                      <p>By connecting the dots between your various marketing activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.</p>
                    </div>

                    <div className={`tab-pane p-5 bg-prime fade ${activeTab === 'tab4' ? 'show active' : ''}`}
                      id="v-pills-enable"
                      role="tabpanel" aria-labelledby="v-pills-enable-tab" >
                      <Image src="/images/tab.png" alt="enablement" width={600} height={400} className='pb-5' />
                      <h3>Sales Enablement</h3>
                      <p>MarketingCloudFX simplifies your decision-making by clearly showing which marketing efforts are driving revenue for your business. </p>
                      <p>By connecting the dots between your various marketing activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Tabs */}

          </div>

          {/* Expertise */}
          <div className='container p-0  py-5' id="expertise">
            <div className='headcontent text-center d-flex gap-3 flex-column'>
              <h2>Revenue & Beyond: <span>Proven Results</span> For Clients</h2>
              <p>See how WebFX improves the KPIs that drive actual business growth.</p>
            </div>

            <Resultslider />

          </div>
          {/* Results  */}
          <div className='container-fluid p-5' id="results">
            <div className='headcontent text-center d-flex gap-3 flex-column'>
              <h2>Improve the KPIs That Matter <br/>Most to Your Business</h2>
            </div>
            <Resulttabs />
          </div>
          {/* Inside */}
          <div className='container-fluid ' id="inside">
            <div className='headcontent text-center d-flex gap-3 flex-column'>
              <h2>Inside Acssinfo</h2>
            </div>
            <Insideslider/>
          </div>

        </div>

      </section>
    </>
  );
}