import React from "react";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-10 text-left"
      style={{
        backgroundImage: `url('https://i.postimg.cc/2S3C1Yvq/c0c55fb4354c54cc6815b38ba1b7d115ec70930b.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-3xl pt-28 md:pt-20">
        {/* Tagline */}
        <span className="inline-block px-3 md:px-4 py-1 mb-4 text-blue-600 border border-blue-600 rounded-full text-sm md:text-base lg:text-lg">
          Code . Create . Conquer
        </span>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-tight mb-4 font-poppins font-normal">
          We Create{" "}
          <span className="text-blue-600 font-semibold">Websites, Apps & Software </span>
          <span className="font-normal">to Power Your </span>
          <span className="font-semibold">Business Forward</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-700 max-w-xl md:max-w-2xl">
          At (Your Company Name) Technologies Pvt. Ltd., we craft smart, scalable,
          and user-friendly digital products. From responsive websites and mobile apps
          to custom software and automation, we help businesses grow, innovate, and stay ahead.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
