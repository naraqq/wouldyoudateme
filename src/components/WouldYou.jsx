import React, { useState } from "react";

function WouldYou({ step, setStep, data, setData, handleData }) {
  const [noCount, setNoCount] = useState(150);
  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="question">Would you go on a date with me??</h2>
        <img
          className="gif"
          alt="gif"
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanczajVzMmRsNzUzZDRweTFka2JkbDNldGJmbWllaGJxeXlhb3lhbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PcCh9x9Pz5d2CriuMQ/giphy.gif"
        />
        <div className="btn-group">
          <button
            style={{
              width: `${300 - noCount}px`,
              height: `${190 - noCount}px`,
            }}
            className="yes-btn"
            onClick={() => {
              setStep(step + 1);
              handleData({ noCount: noCount });
            }}
          >
            Yes
          </button>
          {noCount > 50 && (
            <button
              style={{
                width: `${noCount * 1}px`,
              }}
              className="no-btn"
              onClick={() => {
                setNoCount(noCount - 20);
              }}
            >
              No
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WouldYou;
