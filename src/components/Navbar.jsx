import { useState } from "react";

export default function Navbar({ changeText }) {
  const [señal, setSeñal] = useState(true);

  const handleToggle = (e) => {

    if (setSeñal) {
      changeText(señal);
    }
    setSeñal(!e.target.checked);
  };

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Pets Facts</a>
      </div>
      <div className="flex-none pr-4">
        <label className="flex cursor-pointer gap-2">
          <span className="label-text">ENG</span>
          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={handleToggle}
          />
          <span className="label-text">ESP</span>
        </label>
      </div>
    </div>
  );
}
