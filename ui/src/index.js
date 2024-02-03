import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import "./components/styles/main.css";

ReactDom.hydrateRoot(
  document.getElementById("root"),
  <App
    _data={
      window._appData || {
        header: "Monday, 8 August | chennai,IN",
        essentials: {
          cel: "20",
          wind_speed: "5",
          description: "clear sky",
          hum: "26",
          con: "IN",
        },
      }
    }
  />
);
