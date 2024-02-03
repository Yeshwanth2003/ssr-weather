import React from "react";
import Search from "./Search";

export default function Header({ date_place }) {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-text">
          <h1>WEATHER</h1>
          <span>{date_place}</span>
        </div>
        <Search />
      </div>
    </>
  );
}
