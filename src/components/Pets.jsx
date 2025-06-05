
import Card from "./Card";

export default function Pets({ getCat , getDog }) {



  return (
    <section className="flex gap-4 justify-center mt-10 px-4">
     {
      getCat ?(
      <Card img={getCat?.img}  fact={getCat?.fact} />
      )
      :(<p>no hay gatos</p>)
     }
     {
      getDog? (
        <Card img={getDog?.img} fact={getDog?.fact} />
      ): (<p>no hay gatos</p>)
     }
    </section>
  );
}
