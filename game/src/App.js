
import './App.css';
import Scenario from './components/Scenario';
import Home from './components/Home';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Winning from './components/Winning';
import { useState } from 'react';
let count = 1;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Scenario />} />
          <Route path="/" element={<Home />} />
          <Route path="/win" element={<Winning />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
