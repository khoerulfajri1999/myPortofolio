import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container ">
        <a className="navbar-brand text-3xl text-[#002939]" href="#">
          <span>MY</span>Porto.
        </a>
      </div>
    </nav>
  );
};
