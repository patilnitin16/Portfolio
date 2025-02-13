import React from "react";

const Scroller = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed right-1.5 bottom-2 z-50 cursor-pointer">
      <i
        onClick={handleScroll}
        className="text-5xl text-red-400 ri-arrow-up-circle-fill"
      ></i>
    </div>
  );
};

export default Scroller;
