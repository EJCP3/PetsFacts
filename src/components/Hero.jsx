import React from "react";
import Btn from "./Btn";

export default function Hero() {
  return (
    <div>
      <div className="hero  h-60">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Facts</h1>
            <p className="py-6">
             Random facts about Cats and Dogs 
            </p>
           <Btn/>
          </div>
        </div>
      </div>
    </div>
  );
}
