import React from "react";
import { ReactDOM } from "react";
import Person from "./Persons";
import Searchfield from "./Searchfield";
import ToggleButton from "./ToggleButton";
import { data } from "./data.js";

export default function Leftpart() {
  return (
    <>
      <div className="leftpart">
        <div className="search_toggle">
          <ToggleButton />
          <Searchfield />
        </div>
        {data.map((item) => (
          <Person {...item} />
        ))}
      </div>
    </>
  );
}
