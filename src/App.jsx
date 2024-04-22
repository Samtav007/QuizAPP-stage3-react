import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import QuizComponent from "./Components/QuizComponent";
import ResultComponent from "./Components/ResultComponent";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/QuizComponent" element={<QuizComponent />}></Route>
        <Route path="/ResultComponent" element={<ResultComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
