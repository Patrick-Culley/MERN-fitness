import React from 'react';
import Table from '../components/Table.js'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setWorkout}){
    const history = useHistory();

    const [exercise, setFitness] = useState([]);

    // RETREIVE a routine ***********************************

    const loadExercise = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json(); 
        setFitness(exercises); 
    }

    // UPDATE a routine ************************************
    const onEdit = async exercise => {
        setWorkout(exercise);
        history.push("/edit-exercise");
    }

    //Delete a routine **************************************
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercise = await getResponse.json();
            setFitness(exercise);
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }
    } 
    
    
    useEffect(() => {
        loadExercise();
    }, []);

    return (
        <>
        <h2>Welome to the home page!</h2>
        <p>Begin by entering your exercise routine below:</p>
        <Table exercise={exercise} onDelete={onDelete} onEdit={onEdit}/>
        </>
    );
}

export default HomePage;