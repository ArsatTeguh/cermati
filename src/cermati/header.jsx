import React from "react";
import logo from "../cermati/assets/logo.png";

const Header = ({ info }) => {
  return (
    <React.Fragment>
      <header>
        <div className="header">
          <div className={`conten-header ${info ? "aktif" : ""}`}>
            <div className="logo-header p-5 lg:px-10">
              <img className="w-10" src={logo} alt="" />
            </div>
            <div className="container mx-auto text-header flex flex-col px-5  h-full w-full lg:w-2/4 mt-10 lg:mt-5 text-center gap-y-3">
              <div className="txt-header">
                <h2 className="text-white font-semibold text-xl lg:text-4xl xl:text-5xl ">
                  Hello I'm Arsat Teguh{" "}
                  <span className="font-bold">
                    Consult, Design, and Develop Website
                  </span>
                </h2>
              </div>
              <div className="p-header mb-2">
                <p className="text-white font-semibold text-2xl">
                  Have something great in mind? Feel free to contact me. I'll
                  help you to make it happen.
                </p>
              </div>
              <div className="btn-header cursor-pointer py-10 lg:py-16">
                <button className="hover:bg-white hover:text-blue-400 rounded py-3 px-5 border-2 text-white font-semibold   ">
                  LET'S MAKE CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
