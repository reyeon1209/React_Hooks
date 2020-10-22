/*
  useEffect
  : 새로고침/클릭을 하면 실행됨 (ComponentDidMount의 역할)
  : 인자 2개 (function으로써의 effect, dependency)
  : deps가 있다면 deps 리스트에 있는 값일 때만 값이 변하도록 활성화 (ComponentDidUpdate의 역할)
  : 반환 값은 function (ComponentWillUnMount의 역할)
  => ComponentDidMount, ComponentDidUpdate, ComponentWillUnMount
*/

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]); // component가 mount되었을 때와 number이 변할 때만 실행
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
