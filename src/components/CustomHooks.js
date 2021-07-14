import { useState } from "react";

export const useClicked = () => {
  const [clicked, setClicked] = useState(false);

  setClicked((currClicked) => !currClicked);
  return clicked;
};
