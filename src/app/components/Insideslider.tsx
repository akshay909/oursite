import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

export default function Insideslider() {
    // Create references to control both sliders
    const mainSlider = useRef(null);
    const navSlider = useRef(null);

    // Slick settings for the main slider
    const mainSliderSettings = {
        arrows: false, // No arrows on the main slider
        focusOnSelect: true, // Allows selection from the nav slider
        slidesToShow: 1, // Show only 1 item at a time in the main slider
    };

    // Slick settings for the nav (thumbnail) slider
    const navSliderSettings = {
        slidesToShow: 4,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        arrows: false,
        swipeToSlide: true,
        variableWidth: true,
    };

    return (
        <div className='accinfoslider pt-5 '>
            {/* <Slider
                {...navSliderSettings}
                ref={navSlider}
                asNavFor={mainSlider.current} > */}
                    <Slider {...navSliderSettings} ref={navSlider} asNavFor={mainSlider.current ?? undefined}>

                <div className='infoitem'>
                    <span>Our Culture</span>
                </div>

                <div className='infoitem'>
                    <span> Our Awards</span>
                </div>
                <div className='infoitem'>
                    <span>Community Impact</span>
                </div>
                <div className='infoitem'>
                    <span>Careers at Acssinfo</span>
                </div>

            </Slider>

            <Slider {...mainSliderSettings} ref={mainSlider}>

                <div className="row d-flex align-items-center infonav">
                    <div className="col-md-7">
                        <h3>Life at Accinfo</h3>
                        <p>
Our team of over 500 experts is one of the largest performance digital marketing agencies in the world. We’ve partnered with the best including Google, Facebook, Bing, and others, to deliver impactful digital marketing services to our clients.
</p>
                        <Link href="#">Look Inside Accinfo!   </Link>
                    </div>
                    <div className="col-md-5">
                        <Image src="/images/wedrive.png" alt="logo" width={450} height={300} />
                    </div>
                </div>

                <div className="row d-flex align-items-center infonav">
                    <div className="col-md-7">
                    <h3>Our Awards</h3>
<p>In addition to our thousands of testimonials and 775+ third-party reviews, WebFX has earned national recognition from respected organizations throughout the design, marketing, and business sectors.</p>
<Link href="#">Our Awards</Link>

                    </div>
                    <div className="col-md-5">
                        <Image src="/images/wedrive.png" alt="logo" width={450} height={300} /></div>
                </div>

                <div className="row d-flex align-items-center infonav">
                    <div className="col-md-7">
                   <h3> Paying it Forward</h3>
<p>Through WebFX’s FXBuilds program, we’ve launched a new project each year to help give back to others around the globe. We’ve built schools in Ghana and Guatemala and water wells in Kenya. Our goal is to directly improve the lives of 5,000 people across the world by 2024.</p>
<Link href="#">Learn More About FXBuilds </Link>
                    </div>
                    <div className="col-md-5">
                        <Image src="/images/wedrive.png" alt="logo" width={450} height={300} /></div>
                </div>

                <div className="row d-flex align-items-center infonav">
                    <div className="col-md-7">
                    <h3>Careers</h3>
                    <p>Our digital marketing agency is made up of elite marketers, designers, developers, and data analysts. For us, it’s not just a job — it’s a driving passion. And that passion has led to some of the best work on the web.</p>
                    <Link href="#">View Open Positions  </Link>
                    </div>
                    <div className="col-md-5">
                        <Image src="/images/wedrive.png" alt="logo" width={450} height={300} /></div>
                </div>

            </Slider>
        </div>
    );
};
