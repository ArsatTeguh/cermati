import React, { Fragment,useState } from "react";
import { Link } from "react-scroll";

const Info = ({ info, setInfo }) => {
  const [infos, setInfos] = useState(false);

  const handleInfo = () => {
    if (window.scrollY > 100) {
      setInfos(true);
    }else {
      setInfos(false)
    }
  };

  window.addEventListener("scroll", handleInfo);

  return (
    <Fragment>
      <div className="info h-full w-full transition md:flex   ">
        {!info && (
          <div className={`content-info p-3 sticky top-0 md:flex lg:flex md:justify-around lg:justify-center lg:gap-2 xl:gap-3 ${infos ? 'border-b border-slate-200 shadow-md' : ''}`}>
            <p className="text-sm md:text-xs lg:text-sm xl:text-md mb-2 md:mb-0 lg:w-1/2 ">
              By accessing and using this website, you acknowledge that you have
              read and understand our{" "}
              <Link className="text-blue-800 font-semibold">
                {" "}
                Cookie Policy, Privacy Policy
              </Link>
              , and our{" "}
              <Link className="text-blue-800 font-semibold">
                Terms of Service.
              </Link>
            </p>
            <button>
              <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setInfo(true)}
                className="mt-2 shadow-md px-4 text-white rounded py-1 bg-blue-600 md:px-2 md:py-1 md:text-xs xl:py-2 xl:px-4 xl:text-xl lg:px-5 lg:py-2"
              >
                Go it
              </Link>
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Info;
