import React from "react";

function SelectMeetingTime({ step, setStep, data, handleData }) {
  const meetingOptions = [
    "Ажлын дараа байвал зүгээр",
    "Амралтын өдрүүдэд илүү тохиромжтой.",
    "Завтай байх үедээ хэлье.",
    "Тухайн үед хэлэлцэж шийдье.",
  ];

  const handleSelection = (choice) => {
    handleData({ ...data, preferredMeetingTime: choice });
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
        Хэзээ уулзвал чамд тохиромжтой вэ?
      </h2>
      <img
        className="gif"
        alt="gif"
        src="https://i.pinimg.com/originals/65/10/c8/6510c888dc067af3219e34cc60775e55.gif"
      />
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {meetingOptions.map((option, index) => (
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

export default SelectMeetingTime;
