import React from "react";
import logo1 from "../assets/Images/logo.png";
import logo2 from "../assets/Images/logo1.png";

const Experience = () => {
  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-6xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full">
          <h1 className="text-2xl sm:text-4xl font-large title-font mb-2">
            Experience
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Professional Experience
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="max-w-md p-4 rounded-xl shadow-md bg-slate-100 flex-1"
          >
            <div className="flex flex-col font-medium gap-1 w-full">
              <h1 className="text-xl md:text-2xl font-semibold">
                Software Engineer (Frontend)
              </h1>
              <div className="flex items-center justify-center gap-0.5 text-lg text-gray-700 md:text-xl">
                <img
                  src={logo1}
                  alt="Atoms Digital Solution"
                  className="h-14 w-14 lg:h-16 lg:w-20 bg-transparent mix-blend-multiply"
                />{" "}
                ChopDawg
              </div>
              <p className="text-base md:text-base text-gray-500">
                November 2021 - July 2024
              </p>
            </div>
            <div className="flex w-full mt-4">
              <ul
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="false"
                className="pl-3 md:pl-7 list-disc leading-loose text-base text-justify md:text-start md:text-lg font-medium"
              >
                <li className="py-2 lg:py-3">
                  Led admin-side configurator development, enhancing backend
                  efficiency and streamlining CI/CD processes, resulting in a
                  20% increase in overall system performance and a 30% reduction
                  in deployment times.
                </li>
                <li className="py-2 md:py-3">
                  Boosted efficiency by 20% through Google Cloud functions and
                  enhanced performance with Firestore and Firestorage
                  integrations.
                </li>
                <li className="py-2 md:py-3">
                  Improved project tracking and client satisfaction through
                  daily communication, QA collaboration reducing bugs by 40%,
                  and mentoring junior engineers.
                </li>
              </ul>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="max-w-md p-4 rounded-xl shadow-md bg-slate-100 flex-1"
          >
            <div className="flex flex-col font-medium gap-1 w-full">
              <h1 className="text-xl md:text-2xl font-semibold">
                Front-End Developer
              </h1>
              <div className="flex items-center justify-center gap-1 text-lg text-gray-700 md:text-xl">
                <img
                  src={logo2}
                  alt="Ford 9 Solutions"
                  className="h-14 w-14 lg:h-20 lg:w-24 bg-transparent mix-blend-multiply"
                />{" "}
                Ford 9 Solutions
              </div>
              <p className="text-base md:text-base text-gray-500">
                September 2019 - August 2021
              </p>
            </div>
            <div className="flex w-full mt-4">
              <ul
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="false"
                className="pl-3 md:pl-7 list-disc leading-loose text-base text-justify md:text-start md:text-lg font-medium"
              >
                <li className="py-2 md:py-3">
                  Designed and execute responsive web interfaces using React.js,
                  contributing to a 35% increase in user engagement and
                  application performance.
                </li>
                <li className="py-2 md:py-3">
                  Collaborated with design teams to transform UI/UX prototypes
                  into efficient codebases using Material UI and Bootstrap,
                  cutting design-to-development time by 50% and accelerating
                  product launches.
                </li>
                <li className="py-2 md:py-3">
                  Collaborated closely with multidisciplinary teams to align
                  front-end development with project requirements, resulting in
                  a 20% increase in project delivery speed and a 15% improvement
                  in overall execution efficiency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
