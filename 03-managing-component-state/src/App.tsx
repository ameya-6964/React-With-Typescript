//! 1) For Performance Reasons React Update State Asynchronously
//! 2) State Is Stored Outside Componnets
//! 3) State Hook Can be Only Used At Top Level Of Component

import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isApproved, setIsApproved] = useState(true);

  const handleClick = () => {
    setIsVisible(true);
    console.log("Inside handleClick", isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
