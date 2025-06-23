// local modules
import { hand, aboutMe } from "../../assets/index.js";

// third party modules
import { useState } from "react";

// data
// skill
import { skills, education, profil, project } from "../../data/skills.js";

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
        <div className="w-[100%] flex flex-col items-center relative z-3">
          {/* step_1 */}
          <div className="md:w-[60%] w-[100%] flex justify-start">
            <div className="p-5 py-7">
              <h1 className="m-auto text-white w-fit font-bold md:text-4xl text-2xl md:px-8 px-8 py-1 bg-cyan-500 shadow-md shadow-white rounded-xl">
                ABOUT ME
              </h1>
              <p className="text-white italic text-center">steps</p>

              <p className="font-[Lato,sans-serif] md:text-lg sm:text-sm text-center pt-7 text-cyan-100">
                {profil}
              </p>
            </div>
          </div>

          {/* step_2 */}
          <div className="md:w-[70%] w-[100%]">
            <div className="p-5 py-7">
              <h1 className="m-auto text-white uppercase w-fit md:px-8 px-8 py-1 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl bg-green-500 shadow-md shadow-white rounded-xl">
                education
              </h1>

              {/* Education */}
              <Education />
            </div>
          </div>

          {/* step_3 */}
          <div className="md:w-[70%] w-[100%]">
            <div className="py-10">
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
                className="uppercase font-sans font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center text-white"
              >
                my skill
              </h1>

              {/* skills */}
              <Skill />
            </div>
          </div>

          {/* step_4 */}
          <div className="md:w-[100%] w-[100%]">
            <div className="py-10">
              <h1 className="m-auto text-white uppercase w-fit md:px-8 px-8 py-1 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl bg-green-500 shadow-md shadow-white rounded-xl">
                Project
              </h1>

              <Project />
            </div>
          </div>
        </div>

        {/* blob */}
        <div className="wrapper__blob z-1">
          <div className="blob"></div>
        </div>
      </section>
    </>
  );
};

const Skill = () => {
  const skill = skills.map((data, index) => {
    return (
      <li
        key={index}
        className="bg-orange-600 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duration-300"
      >
        <p className="font-[Lato,sans-serif] md:text-md sm:text-sm text-sm text-center text-white">
          {data}
        </p>
      </li>
    );
  });

  return (
    <ul className="flex justify-center items-center flex-wrap gap-5 pt-7">
      {skill}
    </ul>
  );
};

const Education = () => {
  const educate = education.map((data, index) => {
    return (
      <li
        key={index}
        className="font-[Lato,sans-serif] md:text-lg sm:text-sm text-center text-cyan-100"
      >
        {data}
      </li>
    );
  });

  return <ul className="pt-7">{educate}</ul>;
};

const Project = function () {
  const data = project.map((data) => {
    return (
      <ul
        key={data.id}
        className="relative md:w-[400px] sm:w-[400px] w-[90%] bg-neutral-800 shadow-xl/40 shadow-neutral-500 rounded-xl p-4 md:pb-15 pb-12"
      >
        <li>
          <img src={data.image} alt="" style={{ width: "100%" }} />
        </li>
        <li className="font-bold pt-2 font-[Lato,sans-serif] md:text-lg sm:text-sm text-start text-white">
          {data.judul}
        </li>
        <li className="font-thin md:text-md sm:text-sm text-sm text-start text-white ">
          <p>{data.desc}</p>
        </li>

        <li className="font-thin flex gap-5 pt-2 md:text-md sm:text-sm text-start text-white">
          <p className="bg-violet-800 p-1 rounded-xs">{data.tech[0]}</p>
          <p className="bg-green-500 p-1 rounded-xs">{data.tech[1]}</p>
        </li>

        <li className="absolute bottom-2 bg-red-500 pt-1 pl-5 pr-5 rounded-md hover:bg-red-800 transition duration-500">
          <a href={data.link} className="capitalize text-white">
            {data.visit}
          </a>
        </li>
      </ul>
    );
  });

  return (
    <>
      <div className="flex justify-center gap-5 flex-wrap pt-7">{data}</div>
    </>
  );
};

export default About;
