import React from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";

const App = () => {
    const maxLen = (value) => value.length <= 10;
    const name = useInput("Mr.", maxLen);
    return (
      <div className="App">
        <div>Hi</div>
        <input placeholder="Name" {...name} />
      </div>
    );
  };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
