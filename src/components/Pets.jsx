import Card from "./Card";

export default function Pets({ getPet }) {
  return (
    <section className="flex gap-4 justify-center mt-10 px-4">
      {getPet.cat ? (
        <Card img={getPet.cat.img} fact={getPet.cat.fact} />
      ) : (
        <p className="text-center text-2xl font-bold">no hay gatos</p>
      )}
      {getPet.dog ? (
        <Card img={getPet.dog.img} fact={getPet.dog.fact} />
      ) : (
        <p className="text-center text-2xl font-bold">no hay Perro</p>
      )}
    </section>
  );
}
