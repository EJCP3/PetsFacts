export default function Btn({ refresDataCat, refresDataDog, isTrueEng }) {
  const handleClick = (e) => {
    const nameBtn = e.target.name;

    nameBtn === "cat"
      ? refresDataCat()
      : nameBtn === "dog"
      ? refresDataDog()
      : nameBtn === "both"
      ? (refresDataCat(), refresDataDog())
      : null;
  };

  return (
    <div className="join">
      <button name="cat" className="btn join-item" onClick={handleClick}>
        {isTrueEng ? "Gato" : "Cat"}
      </button>
      <button name="dog" className="btn join-item" onClick={handleClick}>
        {isTrueEng ? "Perro" : "Dog"}
      </button>
      <button name="both" className="btn join-item" onClick={handleClick}>
        {isTrueEng ? "Ambos" : "Both Pets"}
      </button>
    </div>
  );
}
