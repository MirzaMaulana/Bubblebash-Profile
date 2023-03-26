import React from "react";
function Project() {
  const projects = [
    {
      image: "/image/project/Hospital.png",
      title: "Website My Hospital",
      description:
        "Create a hospital website with patient, doctor, and drug logistics features that help hospital operations",
    },
    {
      image: "/image/project/Food.png",
      title: "Food & Beverages Corp Logo",
      description:
        "Create a logo for a food & beverage company, with emphasis on aesthetics and user requests",
    },
    {
      image: "/image/project/Supermarket.png",
      title: "Supermarket Mobile Apps",
      description:
        "Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features",
    },
  ];

  return (
    <section
      id="Project"
      className="mt-20 mb-8 max-w-5xl mx-auto inset-x-0 bottom-0"
    >
      <p className="text-lg">Our Portfolio</p>
      <h2 className="text-3xl font-bold">Recent Project</h2>
      <div className="mt-6 grid grid-cols-3 justify-items-center gap-14">
        {projects.map((project, index) => (
          <div key={index} className="w-80 py-10">
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto mb-3"
            />
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-500">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Project;
