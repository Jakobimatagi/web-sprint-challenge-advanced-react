// on the way into localStorage, JSON.stringify (object -> string)
// on the way out of localStorage, JSON.parse (string -> object)
import { useState } from "react";

// This hook composes useState, providing the exact same format and functionality as useState, while also persisting the state value to localStorage

export const useLocalStorage = (key, initialValue) => {

  //First check local storage
  const [value, setStateValue] = useState(() =>{
      if (localStorage.getItem(key)){
          return JSON.parse(localStorage.getItem(key))
      }
      else{
          localStorage.setItem(key, JSON.stringify(initialValue));
          return initialValue;
      }
  });

  // When setValue is called in addition to the normal useState behavior also persist the new value to localStorage

  const setValue = (newValue) => {
    setStateValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setValue];
}