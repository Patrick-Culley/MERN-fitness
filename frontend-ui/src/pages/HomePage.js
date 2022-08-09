import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setWorkout}){

    const [exercise, setFitness] = useState([]);

    return (
        <>
        <h1>This is the homepage</h1>
        <p>Here you may track your progress</p>
        </>
    );
}

export default HomePage;