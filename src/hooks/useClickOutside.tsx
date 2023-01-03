import { useEffect, RefObject } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const clickOutsideFn = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) callback();
    };

    // Add event listener
    document.addEventListener("mousedown", (e) => clickOutsideFn(e));
    return () => document.removeEventListener("mousedown", clickOutsideFn);
  }, [ref]);
}