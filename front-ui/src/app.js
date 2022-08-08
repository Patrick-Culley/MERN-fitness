import React from 'react'; 
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';

function App(){
    return (
        <>
        <div className="App"> 
            <Router>
                <main>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                </main>
            </Router>
        </div>
        </>
    )
}

export default App; 