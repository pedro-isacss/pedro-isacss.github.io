import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Dash from "./Components/Dash";
import Overview from "./Components/Overview";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "App dark-app" : "App"}>
      <Header darkChange={setDark} />
      <Dash />
      <Overview />
      <div
        class="attribution"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <span>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            style={{ color: "gray", fontWeight: 700 }}
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.instagram.com/ss.pedroisac/"
            style={{ color: "gray", fontWeight: 700 }}
          >
            Pedro Isac
          </a>
        </span>
        .
      </div>
    </div>
  );
}
