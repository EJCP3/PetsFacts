import { useEffect, useState } from "react";
import { getCatPictures } from "../services/Cat";
import Card from "./Card";
import { getDogPictures } from "../services/Dog";

export default function Pets() {
  const [cat, setCat] = useState("");
  const [dog, setDog] = useState("");

  useEffect(() => {
    getCatPictures().then((newFact) => setCat(newFact));
    getDogPictures().then((newFact) => setDog(newFact));
  }, []);

  console.log(dog);
  return (
    <section className="flex gap-4 justify-center mt-10 px-4">
      <Card img={cat.url} />
      <Card img={dog.url} />
    </section>
  );
}
