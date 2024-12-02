import { useState } from "react";
import WouldYou from "./components/WouldYou";
import SelectPlace from "./components/SelectPlace";
import SelectFood from "./components/SelectFood";
import SelectDrink from "./components/SelectDrink";
import SelectMeetingTime from "./components/SelectMeetingTime";
import WhatIWantToKnow from "./components/WhatIWantToKnow";
import Thanks from "./components/Thanks";

function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);
  const handleData = (data) => {
    setData(data);
  };

  return (
    <>
      {step === 0 && (
        <WouldYou
          step={step}
          setStep={setStep}
          data={data}
          setData={setData}
          handleData={handleData}
        />
      )}
      {step === 1 && (
        <SelectPlace
          step={step}
          setStep={setStep}
          data={data}
          setData={setData}
          handleData={handleData}
        />
      )}
      {step === 2 && (
        <SelectFood
          step={step}
          setStep={setStep}
          data={data}
          setData={setData}
          handleData={handleData}
        />
      )}
      {step === 3 && (
        <SelectDrink
          step={step}
          setStep={setStep}
          data={data}
          setData={setData}
          handleData={handleData}
        />
      )}
      {step === 4 && (
        <SelectMeetingTime
          step={step}
          setStep={setStep}
          data={data}
          setData={setData}
          handleData={handleData}
        />
      )}
      {step === 5 && (
        <WhatIWantToKnow
          step={step}
          setStep={setStep}
          data={data}
          setData={setData}
          handleData={handleData}
        />
      )}
      {step === 6 && (
        <Thanks
          step={step}
          setStep={setStep}
          data={data}
          setData={setData}
          handleData={handleData}
        />
      )}
    </>
  );
}

export default App;
