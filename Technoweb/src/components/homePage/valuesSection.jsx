import React from "react";

const values = [
  {
    id: "01",
    title: "Business",
    highlight: "Empowering",
    desc: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
  },
  {
    id: "02",
    title: "Business",
    highlight: "Innovating",
    desc: "Focus on what makes the business unique and how users can benefit from choosing it. Showcase your brand identity with clarity.",
  },
  {
    id: "03",
    title: "Business",
    highlight: "Sustaining",
    desc: "Highlight long-term values, consistent performance, and reliability that creates lasting trust with your customers.",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative w-full bg-[#323235] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-5xl font-regular">
            Our <span className="text-blue-500">Values</span>
          </h2>

          {/* Small Cards on the Right */}
          <div className="flex gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-24 border border-blue-500/40 rounded-md"
              ></div>
            ))}
          </div>
        </div>

        {/* Scrolling Cards */}
        <div className="h-[300vh] relative">
          {values.map((v) => (
            <div
              key={v.id}
              className="sticky top-40 flex justify-end "
            >
              <div className="bg-[#232325] p-8 w-[65vh] h-[60vh]  shadow-md">
                <div className="text-gray-400 text-sm mb-4">{v.id}</div>
                <h3 className="text-3xl mb-6">
                  {v.title}{" "}
                  <span className="text-blue-500">{v.highlight}</span>
                </h3>
                <p className="text-gray-300 text-md">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
