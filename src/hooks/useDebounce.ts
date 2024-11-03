import { useEffect, useState } from "react";

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
