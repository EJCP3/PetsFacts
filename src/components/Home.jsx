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
  const { dogNew, catNew, changeText, isTrueEng } = UseGetTranslation({ cat, dog });
  const [getCat, setGetCat] = useState();
  const [getDog, setGetDog] = useState();

  useEffect(() => {
    setGetCat(cat);
    setGetDog(dog);
  }, [cat, dog]);
  useEffect(() => {
    setGetCat(catNew);
    setGetDog(dogNew);
  }, [catNew, dogNew]);

  return (
    <>
      <Navbar changeText={changeText} />
      <section className="text-center">
        <Hero isTrueEng={isTrueEng} />
        <Btn isTrueEng={isTrueEng} refresDataCat={refresDataCat} refresDataDog={refresDataDog} />
      </section>
      {getCat && getDog ? (
        <Pets getCat={getCat} getDog={getDog} />
      ) : (
        <p className="text-center text-2xl font-bold">Los gatos y perros están llegando... <span className="loading loading-dots loading-xl"></span></p>
      )}
    </>
  );
}
