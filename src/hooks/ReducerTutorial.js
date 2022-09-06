import React, { useState } from "react";

const ReducerTutorial = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {}}></button>
    </div>
  );
};

export default ReducerTutorial;
