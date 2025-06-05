

export default function Hero({isTrueEng}) {
  return (
    <section>
      <article className="hero  h-60">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              {isTrueEng ? "Datos" : "Facts"}
            </h1>
            <p className="py-6">
              {isTrueEng ? "Datos randoms sobre Gatos y Perros" : "Random facts about Cats and Dogs"}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
