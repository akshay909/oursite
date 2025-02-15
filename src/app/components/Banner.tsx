import React from 'react';
import Image from 'next/image';
import Proposalform from '../components/Proposalform';
interface BannerProps {
  heading: string;
  subheading: string;
  description: string;
  imageUrl?: any;
  backgroundColor?: string;
  className?: string; // Rename class to className
}

const Banner = ({ heading, subheading, description, imageUrl, backgroundColor, className }: BannerProps) => {
  return (
    <section className="banner" style={{ backgroundColor: backgroundColor || '#3498db' }} >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="banner-content col-md-6">
            <h5 className="banner-subheading">{subheading}</h5>
            <h1 className={`banner-heading ${className}`}>{heading}</h1>
            <p className={`banner-description ${className}`}>{description}</p>
            <Proposalform />
          </div>

          <div className="banner-image col-md-6 text-center">
            <Image
              src={imageUrl}
              alt="banner"
              width={400}
              height={100}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;