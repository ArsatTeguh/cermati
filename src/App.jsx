import React, { useState} from "react";
import Header from "./cermati/header";
import Info from "./cermati/info";
import Main from "./cermati/main";

function App() {
const [info, setInfo] = useState(false)



  return (
    <React.Fragment>
      <div name="header" className="container-home">
        <Info info={info} setInfo={setInfo} />
        <Header info={info} />
        <Main />
      </div>
    </React.Fragment>
  );
}

export default App;
