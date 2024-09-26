// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { FaWhatsapp } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const links = [
//     {
//       id: 1,
//       link: "home",
//       path: "/",
//     },
//     {
//       id: 2,
//       link: "about",
//       path: "/about",
//     },
//     {
//       id: 3,
//       link: "portfolio",
//       path: "/portfolio",
//     },
//     {
//       id: 4,
//       link: "experience",
//       path: "/experience",
//     },
//     {
//       id: 5,
//       link: "contact",
//       path: "/contact",
//     },
//   ];

//   return (
//     <div className="flex bg-gray-800 px-4 justify-between items-center w-full h-20 text-white ">
//       <div>
//         <Link to="/">
//           {" "}
//           <h1 className="text-5xl font-semibold ml-2 cursor-pointer">
//             Abdul Raqeeb
//           </h1>
//         </Link>
//       </div>
//       <div className="hidden lg:visible">
//         <p className="flex gap-2">
//           <FaWhatsapp className="mt-1" />
//           <span>+92 316 5499711</span>
//         </p>
//         <p className="flex gap-2">
//           <AiOutlineMail className="mt-1" />
//           <span>raqeebclicks@gmail.com</span>
//         </p>
//       </div>
//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex">
//         {links.map(({ id, link, path }) => (
//           <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-cyan-500 hover:scale-105 duration-200"
//           >
//             <Link to={path}>{link}</Link>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu Icon */}
//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {/* Mobile Navigation */}
//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden">
//           {links.map(({ id, link, path }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-4xl"
//             >
//               <Link
//                 to={path}
//                 onClick={() => setNav(false)} // Close menu on link click
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", path: "/" },
    { id: 2, link: "about", path: "/about" },
    { id: 3, link: "portfolio", path: "/portfolio" },
    { id: 4, link: "experience", path: "/experience" },
    { id: 5, link: "contact", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between w-full h-20 bg-gray-800 px-4 text-white">
      <Link to="/">
        <h1 className="text-5xl font-semibold ml-2 cursor-pointer">
          Abdul Raqeeb
        </h1>
      </Link>

      {/* Contacts - Only visible on medium and larger screens */}
      <div className="hidden lg:flex flex-col items-center gap-2">
        <p className="flex items-center gap-2">
          <FaWhatsapp className="mt-1" />
          <span>+92 316 5499711</span>
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineMail className="mt-1" />
          <span>raqeebclicks@gmail.com</span>
        </p>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-cyan-500 hover:scale-105 transition-transform duration-200"
          >
            <Link to={path}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to={path} onClick={() => setNav(false)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
