

export default function Card({img, title, paragraph}) {
  return (
    <div className="card bg-base-200 w-96 shadow-sm">
  <figure>
    <img className=""
      src={img}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{paragraph}
    </p>
  </div>
</div>

  )
}
