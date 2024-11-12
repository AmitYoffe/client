import { useEffect, useState } from "react";

// add a default value and pass a prop seperately from it 
export const useDebounce = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return clearTimeout(handler);
  }, [value]);

  return debouncedValue;
};
