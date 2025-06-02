import { useEffect, useState } from "react";
import { getDogFacts, getDogPictures } from "../services/Dog";

export function useGetDataDog() {
  const [dog, setDog] = useState({
    id:"dog",
    img: "",
    fact: "",
  });

  const refresDataDog = () => {
    Promise.all([getDogFacts(), getDogPictures()]).then(([fact, img, id = "dog"]) => {
      setDog({ fact, img, id });
    });
  };

  useEffect(refresDataDog, []);

  return { dog, refresDataDog };
}
