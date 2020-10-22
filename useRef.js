import React, { useRef } from "react";
import ReactDOM from "react-dom";

/*
  useRef
  : component의 어떤 부분을 선택할 수 있는 방법
  : document.getElementByID()와 비슷
  : react에 있는 모든 component는 reference element(prop) 가짐
*/

const App = () => {
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
