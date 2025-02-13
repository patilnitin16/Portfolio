import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="super bg-[#f7f6f4] mt-[50px] pb-[70px]">
      <h2 className="text-center text-4xl font-bold my-[50px] ">ABOUT ME</h2>

      <div className=" main max-w-[1400px]  mx-auto flex gap-[100px]">
        <div className="basis-[30%] left-main left-about ml-[100px] flex flex-col items-start justify-between gap-[60px]">
          <div className="flex items-center justify-between gap-[30px] text-2xl ">
            <i className="ri-code-box-fill text-5xl"></i>
            <p>Software Dev</p>
          </div>
          <div className="flex items-center justify-between gap-[30px] text-2xl">
            <i className="ri-global-fill text-5xl"></i>
            <p>Website Hosting</p>
          </div>
          <div className="flex items-center justify-between gap-[30px] text-2xl">
            <i className="ri-mac-fill text-5xl"></i>
            <p>Website Design</p>
          </div>
        </div>
        <div className="right-main-about basis-[69%] mr-[100px]">
          <p className="font-semibold">
            Knowledgeable and adaptive Software Developer with good coding
            experience. Collaborative and a team player with excellent
            communication skills, ability to work with a team to develop and
            launch Software solutions and also have the ability to contribute to
            UX improvement projects. Proficient working with Git / GitHub
            repositories.
          </p>
          <div className="services flex items-center justify-between max-w-[500px] mt-[25px]">
            <div className="project">
              <p className="text-4xl">
                20<span className="text-red-500">+</span>
              </p>
              <p className="mt-[8px]">Projects</p>
            </div>
            <div className="exp">
              <p className="text-4xl">
                02<span className="text-red-500">+</span>
              </p>
              <p className="years">Years Experience</p>
            </div>
            <div className="satisfaction">
              <p className="text-4xl">
                100<span className="text-red-500">%</span>
              </p>
              <p>Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
