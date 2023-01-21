import React from "react";
import { ReactDOM } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Rightpart() {
  return (
    <>
      <div className="rightpart">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
