import React from 'react';
import logo from "/src/assets/images/ipowatch-logo.jpeg";
import playstore from "/src/assets/images/playstore.png"

function Navbar() {
  //  <h1>jhfs</h1>
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        {/* Brand/Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="IPOwatch"
            height="40"
            className="me-2"
          />
         
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ipo-navbar"
          aria-controls="ipo-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="ipo-navbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="https://ipowatch.in/ipo-grey-market-premium-latest-ipo-gmp/">IPO GMP</a></li>
            <li className="nav-item"><a className="nav-link" href="https://ipowatch.in/upcoming-ipo-calendar-ipo-list/">Upcoming IPO</a></li>
            <li className="nav-item"><a className="nav-link" href="https://ipowatch.in/ipo-subscription-status-today/">IPO Subscription</a></li>
            <li className="nav-item"><a className="nav-link" href="https://ipowatch.in/ipo-allotment-status-how-to-check/">IPO Allotment</a></li>
            <li className="nav-item"><a className="nav-link" href="https://ipowatch.in/upcoming-sme-ipo-calendar-list/">SME IPO</a></li>
            <li className="nav-item"><a className="nav-link" href="https://ipowatch.in/ipo-review/">IPO Review</a></li>
            <li className="nav-item"><a className="nav-link" href="https://ipowatch.in/ipo-forms-download-ipo-application-asba-form/">IPO Forms</a></li>
            <li className="nav-item"><a className="nav-link" href="https://ipowatch.in/new-ipo-listing-today-ipo-listing-date/">IPO Listing</a></li>
          </ul>
          {/* Right Buttons */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
            <a href="https://play.google.com/store/apps/details?id=com.watch.ipo_watch" className="btn btn-light me-2 px-2">
              <img src={playstore} alt="Play Store" style={{ height: 24 }} />
            </a>
            <a href="https://ipowatch.in/advertise-with-us/" className="btn btn-primary me-2">Ads</a>
            <a href="https://zerodha.com/open-account?c=ZMPZQH" className="btn btn-success">Demat</a>
          </div>
        </div>
        </div>
    </nav>
  );
}
export default Navbar;
