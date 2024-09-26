// import React from "react";
// import first from "../assets/portfolio/first.jpeg";
// import second from "../assets/portfolio/second.jpeg";
// import third from "../assets/portfolio/third.jpeg";
// import fourth from "../assets/portfolio/fourth.jpeg";
// import fifth from "../assets/portfolio/fifth.jpeg";
// import sixth from "../assets/portfolio/sixth.jpeg";

import A101 from "../assets/portfolio/A101.png";
import A102 from "../assets/portfolio/A102.png";
import A103 from "../assets/portfolio/A103.png";
import A104 from "../assets/portfolio/A104.png";
import A105 from "../assets/portfolio/A105.png";
import A106 from "../assets/portfolio/A106.png";
import A107 from "../assets/portfolio/A107.png";
import A108 from "../assets/portfolio/A108.png";
import A109 from "../assets/portfolio/A109.png";

const Portfolio = () => {
  const portfolio = [
    { id: 1, src: A101, path: "https://cleverfoxeducation.com.au/" },
    { id: 2, src: A102, path: "https://www.aestheticpassion.com.au/" },
    { id: 3, src: A103, path: "https://feelgoodedibles.com/" },
    { id: 4, src: A104, path: "https://dtbpumps.com/" },
    { id: 5, src: A105, path: "https://incubatedigital.com.au/" },
    { id: 6, src: A106, path: "https://myvirtualtribe.com/" },
    { id: 7, src: A107, path: "https://desertheroesteam.com/" },
    { id: 8, src: A108, path: "https://moversbythesea.com/" },
    { id: 9, src: A109, path: "https://quraniccenter.com/" },
  ];

  return (
    <div name="portfolio" className="w-full h-auto bg-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, path }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                className="rounded-md duration-200 hover:scale-105 w-full h-48"
                alt="Portfolio"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 bg-gray-700 hover:bg-gray-600 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <a
                  href={path}
                  target="_blank"
                  className=" m-1 rounded-md w-1/2 px-6 py-3 bg-cyan-700 hover:bg-cyan-600 duration-200 hover:scale-105"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
