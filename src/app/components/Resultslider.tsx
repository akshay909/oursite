"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Resultslider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="resultsilder container-fluid mx-auto">
        <Slider {...settings}>
          <div className="resitem">

            <span>Trucks & Trailers</span>

            <div className="chall">
              <h4>Challenge</h4>
              <p>Increase quote forms for available trailers through paid advertising.</p>
            </div>

            <div className="approch">
              <h4>Approach</h4>
              <ul>
                <li>Monthly email newsletter</li>
                <li>Email promotion campaigns</li>
                <li>Content marketing through email</li>
              </ul>
            </div>

            <h6>600%</h6>
            <strong>increase in email leads</strong>
          </div>

          <div className="resitem">
            <span>Manufacturing</span>
            <div className="chall">
              <h4>Challenge</h4>
              <p>Increase quote forms for available trailers through paid advertising.</p>
            </div>

            <div className="approch">
              <h4>Approach</h4>
              <ul>
                <li>Monthly email newsletter</li>
                <li>Email promotion campaigns</li>
                <li>Content marketing through email</li>
              </ul>
            </div>

            <h6>600%</h6>
            <strong>increase in email leads</strong>
          </div>

          <div className="resitem">
            <span>Campground</span>
            <div className="chall">
              <h4>Challenge</h4>
              <p>Increase quote forms for available trailers through paid advertising.</p>
            </div>
            <div className="approch">
              <h4>Approach</h4>
              <ul>
                <li>Monthly email newsletter</li>
                <li>Email promotion campaigns</li>
                <li>Content marketing through email</li>
              </ul>
            </div>

            <h6>600%</h6>
            <strong>increase in email leads</strong>
          </div>

        </Slider>
      </div>
    </>
  );
}