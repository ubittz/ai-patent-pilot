import { useState } from 'react';

export const useToggle = (initial: boolean = false) => {
  const [flag, setFlag] = useState<boolean>(initial);

  const toggle = () => {
    setFlag((prev) => !prev);
  };

  return [flag, toggle] as const;
};
