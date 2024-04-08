import { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

 function useFlip(currentValue = true) {
  // call useState, "reserve piece of state"
  const [value, setValue] = useState(currentValue);
  const toggleCard = () => {
    setValue(currentValue => !currentValue);
  };

  // return piece of state AND a function to toggle it
  return [value, toggleCard];
}


function useAxios() {
  const [cards, setCards] = useState([]);

  const addCard = async (url) => {
    const response = await axios.get(url);
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };
  return {cards,addCard}

}

export  {useFlip, useAxios}