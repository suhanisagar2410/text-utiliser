import React, { useState } from "react";
export default function Textform(props) {
  const handleupcase = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to Uppercase", "Sucess");
  };
  const handlelocase = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const handleupfcase = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text
      .toLowerCase()
      .split(" ")
      .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
      .join(" ");
    settext(newtext);
  };
  const handleclear = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = "";
    settext(newtext);
  };
  const handleonchange = (event) => {
    console.log("on change");
    settext(event.target.value);
  };
  const [text, settext] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="mybox" class="form-label">Enter text</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#052c65" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-2 my-3" onClick={handleupcase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handlelocase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleupfcase}>
            Convert First later
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleclear}>
            Clear
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {/* your text have {text.split(" ").length} words and {text.length}{" "}
          character */}
          <p>
            Your text has{" "}
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word !== "").length
            }{" "}
            words and {text.length} characters
          </p>
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something Into Textarea To preview Here"}
        </p>
      </div>
    </>
  );
}
