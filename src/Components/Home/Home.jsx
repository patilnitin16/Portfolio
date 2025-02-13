import React from "react";
import "./Home.css";
import user from "../../assets/nitin.jpg";
import resume from "../../assets/Nitin_Resume.pdf";

const Home = () => {
  return (
    <div className=" bg-[#f7f6f4] mt-[50px]">
      <div className="main max-w-[1400px]  mx-auto flex items-center justify-between">
        <div className="ml-[120px]  left-main  home-left flex flex-col gap-[50px]">
          <h2 className="name text-5xl font-semibold">Hello!</h2>
          <h2 className="name text-5xl ml-[100px] text-[#fa5555]">
            I'm Nitin Patil
          </h2>
          <h1 className="text-6xl font-bold">Software Developer</h1>
          <div className="buttons flex gap-[15px]">
            <button className="cursor-pointer bg-red-400 p-[10px] w-[150px] text-lg text-white">
              Got a Project?
            </button>
            <button className="cursor-pointer border-[2px] border-[#fd6666] p-[9px] w-[150px] text-lg">
              <a href={resume} download>
                My Resume
              </a>
            </button>
          </div>
        </div>

        <div className="right-main">
          <img className="h-[70vh] m-[50px]" src={user} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
