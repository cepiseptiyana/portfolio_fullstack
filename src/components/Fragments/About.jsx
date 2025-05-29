// local modules
import { hand, aboutMe } from "../../assets/index.js";
// third party modules
import { useState } from "react";

const About = (props) => {
  const { aboutRef } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.pageX - (rect.left + window.scrollX);
    const y = e.pageY - (rect.top + window.scrollY);
    setPosition({ x, y });
  };

  return (
    <>
      <section
        ref={aboutRef}
        className="section_about pt-5 relative z-2 flex justify-center"
      >
        {/* about text */}
        <div className="2xl:w-[65%] w-[100%] flex flex-col items-center relative z-3">
          <h1 className="text-white font-bold md:text-4xl text-2xl md:px-8 px-8 py-1 bg-cyan-500 shadow-md shadow-white rounded-xl">
            ABOUT ME
          </h1>
          <p className="text-white italic">steps</p>
          {/* step_1 */}
          <div className="md:w-[70%] w-[100%] flex justify-start pt-10">
            <div className="lg:pl-25 pl-13 py-7 sm:w-[50%] w-[70%] rounded-l-[50%] border-3 border-white border-r-0">
              <p className="text-white md:text-md sm:text-sm text-xs font-sans">
                Saya adalah seorang Front-End Web Developer dengan pengalaman
                lebih dari 2 tahun dalam membangun website dan aplikasi web yang
                fungsional serta menarik secara visual. Spesialisasi saya
                meliputi pengembangan antarmuka responsif, optimasi performa
                situs, serta integrasi API. Saya terbiasa bekerja dengan tim
                lintas fungsi dan mengutamakan pengalaman pengguna (UX) dalam
                setiap proyek. Beberapa teknologi yang saya gunakan setiap hari:
                - HTML5, CSS3 (Tailwind) - JavaScript (ES6+), React.js, Next.js
                - Git, GitHub - REST API, JSON - Figma (untuk kolaborasi desain)
              </p>
            </div>
          </div>

          {/* step_2 */}
          <div className="md:w-[70%] w-[100%] flex justify-end relative top-[-3px]">
            <div className="lg:pr-25 pr-10 py-7 w-[50%] text-white flex flex-col items-end rounded-r-[50%] border-3 border-white border-l-0">
              <h1 className="uppercase w-fit md:px-8 px-8 py-1 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl bg-green-500 shadow-md shadow-white rounded-xl">
                education
              </h1>
              <h1 className="font-bold md:text-lg text-md">
                universitas terbuka
              </h1>
              <p className="md:text-md sm:text-sm text-xs font-sans">
                sistem informasi
              </p>
              <p className="md:text-md sm:text-sm text-xs font-sans">
                semster 7
              </p>
              <p className="md:text-md sm:text-sm text-xs font-sans">ipk 2,7</p>
            </div>
          </div>

          {/* step_3 */}
          <div className="md:w-[70%] w-[100%] flex justify-start relative sm:top-[-6px]">
            <div className="lg:pl-25 sm:pl-13 py-7 sm:w-[70%] w-[100%] rounded-l-[50%] sm:border-3 sm:border-white sm:border-r-0 text-white">
              <h1
                onMouseMove={handleMouseMove}
                style={{
                  "--x": `${position.x}px`,
                  "--y": `${position.y}px`,
                  background:
                    "radial-gradient(circle at var(--x) var(--y),rgb(255, 0, 0),transparent 50%)",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "100px",
                  backgroundSize: "100% 100%",
                  opacity: "1",
                }}
                className="uppercase font-sans font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center"
              >
                my skill
              </h1>

              <div className="text-black md:text-md sm:text-sm text-xs flex justify-center items-center flex-wrap gap-5 pt-3 font-sans">
                <h1 className="bg-orange-500 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  html
                </h1>
                <h1 className="bg-blue-500 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  css
                </h1>
                <h1 className="bg-yellow-300 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  javascript
                </h1>
                <h1 className="bg-blue-300 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  react js
                </h1>
                <h1 className="bg-orange-600 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  git
                </h1>
                <h1 className="bg-gray-500 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  github
                </h1>
                <h1 className="bg-red-400 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  react router
                </h1>
                <h1 className="bg-green-700 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  vitest
                </h1>
                <h1 className="bg-red-500 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  react testing library
                </h1>
                <h1 className="bg-gray-400 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  responsive design
                </h1>
                <h1 className="bg-yellow-400 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  pinia
                </h1>
                <h1 className="bg-blue-500 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  tailwinds
                </h1>
                <h1 className="bg-gray-500 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  atomic design
                </h1>
                <h1 className="bg-blue-500 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duratio-300">
                  bootstrap
                </h1>
              </div>
            </div>
          </div>

          {/* step_4 */}
          <div className="md:w-[70%] w-[100%] flex justify-end relative top-[-9px]">
            <div className="lg:pr-25 pr-10 py-7 w-[50%] text-white flex flex-col items-end rounded-r-[50%] border-3 border-white border-l-0">
              <h1 className="uppercase w-fit md:px-8 px-8 py-1 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl bg-green-500 shadow-md shadow-white rounded-xl">
                Project
              </h1>
              <ul className="pt-2 text-center md:text-md sm:text-sm text-xs">
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://cepiseptiyana.github.io/Pangcuy/")
                  }
                  className="mt-2 bg-blue-500 rounded-xl px-2 capitalize text-white cursor-pointer hover:bg-gray-300 hover:text-blue-600 transition-all duration-200"
                >
                  e-commerce pangsit
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://cepiseptiyana.github.io/reactMv/")
                  }
                  className="mt-2 bg-blue-500 rounded-xl px-2 capitalize text-white cursor-pointer hover:bg-gray-300 hover:text-blue-600 transition-all duration-200"
                >
                  website Movies Details
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* blob */}
        <div className="wrapper__blob z-1">
          <div className="blob"></div>
        </div>

        {/* hand */}
        {/* <div className="absolute inset-0 flex justify-center items-center z-2">
          <img className="rotate-[-45deg]" src={hand} alt="" />
        </div> */}
      </section>
    </>
  );
};

export default About;
