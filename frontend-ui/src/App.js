import React from 'react';
import './App.css';
import HomePage from './pages/HomePage.js'; 
import CreateExercise from './pages/CreatePage.js';
import EditExercise from './pages/EditPage.js'; 
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [exercise, setWorkout] = useState([]);

  return (
    <>
    <Router>
    <header className="App-header">
      <h1>StrengthTracker</h1>
      <p>Track and log exercise routines.</p>
      <Navigation /> 
    </header> 
    <main>
      <Route path="/" exact>
        <HomePage setWorkout={setWorkout}/>
      </Route>

      <Route path="/create-exercise"> 
        <CreateExercise />
      </Route>

      <Route path="/edit-exercise">
        <EditExercise exercise={exercise}/>
      </Route>
      
    </main>
    </Router>
    </>
  );
}

export default App;