import { useState } from "react";

function useFlip(currentValue = true) {
  // call useState, "reserve piece of state"
  const [value, setValue] = useState(currentValue);
  const toggleCard = () => {
    setValue(currentValue => !currentValue);
  };

  // return piece of state AND a function to toggle it
  return [value, toggleCard];
}

export default useFlip;