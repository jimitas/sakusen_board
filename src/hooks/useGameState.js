import { useState } from "react";

export const useGameState = () => {
  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(prev => !prev);
  };

  return {
    isRotated,
    toggleRotation,
  };
};