import { useState } from "react";

const isNumber = (value) => {
  const regex = /[0-9]/g;
  return regex.test(value);
};

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    if (event.nativeEvent.data && isNumber(event.nativeEvent.data)) {
      setValue(event.target.value);
    }
    event.preventDefault();
    return null;
  };
  const increase = () => {
    setValue(Number(value) + 1);
  };
  const decrease = () => {
    if (value > 1) setValue(value - 1);
  };

  return { value, onChange, increase, decrease };
};

export const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentTab: allTabs[currentIndex],
    changeTab: setCurrentIndex,
    currentIndex,
  };
};
