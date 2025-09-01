const AboutMe = () => {
  return (
    <>
      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <h1 className="text-white text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1 shadow-md shadow-white">
            about me
          </h1>
        </header>

        <div className="p-5">
          <p className="text-white italic text-center">steps</p>
          <p className="font-[Lato,sans-serif] text-gray-300 md:text-lg text-sm">
            Currently, I'm seeking an internship opportunity to apply my skills
            in real-world projects, learn from experienced developers, and
            contribute to impactful applications. I thrive in collaborative
            environments and am always eager to solve challenging problems and
            improve my craft. Outside of coding, I enjoy exploring new
            technologies, contributing to open-source projects, and continually
            learning to stay up-to-date with industry trends.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
