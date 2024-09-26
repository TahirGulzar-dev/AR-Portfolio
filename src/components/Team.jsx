import React from "react";
import { FaUserTie } from "react-icons/fa"; // You can replace this with custom icons if you have them.

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Aqib",
      role: "Frontend Developer",
      description:
        "Expert in building responsive, accessible, and dynamic UIs using React, Tailwind CSS, and modern JavaScript frameworks.",
    },
    {
      id: 2,
      name: "Samama Farooq",
      role: "Backend Developer",
      description:
        "Skilled in designing scalable RESTful APIs and databases with Node.js, Express, and MongoDB, ensuring security and performance.",
    },
    {
      id: 3,
      name: "Tahir Gulzar",
      role: "MERN Stack Developer",
      description:
        "Experienced in full-stack development, proficient in building complete web applications using the MERN stack (MongoDB, Express, React, Node.js).",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-12 text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Meet My Team
          </p>
          <p className="py-6">Here are the amazing people I work with:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {teamMembers.map(({ id, name, role, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4">
              <div className="flex justify-center mb-4">
                <FaUserTie size={40} className="text-cyan-500" />
              </div>
              <h3 className="text-2xl font-semibold text-center">{name}</h3>
              <p className="text-center text-gray-400">{role}</p>
              <p className="text-center mt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
