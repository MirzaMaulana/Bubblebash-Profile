import React from "react";
function Testimoni() {
  const reviews = [
    {
      title: "Website My Hospital",
      comment:
        "Very nice to work with Bubble Bash, a reliable and responsive team is very helpful",
      foto: "/image/potoprofile/Cewek.jpg",
      name: "Katty Clock",
      jabatan: "CEO My Hospital",
    },
    {
      title: "Logo F&B Corp",
      comment:
        "Really the best service we've ever gotten, really looking forward to the next projectl",
      foto: "/image/potoprofile/Xiangling.jpg",
      name: "John Robert",
      jabatan: "CEO Hotcow",
    },
    {
      title: "Supermarket Mobile Apps",
      comment:
        "The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?",
      foto: "/image/potoprofile/Krabs.png",
      name: "Ricardo Milos",
      jabatan: "CEO IndoApril",
    },
  ];
  return (
    <section
      id="Testimoni"
      className="my-8 max-w-5xl mx-auto inset-x-0 bottom-0"
    >
      <p className="text-lg">Client Reviews</p>
      <h2 className="text-3xl font-bold">What Our Happy Client Say About Us</h2>
      <div className="mt-10 grid grid-cols-3 gap-14 justify-items-center">
        {reviews.map((review, index) => (
          <div key={index} className="w-80 px-4 p-5 border-2 border-black">
            <h4 className="text-xl mb-2 font-semibold">{review.title}</h4>
            <p className="text-gray-500">{review.comment}</p>
            <div className="flex mt-4">
              <img
                src={review.foto}
                alt={review.title}
                className=" rounded-full w-12 h-12"
              />
              <div className="mx-2">
                <h4 className="text-lg">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.jabatan}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimoni;
