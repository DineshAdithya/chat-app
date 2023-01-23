import React, { useContext, useState } from "react";
import Person from "./Persons";
import Searchfield from "./Searchfield";
import ToggleButton from "./ToggleButton";
// import { data } from "./data.js";
import { DataContext } from "./Context/DataProvider";

export default function Leftpart() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [message, setMessage] = useState(null);

  const { data, showMessages } = useContext(DataContext);
  // selectedData;
  const onClickPerson = (id) => {
    // console.log(key);
    showMessages(data[id]);
    // initialData.selectedData();
  };

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
            onClickPerson={onClickPerson}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}
