import React, { useState } from "react";

export default function Navbar({ changeText }) {
  const [señal, setSeñal] = useState(true);

  const handleToggle = () => {
    if (setSeñal) {
      changeText(señal);
      console.log(señal);
    }
    setSeñal(!señal);
  };

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Pets Facts</a>
      </div>
      <div className="flex-none pr-4">
        <button className="btn btn-square btn-ghost" onClick={handleToggle}>
          language
        </button>
      </div>
    </div>
  );
}
