import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import contact from "../../assets/contact.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-[#f7f6f4] mt-[50px] pb-[100px]">
      <div className="max-w-[1400px]  mx-auto">
        <h2 className="font-bold text-center text-4xl mb-[60px]">CONTACT ME</h2>
        <div className=" flex items-center justify-center gap-[100px]">
          <div className="img">
            <img className="h-[500px] w-[500px]" src={contact} alt="" />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form flex flex-col gap-[50px]"
          >
            <div className="inputs flex items-center justify-between gap-[30px] ">
              <label className="text-xl font-bold" htmlFor="Name">
                Name :{" "}
              </label>
              <input
                className="outline-1 w-[300px] h-[40px] rounded-2xl px-[10px] py-[5px] text-lg"
                type="text"
                name="your_name"
              />
            </div>
            <div className="inputs flex items-center justify-between gap-[30px]">
              <label className="text-xl font-bold" htmlFor="Name">
                Email :{" "}
              </label>
              <input
                className="outline-1 w-[300px] h-[40px] rounded-2xl px-[10px] py-[5px] text-lg"
                type="email"
                name="your_email"
              />
            </div>
            <div className="inputs flex items-center justify-between gap-[30px]">
              <label className="text-xl font-bold" htmlFor="Name">
                Phone :{" "}
              </label>
              <input
                className="outline-1 w-[300px] h-[40px] rounded-2xl px-[10px] py-[5px] text-lg"
                type="phone"
              />
            </div>
            <div className="flex items-center justify-between">
              {/* <label htmlFor="Name">Message</label> */}
              <textarea
                placeholder="Message....."
                className="txt-area outline-1 px-[10px] py-[5px] rounded-2xl"
                name="message"
                rows="5"
                cols="50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-center p-[5px] font-bold text-xl cursor-pointer bg-red-400 text-white rounded-2xl w-[100%]"
            >
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
