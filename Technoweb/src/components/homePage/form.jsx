import React, { useEffect, useRef, useState } from 'react';

const Form = () => {
  const circlesRef = useRef([]);
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress when section is in view
        const progress = Math.min(0, Math.max(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#323235] text-white min-h-screen flex items-center  py-16 px-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight justify-center">
            Ready to Elevate Your Digital Journey?
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-blue-400 justify-start">
            Contact form
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Animated Circles */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative h-80">
            {[0, 1, 2].map((_, i) => {
              // Calculate dynamic positioning based on scroll
              const baseOffset = (i - 1) * 80; // Base spacing
              const scrollOffset = scrollProgress * 100 * (i === 1 ? 0 : i === 0 ? -1 : 1); // Outer circles move apart
              const finalOffset = baseOffset + scrollOffset;
              
              return (
                <div
                  key={i}
                  className="absolute transition-transform duration-300 ease-out"
                  style={{ 
                    transform: `translateX(${finalOffset}px)`,
                  }}
                >
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-blue-400 flex items-center justify-center">
                    {/* Inner decorative element */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2 max-w-lg">
            <div className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-gray-300 text-sm mb-2">Full Name*</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-300 text-sm mb-2">Email*</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Phone and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-gray-300 text-sm mb-2">Phone*</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-300 text-sm mb-2">Select Service *</label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer">
                    <option value="" className="bg-gray-800">Choose a service</option>
                    <option value="web-development" className="bg-gray-800">Web Development</option>
                    <option value="mobile-app" className="bg-gray-800">Mobile App Development</option>
                    <option value="ui-ux" className="bg-gray-800">UI/UX Design</option>
                    <option value="digital-marketing" className="bg-gray-800">Digital Marketing</option>
                    <option value="consulting" className="bg-gray-800">Consulting</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-transparent border-2 border-blue-400 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;