import React from "react";
import Leftpart from "./Leftpart";
import Rightpart from "./Rightpart";

export default function App() {
  return (
    <>
      <div className="hero">
        <Leftpart />
        <Rightpart />
      </div>
    </>
  );
}
