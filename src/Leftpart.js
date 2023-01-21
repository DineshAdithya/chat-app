import React, { useState } from "react";
import { ReactDOM } from "react";
import Person from "./Persons";
import Searchfield from "./Searchfield";
import ToggleButton from "./ToggleButton";
import { data } from "./data.js";

export default function Leftpart() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="leftpart">
        <div className="search_toggle">
          <ToggleButton />
          <Searchfield />
        </div>
        {data.map((item, index) => (
          <Person
            {...item}
            index={index}
            selectedIndex={selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </>
  );
}
