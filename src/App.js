
import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Mountains from './Mountains';
import Beaches from './Beaches';
import Birds from './Birds';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mountain" element={<Mountains />} />
          <Route path="/Beaches" element={<Beaches />} />
          <Route path="/Birds" element={<Birds />} />
          <Route path='/Food' element={<Food />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
