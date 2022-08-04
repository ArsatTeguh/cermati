import React, { Fragment, useState } from "react";

const Panel = () => {
  const [panel, setPanel] = useState(false);
  return (
    <Fragment>
      <div className="container container-panel">
        {!panel && (
          <div className="panel px-7 gap-3 py-5 flex flex-col lg:gap-1 justify-center align-center relative ">
            <div className="title-panel ">
              <span
                onClick={() => setPanel(true)}
                className="absolute top-0 right-5 lg:top-2 cursor-pointer"
              >
                <p className="text-1xl text-white font-semibold lg:text-1xl">X</p>
              </span>
              <p className="text-2xl font-semibold text-white lg:text-xl">
                Get latest updates in web technologies
              </p>
            </div>
            <div className="txt-panel">
              <p className="text-white lg:text-md">
                I write articles related to web technologies, such as design
                trends, development tools, UI/UX case studies and reviews, and
                more. Sign up to my newsletter to get them all.
              </p>
            </div>
            <div className="form-panel">
              <form className="flex flex-col gap-2">
                <input
                  type="text"
                  className="px-2 py-1"
                  placeholder="Email address"
                />
                <input
                  className="btn-panel py-1 text-white font-semibold"
                  type="submit"
                  value="Count me in!"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Panel;
