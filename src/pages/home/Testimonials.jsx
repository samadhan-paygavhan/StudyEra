import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Arjun Sharma",
      role: "BCA Student",
      text: "StudyEra helped me clear my Python concepts for my final year project. The structure is amazing!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    },
    {
      name: "Sneha Patil",
      role: "Full Stack Learner",
      text: "The MERN stack roadmap is the best I've found online. Very easy to follow and professional.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    },
    {
      name: "Rahul Verma",
      role: "ML Enthusiast",
      text: "The AI courses here are top-notch. I highly recommend StudyEra to all my college friends.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    },
  ];

  return (
    <section className="bg-[#fcfcfd] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#313131] text-3xl md:text-4xl font-black mb-4">
          Trusted by &nbsp;
          <span className="text-[#483D8B]">Thousands of Students</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here is what our community has to say
          about their learning journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#e5e5ea] p-8 rounded-2xl border border-gray-700 hover:border-[#483D8B] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-[#483D8B] bg-[#1A1939]"
                />
                <div className="text-left">
                  <h4 className="text-black font-bold">{review.name}</h4>
                  <p className="text-[#483D8B] text-xs font-semibold uppercase">
                    {review.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-500 italic text-left leading-relaxed">
                "{review.text}"
              </p>

              <div className="mt-6 w-10 h-1 bg-[#483D8B] rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
