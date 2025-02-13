import React from "react";
import "./Projects.css";
import youtube from "../../assets/youtube.png";
import news from "../../assets/news.png";
import chatgpt from "../../assets/chatgpt.png";
import imgsearch from "../../assets/imgsearch.png";
import exp from "../../assets/exp.png";
import emp from "../../assets/emp.png";


const Projects = () => {
  return (
    <div className="bg-[#f7f6f4] mt-[50px] pb-[100px]">
      <div className="max-w-[1400px]  mx-auto">
        <h2 className=" head font-bold text-4xl text-center mb-[50px]">
          PROJECTS
        </h2>
        <div className="project-boxes grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          <div className="card flex flex-col items-center justify-center ">
            <img
              className="cursor-pointer h-[230px] shadow-2xl hover:-translate-y-1.5 hover:scale-[105%]  hover:transition-all"
              src={youtube}
              alt="project-image"
            />
            <h2 className="text-center text-xl font-bold mt-[11px] mb-[35px]">
              Youtube Clone
            </h2>
          </div>
          <div className="card flex flex-col items-center justify-center">
            <img
              className="cursor-pointer h-[230px] shadow-2xl hover:-translate-y-1.5 hover:scale-[105%]  hover:transition-all"
              src={chatgpt}
              alt="project-image"
            />
            <h2 className="text-center text-xl font-bold mt-[11px] mb-[35px]">
              Chat - GPT{" "}
            </h2>
          </div>
          <div className="card flex flex-col items-center justify-center">
            <img
              className="cursor-pointer h-[230px] shadow-2xl hover:-translate-y-1.5 hover:scale-[105%]  hover:transition-all"
              src={news}
            />
            <h2 className="text-center text-xl font-bold mt-[11px] mb-[35px]">
              News Website
            </h2>
          </div>
          <div className="card flex flex-col items-center justify-center">
            <img
              className="cursor-pointer h-[230px] shadow-2xl hover:-translate-y-1.5 hover:scale-[105%]  hover:transition-all"
              src={imgsearch}
              alt="project-image"
            />
            <h2 className="text-center text-xl font-bold mt-[11px] mb-[35px]">
              Image Searcher
            </h2>
          </div>
          <div className="card flex flex-col items-center justify-center">
            <img
              className="cursor-pointer h-[230px] shadow-2xl hover:-translate-y-1.5 hover:scale-[105%]  hover:transition-all"
              src={exp}
              alt="project-image"
            />
            <h2 className="text-center text-xl font-bold mt-[11px] mb-[35px]">
              Expense Tracker
            </h2>
          </div>
          <div className="card flex flex-col items-center justify-center">
            <img
              className="cursor-pointer h-[230px] shadow-2xl hover:-translate-y-1.5 hover:scale-[105%]  hover:transition-all"
              src={emp}
              alt="project-image"
            />
            <h2 className="text-center text-xl font-bold mt-[11px] mb-[35px]">
              Employee Manager
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
