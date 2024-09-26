import React from "react";
import Raqeeb1 from "../assets/Raqeeb1.jpg";
import Raqeeb2 from "../assets/Raqeeb2.jpg";
import { MdArrowForwardIos } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            Full Stack Developer
          </h2>
          <p className="text-gray-50 py-4 max-w-md text-sm sm:text-lg">
            Eexperience in building and designing software, specializing in
            modern web technologies such as React, Tailwind CSS, Next.js, and
            MongoDB.I have expertise in Python, XML, JSON, and various other
            technologies that enhance my ability to deliver comprehensive and
            scalable solutions
          </p>

          <div className="flex items-center gap-3">
            <a
              href="mailto:raqeebclicks@gmail.com"
              className="group text-white w-fit px-4 py-2 md:px-6 md:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-900"
            >
              Get Quote
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowForwardIos size={25} className="ml-1" />
              </span>
            </a>
            <a className=" underline underline-offset-2 hover:text-blue-700 text-blue-500" target="_blank" href="https://www.upwork.com/freelancers/~01547b81afcfe8f382?s=1017484851352698948">
              services on upwork
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 ">
          <img
            src={Raqeeb2}
            alt="my profile picture"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

// // export default Home;
// import React from "react";
// import Raqeeb1 from "../assets/Raqeeb1.jpg";
// import Raqeeb2 from "../assets/Raqeeb2.jpg";
// import { MdArrowForwardIos } from "react-icons/md";

// const Home = () => {
//   return (
//     <div name="home" className="h-screen w-full bg-black">
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:px-8 lg:px-12 md:flex-row">
//         {/* Text Section */}
//         <div className="flex flex-col justify-center h-full text-center md:text-left">
//           <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
//             I'm a Full Stack Developer
//           </h2>
//           <p className="text-gray-300 py-4 max-w-md text-sm sm:text-lg">
//             I have 2 years of experience building and designing software,
//             specializing in modern web technologies such as React, Tailwind CSS,
//             Next.js, and MongoDB. I also have expertise in Python, XML, JSON,
//             and various other technologies that enhance my ability to deliver
//             comprehensive and scalable solutions.
//           </p>

//           <div className="mt-4">
//             <button className="group text-white w-fit px-5 py-3 md:px-6 md:py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-700">
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdArrowForwardIos size={25} className="ml-1" />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="mt-8 md:mt-0 flex justify-center">
//           <img
//             src={Raqeeb2}
//             alt="my profile"
//             className="rounded-2xl mx-auto w-3/4 sm:w-1/2 md:w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
