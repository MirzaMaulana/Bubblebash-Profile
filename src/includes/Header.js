import React from "react";
import "./Header.css";

function Header() {
  return (
    <section id="header">
      <nav className="flex max-w-6xl mx-auto justify-between py-4 px-16">
        <div id="brand" className="flex">
          <img src="/Vector.png" alt="logo" className="w-7 h-7" />
          <p className="text-lg mx-2 text-white">Bubble Bash</p>
        </div>
        <ul className="flex justify-end space-x-6">
          <li>
            <a href="#Home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#Service" className="text-white hover:text-gray-400">
              Our Services
            </a>
          </li>
          <li>
            <a href="#Portfolio" className="text-white hover:text-gray-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#Testimonial" className="text-white hover:text-gray-400">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-white hover:text-gray-400">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div id="habbit" className="max-w-6xl mx-auto text-center">
        <h1 className="mt-24 text-6xl text-white font-bold">
          Create Amazing Digital Product <br /> For Your Business
        </h1>
        <p className="text-white mt-6 font-light text-gray-300">
          We are a professional digital agency that has been established since
          2016, we present a variety of <br /> digital services that can help
          you solve problems in your business
        </p>
        <button className="bg-white hover:bg-gray-500 mt-5 py-3 px-6 text-lg font-semibold">
          Get Started <i class="ml-2 bi bi-arrow-right"></i>
        </button>
      </div>
      <div>
        <img src="/main.png" alt="mainimg" className="main-img mt-20 m-auto" />
        <div className="grid text-center grid-cols-4 gap-10 max-w-4xl mx-auto my-8">
          <div>
            <h3 className="text-3xl font-semibold">1.2K+</h3>
            <p className="text-gray-500">Happy Client</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">1.1K+</h3>
            <p className="text-gray-500">WorldWide Client</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">6+</h3>
            <p className="text-gray-500">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">12</h3>
            <p className="text-gray-500">Award Winners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
