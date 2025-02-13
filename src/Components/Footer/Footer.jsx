import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-[50px] pb-[20px]">
      <div className="max-w-[1400px]  mx-auto flex flex-col ">
        <div className="links flex items-center justify-center gap-[40px] cursor-pointer text-3xl mt-[30px]">
          <a href=" https://www.linkedin.com/in/nitinpatil7353">
            <i class="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://www.instagram.com/frontend_webs?igsh=MWxqaDBnNngwNGh3eA==">
            <i class="ri-instagram-fill"></i>
          </a>
          <a href="https://x.com/Nikss_patil_?t=AuMD6xgoQdmY3O8Ks_eHDw&s=09">
            <i class="ri-twitter-fill"></i>
          </a>
          <a href="https://github.com/patilnitin16">
            <i class="ri-github-fill"></i>
          </a>
        </div>
        <p className="text-center mt-[30px]">
          Address : Yelahanka New Town, Bangalore 560064
        </p>
        <p className="text-center mt-[15px]">
          <pre>Phone : +91 7353198902</pre>
        </p>
        <p className="text-center mt-[15px]">
          Copyright &copy; 2025 Bangalore,India, Inc. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
