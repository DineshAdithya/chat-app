import React from "react";
import Leftpart from "./Leftpart";
import Rightpart from "./Rightpart";
import { Provider } from "./Context/DataProvider";
export default function App() {
  return (
    <>
      <div className="hero">
        <Provider>
          <Leftpart />
          <Rightpart />
        </Provider>
      </div>
    </>
  );
}
