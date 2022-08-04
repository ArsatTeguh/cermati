import React, { Fragment } from "react";

const Card = ({ title, logo, body }) => {
  return (
    <Fragment>
      <div className="card ">
        <div className="content-card border-2 border-slate-200 p-5 ">
          <div className="title-card flex justify-between align-center mx-auto mb-5">
            <p className="text-2xl text-slate-900">{title}</p>
            <span className="text-1xl">{logo}</span>
          </div>
          <div className="txt-card text-slate-800">{body}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
