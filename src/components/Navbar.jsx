import { useState } from "react";
import { UseGetTranslation } from "../hooks/useGetTranslation";

export default function Navbar({ changeText }) {
  
  const [señal, setSeñal] = useState(false);

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
        <label class="flex cursor-pointer gap-2">
          <span class="label-text">ENG</span>
          <input
            type="checkbox"
            class="toggle theme-controller"
            onChange={handleToggle}
          />
          <span class="label-text">ESP</span>
        </label>
      </div>
    </div>
  );
}
