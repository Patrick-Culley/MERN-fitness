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
    const onEditExercise = async exercise => {
        setWorkout(exercise);
        history.push("/edit-exercise");
    }

    //Delete a routine **************************************
    const onDeleteExercise = async _id => {
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
        <h1>Welcome to the fitness tracker homepage!</h1>
        <p>Here you may track your progress</p>
        <Table exercise={exercise} onDeleteExercise={onDeleteExercise} onEditExercise={onEditExercise}/>
        </>
    );
}

export default HomePage;