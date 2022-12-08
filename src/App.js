import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;