export default function Card({ fact, img }) {
  return (
    <article className="card bg-base-200 w-96 shadow-sm transition-transform duration-500">
      <figure className="h-80">
        <img className="w-full h-80" src={img} alt={fact} />
      </figure>
      <div className="card-body">
        <p>{fact}</p>
      </div>
    </article>
  );
}
