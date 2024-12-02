import React, { useState } from "react";

function WhatIWantToKnow({ step, setStep, data, handleData }) {
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [activityPreference, setActivityPreference] = useState("");

  const handleDietaryChange = (e) => {
    setDietaryPreference(e.target.value);
  };

  const handleActivityChange = (e) => {
    setActivityPreference(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const message = JSON.stringify({
        ...data,
        dietaryPreference,
        activityPreference,
      });

      const response = await fetch(
        `http://web2sms.skytel.mn/apiSend?token=294babae891783478268cc66d1d858e03798ab88&sendto=80105376&message=${message}`,
        { mode: "no-cors" }
      );

      const result = await response.json();
    } catch (error) {}
    setStep(step + 1);
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "20px" }}
        className="question"
      >
        Хоолны дэглэм эсвэл дургүй зүйл байгаа юу ?
      </h2>
      <input
        type="text"
        placeholder="..."
        value={dietaryPreference}
        onChange={handleDietaryChange}
        className="input-field"
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "90%",
          maxWidth: "400px",
          fontSize: "16px",
          marginBottom: "20px",
          outline: "none",
          transition: "border 0.3s ease",
        }}
      />

      <h2
        style={{ textAlign: "center", marginBottom: "20px" }}
        className="question"
      >
        Ямар нэгэн хийж үзэхийг хүсэж байгаа зүйл байгаа юу ?
      </h2>
      <input
        type="text"
        placeholder="..."
        value={activityPreference}
        onChange={handleActivityChange}
        className="input-field"
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "90%",
          maxWidth: "400px",
          fontSize: "16px",
          marginBottom: "20px",
          outline: "none",
          transition: "border 0.3s ease",
        }}
      />

      <button
        className="yes-btn"
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "10px",
        }}
      >
        Илгээх
      </button>
    </div>
  );
}

export default WhatIWantToKnow;
