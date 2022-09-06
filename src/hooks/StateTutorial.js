import React, { useState } from "react";

const StateTutorial = () => {
  //useState Counter
  //   const [counter, setCounter] = useState(0);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  //   return (
  //     <div>
  //       {counter}
  //       <button onClick={increment}>Increment</button>
  //     </div>

  //useState Example02
  const [inputValue, setInputValue] = useState("JUDE");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="p-16">
      <input placeholder="enter something...." onChange={onChange}></input>
      {inputValue}
    </div>
  );
};

export default StateTutorial;
