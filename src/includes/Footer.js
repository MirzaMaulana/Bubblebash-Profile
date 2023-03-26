import React from "react";

function Footer() {
  return (
    <footer className="py-24 grid grid-cols-2 gap-6 justify-items-center max-w-5xl mx-auto inset-x-0 bottom-0">
      <div>
        <div className="flex mb-4">
          <img src="/Vector.png" alt="logo" className="w-10 h-10 mr-3" />
          <span className="text-lg font-semibold mt-2 ">Bubblebash</span>
        </div>
        <p className="text-gray-500 mb-4">
          Introducing, We are Bubble Bash digital agency company with <br />
          more than 6 years of experience. We are committed to serve
          <br /> with all our heart
        </p>
        <div className="flex text-2xl space-x-5">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-instagram"></i>
        </div>
      </div>
      <ul className="list-unstyled row flex space-x-28">
        <li className="col-sm-4">
          <h5 className="font-bold mb-3">Pages</h5>
          <ul>
            <li className="text-gray-500 mb-2">Home</li>
            <li className="text-gray-500 mb-2">Our Service</li>
            <li className="text-gray-500 mb-2">Portfolio</li>
            <li className="text-gray-500 mb-2">Testimonial</li>
            <li className="text-gray-500 mb-2">Contact Us</li>
          </ul>
        </li>
        <li className="col-sm-4">
          <h5 className="font-bold mb-3">Explore</h5>
          <ul>
            <li className="text-gray-500 mb-2">Resource</li>
            <li className="text-gray-500 mb-2">Blog</li>
            <li className="text-gray-500 mb-2">Documents</li>
          </ul>
        </li>
        <li className="col-sm-4">
          <h5 className="font-bold mb-3">Company</h5>
          <ul>
            <li className="text-gray-500 mb-2">About Us</li>
            <li className="text-gray-500 mb-2">Partners</li>
            <li className="text-gray-500 mb-2">Customers</li>
            <li className="text-gray-500 mb-2">Contact Us</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
