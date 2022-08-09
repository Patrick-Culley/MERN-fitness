import React from 'react';
import './App.css';
import HomePage from './pages/HomePage.js'; 
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [exercise, setWorkout] = useState([]);

  return (
    <>
    <Router>
    <header className="App-header">
      <h1>Feel the MERN</h1>
      <p>Track and log exercise routines.</p>
      <Navigation /> 
    </header> 
    {/* <main>
      <Route path="/" exact>
        <HomePage setWorkout={setWorkout}/>
      </Route>
    </main> */}
    </Router>
    </>
  );
}

export default App;