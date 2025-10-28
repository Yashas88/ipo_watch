import React from 'react';
import logo from "/src/assets/images/ipowatch-logo.jpeg";

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
            <li className="nav-item"><a className="nav-link" href="#">IPO GMP</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Upcoming IPO</a></li>
            <li className="nav-item"><a className="nav-link" href="#">IPO Subscription</a></li>
            <li className="nav-item"><a className="nav-link" href="#">IPO Allotment</a></li>
            <li className="nav-item"><a className="nav-link" href="#">SME IPO</a></li>
            <li className="nav-item"><a className="nav-link" href="#">IPO Review</a></li>
            <li className="nav-item"><a className="nav-link" href="#">IPO Forms</a></li>
            <li className="nav-item"><a className="nav-link" href="#">IPO Listing</a></li>
          </ul>
          {/* Right Buttons */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
            <a href="#" className="btn btn-light me-2 px-2">
              <img src="/playstore-icon.png" alt="Play Store" style={{ height: 24 }} />
            </a>
            <a href="#" className="btn btn-primary me-2">Ads</a>
            <a href="#" className="btn btn-success">Demat</a>
          </div>
        </div>
        </div>
    </nav>
  );
}
export default Navbar;
