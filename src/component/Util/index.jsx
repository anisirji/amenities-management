import React from "react";
import "./style.css";

function Button({ lable }) {
  return (
    <div className="btn" onClick={() => alert("Button Clicked")}>
      {lable}
    </div>
  );
}

function Input({ type, lable }) {
  return (
    <div className="inpt-container">
      <p className="lable">{lable}</p>
      <input className="input" type={type || "text"} />;
    </div>
  );
}

function Text({ lable, color, style }) {
  return <span className="">{lable}</span>;
}

export { Button, Input };
