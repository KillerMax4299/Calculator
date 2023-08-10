import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Function to get the initial value from local storage
  const getInitialValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  // Use the getInitialValue function to set the initial state
  const [storedValue, setStoredValue] = useState(getInitialValue);

  // Update local storage whenever the storedValue changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
