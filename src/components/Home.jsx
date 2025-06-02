import { useGetDataCat } from "../hooks/useGetCat";
import { useGetDataDog } from "../hooks/useGetDog";

import Hero from "./Hero";
import Navbar from "./Navbar";
import Pets from "./Pets";
import Btn from "./Btn";
import { UseGetTranslation } from "../hooks/useGetTranslation";
import { useEffect, useState } from "react";

export default function Home() {
  const { cat, refresDataCat } = useGetDataCat();
  const { dog, refresDataDog } = useGetDataDog();

  const { catNew, changeText } = UseGetTranslation();
  const [getCat, setGetCat] = useState();

  useEffect(() => {
    if (catNew.img && catNew.fact) {
     setGetCat(catNew)
    } else {
     setGetCat(cat)
    }
  }, [cat , catNew]);

  return (
    <>
      <Navbar changeText={changeText} />
      <section className="text-center">
        <Hero />
        <Btn refresDataCat={refresDataCat} refresDataDog={refresDataDog} />
      </section>
      <Pets getCat={getCat} dog={dog} />
    </>
  );
}
