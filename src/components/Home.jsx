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
  const { petNew, changeText, isTrueEng } = UseGetTranslation({ cat, dog });
  const [getPet, setGetPet] = useState();
 

  useEffect(() => {
    setGetPet(petNew)
  }, [petNew]);
 

  return (
    <>
      <Navbar changeText={changeText} />
      <section className="text-center">
        <Hero isTrueEng={isTrueEng} />
        <Btn isTrueEng={isTrueEng} refresDataCat={refresDataCat} refresDataDog={refresDataDog} />
      </section>
      {getPet ? (
        <Pets getPet={getPet} />
      ) : (
        <p className="text-center text-2xl font-bold">Los gatos y perros están llegando... <span className="loading loading-dots loading-xl"></span></p>
      )}
    </>
  );
}
