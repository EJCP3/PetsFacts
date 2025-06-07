import { useEffect, useState } from "react";
import { getTranslation } from "../services/Translation";

export function UseGetTranslation({ cat, dog }) {
  const [petNew, setPetNew] = useState({
    cat: {
      img: "",
      fact: "",
    },
    dog: {
      img: "",
      fact: "",
    },
  });

  const [isTrueEng, setIsTrueEng] = useState(true);

  const changeText = (señal) => {
    if (señal) {
      getTranslation(cat.fact).then((newtext) =>
        setPetNew((prev) => ({
          ...prev,
          cat: {
            img: cat.img,
            fact: newtext,
          },
        }))
      );
      getTranslation(dog.fact).then((newtext) =>
        setPetNew((prev) => ({ ...prev, dog: { img: dog.img, fact: newtext } }))
      );
    } else {
      setPetNew((prev) => ({
        ...prev,
        cat: {
          img: cat.img,
          fact: cat.fact,
        },
      }));
      setPetNew((prev) => ({
        ...prev,
        dog: {
          img: dog.img,
          fact: dog.fact,
        },
      }));
    }

    setIsTrueEng(señal);
  };

  useEffect(changeText, [cat, dog]);
  // useEffect(() => {
  //   getTranslation(cat.fact).then((newtext) => setCatNew(newtext));
  // }, [cat]);

  return { petNew, changeText, isTrueEng };
}
