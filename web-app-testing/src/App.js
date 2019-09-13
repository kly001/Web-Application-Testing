import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  const [hits, setHits] = useState(0)
  const [fouls, setFouls] = useState(0)

  return (
    <div className="App">
        <h1> Web-Application-Testing Project</h1>
    </div>
  );
}

export default App;
