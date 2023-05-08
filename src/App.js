import { useState } from "react";
import Home from "./scenes/Home.jsx"
import AddFigure from "./scenes/AddFigure.jsx"

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <FigureList />
      <Home />
      <AddFigure />
      <Footer />
    </div>
  );
}

export default App;
