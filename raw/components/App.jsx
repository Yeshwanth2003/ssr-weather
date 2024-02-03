import React from "react";
import Body from "./Body";
import Header from "./Header";

export default function App({ _data }) {
  return (
    <>
      <div className="app">
        <div className="app-decorative"></div>
        <div className="app-container">
          <Header date_place={_data.header} />
          <Body essentials={_data.essentials} />
        </div>
      </div>
    </>
  );
}
