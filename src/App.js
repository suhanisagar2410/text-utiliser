import React from "react";

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(5, 44, 101)";
      document.getElementById("mybox").style.color = "white";
      showAlert("Dark Mode Has Been Enabled", "Success");
      document.title = "Suhani - Darkmode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("mybox").style.color = "black";
      showAlert("Light Mode Has Been Enabled", "Success");
      document.title = "Suhani - Lightmode";
    }
  };

  return (
    <>
      <Navbar title="Text menipulator" mode={mode} toggle={toggle} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter your text" mode={mode} />
      </div>
    </>
  );
}

export default App;
