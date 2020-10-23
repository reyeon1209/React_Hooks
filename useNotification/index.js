import React from "react";
import ReactDOM from "react-dom";
import useNotification from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimch?", {
    body: "I love kimchi don't you?"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Notification</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
