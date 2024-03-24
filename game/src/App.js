
import './App.css';
import Scenario from './components/Scenario';
import Game from './components/Game';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Scenario />}>
            
          </Route>
          <Route path="/" element={<Game />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
