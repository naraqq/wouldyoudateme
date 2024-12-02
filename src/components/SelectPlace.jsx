import React from "react";
import PropTypes from "prop-types";

function SelectPlace({ step, setStep, data, handleData }) {
  const options = [
    "Миний орох дуртай газар очъё, Тухтай баймаар байна.",
    "Чи сонго",
    "Хаана ч яах вээ",
    "Миний ажилтай эсвэл гэртэй ойрхон байвал зүгээр",
  ];

  const handleSelection = (place) => {
    handleData({ ...data, preferredPlace: place });
    setStep(step + 1); // Progress to next step
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h2 className="question">Хаана бвал зүгээр вэ?</h2>
      <img
        className="gif"
        alt="gif"
        src="https://i.pinimg.com/originals/de/73/04/de7304cb7792cc9bb3d8dc549725b582.gif"
      />
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {options.map((option, index) => (
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

export default SelectPlace;
