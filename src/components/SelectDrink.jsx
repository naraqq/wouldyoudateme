import React from "react";
import PropTypes from "prop-types";

function SelectDrink({ step, setStep, data, handleData }) {
  const drinkOptions = [
    "Тиймээ, дарс оруулахыг хүсэж байна.",
    "Үгүй, Хэрэггүй.",
    "Би уухгүй, чи ууж болно.",
    "Тухайн үеийн нөхцөлөөс болно",
  ];

  const handleSelection = (choice) => {
    handleData({ ...data, includeWine: choice });
    setStep(step + 1); // Progress to the next step
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
        className="question"
      >
        Уух зүйлдээ хатуу юм оруулвал зүгээр үү ?
      </h2>
      <img
        className="gif"
        alt="gif"
        src="https://media.tenor.com/7VGQW_QdsPQAAAAM/chat-chats.gif"
      />
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {drinkOptions.map((option, index) => (
          <button
            key={index}
            className={`p-2 w-full mb-2 ${
              index % 2 === 0 ? "yes-btn" : "no-btn"
            }`}
            onClick={() => handleSelection(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectDrink;
