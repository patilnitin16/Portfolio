import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="bg-[#f7f6f4] mt-[50px] pb-[100px]">
      <div className="max-w-[1400px]  mx-auto">
        <h2 className="text-center text-4xl font-bold mb-[30px]">MY SKILLS</h2>
        <div className="skill-box grid grid-cols-3 gap-[30px] p-[30px] ml-[20px] font-bold">
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              REACT JS
            </button>
          </div>
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              NODE JS
            </button>
          </div>
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              EXPRESS JS
            </button>
          </div>
          <div className="flex items-center justify-end cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              JAVASCRIPT
            </button>
          </div>

          <div className="flex items-center justify-end cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              MONGO DB
            </button>
          </div>
          <div className="flex items-center justify-end cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              JQUERY
            </button>
          </div>
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              TAILWIND
            </button>
          </div>
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              SQL DB
            </button>
          </div>
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              PYTHON
            </button>
          </div>
          <div className="flex items-center justify-end cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              FIGMA
            </button>
          </div>
          <div className="flex items-center justify-end cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              CANVA
            </button>
          </div>
          <div className="flex items-center justify-end cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              PHOTOSHOP
            </button>
          </div>
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              HTML
            </button>
          </div>
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              CSS
            </button>
          </div>
          <div className="flex items-center justify-start cursor-pointer">
            <button className="p-[2px] bg-red-400 text-white w-[150px] h-[40px] rounded-2xl ">
              C / C++
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
