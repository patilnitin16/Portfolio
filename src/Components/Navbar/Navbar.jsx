import React from "react";
import "./Navbar.css";
import resume from "../../assets/Nitin_Resume.pdf";

const Navbar = () => {
  const handleAbout = () => {
    window.scrollTo({
      top: 670,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleSkills = () => {
    window.scrollTo({
      top: 1130,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleProjects = () => {
    window.scrollTo({
      top: 1800,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleContact = () => {
    window.scrollTo({
      top: 2650,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="shadow-lg bg-[#f7f6f4] p-[5px]">
      <div className="main-nav max-w-[1400px] flex mx-auto items-center justify-between p-[5px]">
        <div className="logo p-[2px] text-[22px]">
          <h2 className="font-bold">NIKS DEV</h2>
        </div>
        <div className="navbar">
          <ul className="nav-ul flex items-center justify-between gap-[80px] text-[17px] font-semibold cursor-pointer">
            <li className="nav-li" onClick={handleAbout}>
              ABOUT
            </li>
            <li className="nav-li" onClick={handleSkills}>
              SKILLS
            </li>
            <li className="nav-li" onClick={handleProjects}>
              PROJECTS
            </li>
            <li className="nav-li" onClick={handleContact}>
              CONTACT
            </li>
            <button className="nav-btn bg-red-400 text-white p-[5px] px-[14px] rounded-3xl text-[17px] cursor-pointer">
              <a href={resume} download>
                DOWNLOAD CV
              </a>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
