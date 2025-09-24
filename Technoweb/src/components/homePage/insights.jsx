import React, { useState, useEffect } from 'react';

const Insights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const insights = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      author: 'Ritesh Patil',
      date: 'July 11, 2025',
      title: 'Microinteractions: The Small Details That Define Great',
      highlight: 'UX',
      tags: ['Interaction Design', 'Microinteractions'],
      description: "It's the little things that make a big difference. From button animations to hover effects, explore how microinteractions shape intuitive user experiences and keep users engaged. Designing with intuition can only take you so far. The true magic happens when data and design work hand-in-hand. In today's digital product landscape, every click, scroll, or bounce tells a story—and great designers are learning how to listen the overall user journey. Traditional every click, scroll, or bounce tells a story—and great designers are learning how to listen the overall user jo"
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      author: 'Sarah Johnson',
      date: 'July 8, 2025',
      title: 'The Future of Web Design: Trends and',
      highlight: 'Innovation',
      tags: ['Web Design', 'Trends'],
      description: "Stay ahead of the curve with the latest web design trends that are shaping the digital landscape. From minimalist interfaces to bold typography, discover what makes modern websites stand out. Learn how to implement these trends effectively while maintaining usability and accessibility. The evolution of web design continues to push boundaries, creating more engaging and interactive user experiences that captivate audiences and drive conversions."
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      author: 'Michael Chen',
      date: 'July 5, 2025',
      title: 'Building Scalable Design Systems for',
      highlight: 'Enterprise',
      tags: ['Design Systems', 'Enterprise'],
      description: "Learn how to create robust design systems that scale across large organizations. From component libraries to documentation standards, explore the essential elements that make design systems successful. Discover best practices for collaboration between design and development teams, ensuring consistency and efficiency across multiple projects and platforms while maintaining brand integrity."
    }
  ];

  // Auto-change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % insights.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [insights.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const currentInsight = insights[currentSlide];

  return (
    <div className="bg-[#F0F0F0] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Discover <span className="text-blue-500">Our Insights</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={currentInsight.image}
                alt={currentInsight.title}
                className="w-full h-80 object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            {/* Author and Date */}
            <div className="flex items-center text-gray-600 text-sm space-x-4">
              <span>{currentInsight.author}</span>
              <span>•</span>
              <span>{currentInsight.date}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {currentInsight.title}{' '}
              <span className="text-blue-500">{currentInsight.highlight}</span>
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {currentInsight.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {currentInsight.description}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-12">
          {/* Dots Indicator */}
          <div className="flex space-x-3">
            {insights.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* All Insights Button */}
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 group">
            All Insights
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insights;