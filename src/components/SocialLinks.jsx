import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:raqeebclicks@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Chat on WhatsApp <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/923165499711", // Correct format for WhatsApp
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/raqeebclicks/",
    },
    {
      id: 4,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/raqeebclicks",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
