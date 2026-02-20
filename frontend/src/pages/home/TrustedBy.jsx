import React from "react";
import comLogo from "../../assets/images/comLogo";

const TrustedBy = () => {
  return (
    <section className="bg-[#fcfcfd] py-25 max-sm:py-17 flex flex-col items-center px-6 sm:px-12 lg:px-24">
      <h3 className="font-semibold text-gray-600 text-sm uppercase tracking-[0.2em] mb-10">
        Trusted by{" "}
        <span className="text-[#362b79] font-bold">Leading Tech Partners</span>
      </h3>

      <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-8 opacity-60">
        {comLogo.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index}`}
            className="h-6 sm:h-8 object-contain filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
