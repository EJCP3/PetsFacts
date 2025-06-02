import { useEffect, useState } from "react";
import { useGetDataCat } from "./useGetCat";
// import { useGetDataDog } from "./useGetDog";
import { getTranslation } from "../services/Translation";

export function UseGetTranslation() {
  const { cat } = useGetDataCat();

  const [catNew, setCatNew] = useState({ img: "", fact: "" });

  const changeText = (señal) => {
    if (señal) {
       getTranslation(cat.fact).then((newtext) => setCatNew(({img: cat.img, fact : newtext})));
    } else {
       setCatNew({ img: cat.img, fact: cat.fact });
    }
  };

  useEffect(changeText, []);
  // useEffect(() => {
  //   getTranslation(cat.fact).then((newtext) => setCatNew(newtext));
  // }, [cat]);

  return { catNew, changeText };
}
