"use client";
import svg_plant from "./plant_pot.svg";
import "./globals.css";
import React from "react";
import TaskListApp from "../components/TaskListApp";
import { Provider } from "react-redux";
import store from "../redux/index";
import Image from "next/image";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="logo_container">
          <div className="logo_bg"></div>
          <Image
            className="logo"
            src={svg_plant}
            width={100}
            height={100}
            alt="logo"
          />
          <h2 className="text-lg text-green-800 font-bold">The TaMApp</h2>
        </div>
        <div className="app_container">
          <TaskListApp />
        </div>
      </div>
    </Provider>
  );
}

export default App;
