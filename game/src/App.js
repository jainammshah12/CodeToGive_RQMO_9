
import './App.css';
import Scenario from './components/Scenario';
import Game from './components/Game';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import Winning from './components/Winning';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Scenario />} />
          <Route path="/" element={<Game />} />
          <Route path="/win" element={<Winning />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
