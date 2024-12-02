import React, { useState } from "react";

function Thanks({ step, setStep, data, handleData }) {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img
        style={{
          width: "90%",
        }}
        className="gif"
        alt="gif"
        src="https://i.pinimg.com/originals/de/73/04/de7304cb7792cc9bb3d8dc549725b582.gif"
      />
      <h2
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Баярлалаа <div className="icon heart">&#10084;</div>
        <div className="icon smile">&#128578;</div>
      </h2>
    </div>
  );
}

export default Thanks;
