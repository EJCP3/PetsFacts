import { useEffect, useState } from "react";
import { getTranslation } from "../services/Translation";

export function UseGetTranslation({ cat, dog }) {
  const [catNew, setCatNew] = useState({ img: "", fact: "" });
  const [dogNew, setDogNew] = useState({ img: "", fact: "" });
  const [isTrueEng, setIsTrueEng] = useState(true)

  const changeText = (señal) => {
    if (señal) {
      getTranslation(cat.fact).then((newtext) =>
        setCatNew({ img: cat.img, fact: newtext })
      );
      getTranslation(dog.fact).then((newtext) =>
        setDogNew({ img: dog.img, fact: newtext })
      );
    } else {
      setCatNew({ img: cat.img, fact: cat.fact });
      setDogNew({ img: dog.img, fact: dog.fact });
    }

    setIsTrueEng(señal)
  };

  useEffect(changeText, []);
  // useEffect(() => {
  //   getTranslation(cat.fact).then((newtext) => setCatNew(newtext));
  // }, [cat]);

  return { dogNew, catNew, changeText , isTrueEng};
}
