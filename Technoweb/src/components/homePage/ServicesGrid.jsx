// ServicesGrid.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "Our expert team at (Company name) Technologies Pvt. Ltd. crafts stunning, responsive websites designed to engage your audience and drive business growth. Whether you need a simple static site or a complex e-commerce platform, we’ve got you covered.",
    tags: ["Static Website", "Dynamic Website", "CMS Based Website", "Ecommerce"],
    icon: "🌐",
  },
  {
    title: "Mobile Application Development",
    desc: "(Company) Technologies Pvt. Ltd. offers top-notch mobile app development for iOS and Android platforms, delivering user-friendly, high-performance apps that cater to your business needs.",
    tags: ["Android Application", "iOS Application", "Native App", "Cross Platform App", "Enterprise Mobile App", "Progressive Web App"],
    icon: "📱",
  },
  {
    title: "Software Development",
    desc: "At (Company Name) Technologies Pvt. Ltd., we provide tailored software development solutions that streamline your business processes, enhance productivity, and give you a competitive edge. Our expert team leverages the latest technologies to deliver scalable and reliable software.",
    tags: ["Custom Software Development", "Enterprise Software", "Desktop Application Development"],
    icon: "💻",
  },
  {
    title: "UI & UX Design",
    desc: "At TrickyDot Technologies Pvt. Ltd, we specialize in crafting seamless and visually appealing user interfaces and experiences that enhance user satisfaction and drive engagement.",
    tags: ["User Research and Analysis", "Wireframing and Prototyping", "User Interface (UI) Design", "User Experience (UX) Design"],
    icon: "🎨",
  },
  {
    title: "Artificial Intelligence Development",
    desc: "(Company) Technologies Pvt. Ltd. provides comprehensive AI development services, utilizing the latest technologies in machine learning, natural language processing, and computer vision to create intelligent applications that enhance business performance and user experience.",
    tags: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotic Process Automation", "Custom AI Solutions"],
    icon: "🤖",
  },
  {
    title: "ERP Development",
    desc: "(Company) Technologies Pvt. Ltd. offers end-to-end ERP development services that unify your business processes, providing real-time insights and improved operational control to drive growth and efficiency.",
    tags: ["Business Process Analysis", "User Training and Support", "Custom ERP Development"],
    icon: "📊",
  },
  {
    title: "Digital Marketing",
    desc: "At (Company Name) Technologies Pvt. Ltd, we help businesses grow their online presence with powerful digital strategies. From ranking your website on Google to building engaging social media campaigns, we ensure your brand stands out and connects with the right audience.",
    tags: ["SEO (Search Engine Optimization)", "Social Media Marketing", "Events & Graphic Design", "Content Strategy", "Analytics & Reporting"],
    icon: "📢",
  },
  {
    title: "IT Consulting Services",
    desc: "(Company) Technologies Pvt. Ltd. offers comprehensive IT consulting services to help businesses harness the power of technology. Our experts provide strategic guidance, system integration, and IT infrastructure optimization to enhance performance and achieve your business objectives.",
    tags: ["IT Strategy and Planning", "System Integration", "Digital Transformation", "Cloud Services", "IT Project Management"],
    icon: "🛠️",
  },
];

const ServicesGrid = () => {
  return (
    <div className="bg-[#232325] min-h-screen px-6 py-12">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#323235] p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 flex items-center justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-3 text-blue-600 text-center">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 text-center">{service.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition mt-auto justify-center">
              Know More <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
