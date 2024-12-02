import React from "react";
import PropTypes from "prop-types";

function SelectFood({ step, setStep, data, handleData }) {
  const foodOptions = [
    "Монгол хоол идмээр байна.",
    "Итали хоол сонгоё.",
    "Хятад хоол идье.",
    "Солонгос хоол идье.",
    "Чи мэдээд шийдчих.",
  ];

  const handleSelection = (food) => {
    handleData({ ...data, preferredFood: food });
    setStep(step + 1); // Progress to next step
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h2 className="question">Та юу идэх вэ?</h2>
      <img
        className="gif"
        alt="gif"
        src="https://i.pinimg.com/originals/df/41/c4/df41c450b799e2f5c69925cd8e6f0000.gif"
      />
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {foodOptions.map((food, index) => (
          <button
            key={index}
            className={`p-2 w-full mb-2 ${
              index % 2 === 0 ? "yes-btn" : "no-btn"
            }`}
            onClick={() => handleSelection(food)}
          >
            {food}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectFood;
