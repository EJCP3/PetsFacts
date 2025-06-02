
import Card from "./Card";
// import { useEffect, useState } from "react";

export default function Pets({ getCat , dog }) {



  return (
    <section className="flex gap-4 justify-center mt-10 px-4">
     {
      getCat ?(
      <Card img={getCat?.img}  fact={getCat?.fact} />
      )
      :(<p>no hay gatos</p>)
     }
      {/* <Card data={dog} /> */}
    </section>
  );
}
