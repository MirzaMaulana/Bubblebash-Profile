import React from "react";

function Contact() {
  return (
    <section id="Contact" className="mt-24  mx-auto inset-x-0 bottom-0">
      <div className="max-w-6xl py-20 mx-auto text-center">
        <h1 className="text-4xl text-white font-bold">
          Have a project idea and
          <br /> want to make it come true?
        </h1>
        <p className="text-white mt-6 font-light text-gray-300">
          Please contact us and we will discuss about your project, don't forget
          we are <br /> always here for you
        </p>
        <button className="bg-white hover:bg-gray-500 mt-5 py-3 px-6 text-lg font-semibold">
          Contact Us <i class="ml-2 bi bi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Contact;
