import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer section-margin pt-5 mt-28">
      <div className="container">
        <div className="row">
          <div className="col1 text-center">
            <h3 className="footer-brand">
              <span>MY</span>Porto.
            </h3>
            <div className="icon-footer mt-3">
              <a href="https://wa.me/628976488886">
                <i class="bx bxl-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/khoerul-fajri-93698a229/">
                <i class="bx bxl-linkedin-square"></i>
              </a>
              <a href="khoerulfajri.jobs@gmail.com">
                <i class="bx bxl-gmail"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col6 text-center">
            <p className="text-white mb-4">
              &copy;Copyright 2021 All Right Reserve | Built by{' '}
              <a href="#">Khoerul Fajri</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
