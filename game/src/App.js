
import './App.css';
import Scenario from './components/Scenario';
import Game from './components/Game';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import Winning from './components/Winning';
import { useState } from 'react';
let count = 1;

function App() {
  const [currCount, setCurrCount] = useState(count);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Scenario />} />
          <Route path="/" element={<Game count={currCount} setCount={setCurrCount}/>} />
          <Route path="/win" element={<Winning count={currCount}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
