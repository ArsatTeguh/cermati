import React, { Fragment } from "react";
import Card from "./card";
import Footer from "./footer";
import Panel from "./panel";
import { data } from "./data";

const Main = () => {
  return (
    <Fragment>
      <section>
        <div className="main w-full h-full relative">
          <div className="container mx-auto content-main">
            <div className="tilte text-center px-8 py-10">
              <p className="mb-5 font-bold text-slate-800 text-3xl">
                How Can I Help You?
              </p>
              <p className="font-semibold text-slate-700 text-1xl">
                Our work then targeted, best practices outcomes social
                innovation synergy. Venture philanthropy, revolutionary
                inclusive policymaker relief. User-centered program areas scale.
              </p>
            </div>
            <div className=" flex flex-col gap-3 px-8 py-10 
            lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-5
            xl:grid xl:grid-rows-2 xl:grid-flow-col xl:gap-3
            ">
              {data.map((data, index) => {
                return (
                  <div key={index} className='cursor-pointer hover:scale-105 ease-in-out duration-100'>
                    <Card title={data.title} logo={data.logo} body={data.body} />
                  </div>
                );
              })}
            </div>
       
            <div className="panel absolute bottom-0 lg:left-0 lg:w-1/2">
              <Panel />
            </div>
          </div>
          <div className="footers">
            <Footer />
            </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Main;
