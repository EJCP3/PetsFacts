import { useEffect, useState } from "react";
import { getCatFacts, getCatPictures } from "../services/Cat";

export function useGetDataCat() {
  const [cat, setCat] = useState({
    img: "",
    fact: "",
  });
  // const refresData = () => {
  //   getCatFacts().then((newFact) => {
  //     setCat((prevCat) => ({ ...prevCat, fact: newFact }));
  //   });
  //   getCatPictures().then((newImg) => {
  //     setCat((preCat) => ({ ...preCat, img: newImg }));
  //   });
  // };

  const refresDataCat = () => {
    Promise.all([getCatFacts(), getCatPictures()]).then(([fact, img, id = "cat"]) => {
      setCat({ fact, img , id});
    });
  };

  useEffect(refresDataCat, []);

  return { cat, refresDataCat };
}
