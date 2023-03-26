import React from "react";

function Service() {
  const services = [
    {
      imageSrc: "/image/icon/FigmaLogo.png",
      title: "UI/UX Designer",
      description:
        "We are ready to make your website more friendly and efficient in the eyes of users",
    },
    {
      imageSrc: "/image/icon/Code.png",
      title: "Web Development",
      description:
        "Want to create a website that has many features? We have the answer for you.",
    },
    {
      imageSrc: "/image/icon/ArticleMedium.png",
      title: "Content Writer",
      description:
        "We provide interesting content and can attract customers for you",
    },
    {
      imageSrc: "/image/icon/PresentationChart.png",
      title: "Branding",
      description:
        "Create visual branding with amazing result, you just sit back and relax",
    },
    {
      imageSrc: "/image/icon/VideoCamera.png",
      title: "Editing Video",
      description:
        "Want to create a website that has many features? We have the answer for you.",
    },
    {
      imageSrc: "/image/icon/PenNib.png",
      title: "Illustration",
      description:
        "Create beauty illustration as you need, and make it interesting",
    },
  ];

  return (
    <section id="Service" className="my-8 max-w-5xl mx-auto inset-x-0 bottom-0">
      <p className="text-lg">Our Services</p>
      <h2 className="text-3xl font-bold">We Provide What You Need</h2>
      <div className="mt-10 grid grid-cols-3 gap-14 justify-items-center">
        {services.map((service, index) => (
          <div key={index} className="w-64 px-4 py-10 text-center shadow-lg">
            <img
              src={service.imageSrc}
              alt={service.title}
              className="mx-auto mb-3"
            />
            <h4 className="text-xl mb-2">{service.title}</h4>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Service;
