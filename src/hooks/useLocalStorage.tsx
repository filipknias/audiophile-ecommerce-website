import { Dispatch, SetStateAction, useEffect, useState } from "react"

type ReturnType<T> = [
  T|undefined,
  Dispatch<SetStateAction<T|undefined>>
];

export const useLocalStorage = <T,>(key: string, initialValue?: T): ReturnType<T> => {
  const [storedValue, setStoredValue] = useState<T|undefined>(() => {
    if (initialValue) return initialValue;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  });

  console.log(storedValue);
  useEffect(() => {
    if (!storedValue) return;
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}