import React from 'react'

export default function Navbar() {
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
    Idiomas
    </button>
  </div>
</div>
  )
}
