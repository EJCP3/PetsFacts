import React from 'react'

export default function Navbar() {
  return (
   <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Pets Facts</a>
  </div>
  <div className="flex-none pr-4" >
    <button className="btn btn-square btn-ghost">
    language
    </button>
  </div>
</div>
  )
}
