import React from 'react';

const Card = ({ title, content, children }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">{title}</h2>
      <p className="text-gray-300 mb-6">{content}</p>
      {children}
    </div>
  );
};

const Details = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
        {/* Global Reach and Project Success */}
        <Card
          title="Global Reach and Project Success"
          content="Discover our success: numerous projects in multiple countries, serving a diverse and growing clientele."
        >
          <div className="grid grid-cols-3 gap-4 text-center mt-8">
            <div>
              <p className="text-blue-400 text-4xl font-bold">100+</p>
              <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
            </div>
            <div>
              <p className="text-blue-400 text-4xl font-bold">4+</p>
              <p className="text-gray-400 text-sm mt-2">Years Of Experience</p>
            </div>
            <div>
              <p className="text-blue-400 text-4xl font-bold">5+</p>
              <p className="text-gray-400 text-sm mt-2">Countries Served</p>
            </div>
          </div>
        </Card>

        {/* Methodologies We Use */}
        <Card
          title="Methodologies We Use"
          content="We employ industry-leading methodologies to ensure optimal results."
        >
          <div className="flex justify-center items-center space-x-12 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-blue-400 flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-300 text-lg"></span>
              </div>
              <p className="text-gray-400 text-sm">Scrum</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-blue-400 flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-300 text-lg"></span>
              </div>
              <p className="text-gray-400 text-sm">Design Thinking</p>
            </div>
          </div>
        </Card>

        {/* Stacks We Use */}
        <div className="md:col-span-2">
          <Card
            title="Stacks We Use"
            content="We leverage a comprehensive and modern technology stack, utilizing cutting-edge tools and platforms to deliver high performance, scalability, and reliability in all our projects."
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 justify-items-center mt-8">
              {/* Replace with your actual image paths or icons */}
              {[
                "Pr", "PostgreSQL", "Firebase", "AWS", "React", "jQuery", "Visual Studio Code", "Android",
                "Adobe XD", "PHP", "Figma", "Jira", "GitHub", "Python", "Node.js", "npm"
              ].map((stack, index) => (
                <div key={index} className="w-12 h-12 flex items-center justify-center">
                  <span className="text-gray-400 text-2xl font-bold">{stack.charAt(0)}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Details;