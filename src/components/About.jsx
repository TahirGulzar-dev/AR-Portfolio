import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg sm:text-xl mt-10">
          As a full-stack developer, I work on both the front-end and back-end
          of web applications to create dynamic and responsive sites that
          provide great user experiences. I use technologies like HTML, CSS, and
          JavaScript for the front end to design attractive and interactive
          interfaces.
        </p>
        <br />
        <p className="text-lg sm:text-xl">
          For the back end, I work with server-side languages such as Python,
          Ruby, and PHP to build strong and scalable applications. I am skilled
          in using databases and data formats like XML and JSON, which helps me
          manage data effectively and connect with different APIs.
        </p>
        <br />{" "}
        <p className="text-lg sm:text-xl">
          I believe in the power of teamwork. I enjoy solving problems and work
          closely with other teams to find creative solutions. Whether I’m
          working with designers to improve user experience or with product
          managers to meet business goals, I aim to deliver high-quality
          software that goes beyond expectations.
        </p>
        <br />{" "}
        <p className="text-lg sm:text-xl">
          I have a strong foundation in both front-end and back-end technologies
          and am always learning new tools and frameworks to keep up with
          industry changes. My goal is to use my skills in challenging projects
          that can make a difference in technology.
        </p>
      </div>
    </div>
  );
}

export default About;
