import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div>
    <footer className="text-light pt-5 pb-4 footer-background">
      <div className="container">
        <div className="row gy-4">
          {/* Follow Us */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Follow Us</h5>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              width="160"
              className="mb-3"
            />

            <p className="small mb-0">Rated by 5,000+ Users</p>
          </div>

          {/* IPO Updates */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">IPO UPDATES</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  IPO GMP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Upcoming IPO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Upcoming SME IPO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  IPO Allotment Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  New IPO Listing
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none d-block">
                  IPO Review & Rating
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  IPO Performance Tracker
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  IPO Allotment Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  BSE & NSE Holidays
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Diwali Muhurat Timing
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none d-block">
                  Biggest IPOs In India
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Advertise With Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Term Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none d-block">
                  IPO FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>

<div className="container my- p-3">
    <p className="text-center small text-secondary mb-0">
          Disclaimer: Stock Market investments are subject to market risks, read
          all scheme-related documents carefully before investing. All the
          information provided on IPO Watch is for education purposes only. The
          information is sourced from different sources and we do not claim any
          facts, and figures mentioned here. We are not SEBI registered. We have
          an affiliated partnership with brokers. We do not offer any stock tips
          and influence investors to invest in the stock market, IPO, crypto, or
          any other investments. We provide up-to-date IPO information for IPO
          investors and visitors on our Website and App. Copyright © 2016-2025
          Samyakta Digisol Pvt Ltd (IPO Watch) All Right Reserved.
        </p>
        </div>
        </div>
  );
};

export default Footer;
