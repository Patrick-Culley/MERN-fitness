import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export function CreateExercise() {

    const history = useHistory();

    const [name, setName]       = useState('');
    const [reps, setReps]       = useState('');
    const [weight, setWeight]   = useState('');
    const [unit, setUnit]       = useState('');
    const [date, setDate]       = useState('');

    const addExercise = async() => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'post', 
            body: JSON.stringify(newExercise), 
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the movie!");
        } else {
            alert(`Failed to add movie, status code = ${response.status}`);
        }
        history.push('/')
    } 


    return (
        <>
        <h1>Create an exercise.</h1>
        <form onSubmit={(e) => {e.preventDefault();}}>
            <fieldset>
            <label for="name">Exercise</label>
            <input 
                id="name"
                type="text"
                placeholder="Exercise name"
                value={name}
                onChange ={e => setName(e.target.value)}/>

            <label for="reps">Reps</label>
            <input 
                id="reps"
                type="number"
                placeholder="# of reps"
                value={reps}
                onChange ={e => setReps(e.target.value)}/>

            <label for="weight">Weight</label>
            <input 
                id="weight"
                type="number"
                placeholder="weight"
                value={weight}
                onChange ={e => setWeight(e.target.value)}/>

            <label for="unit">Unit</label>
            <input 
                id="unit"
                type="text"
                placeholder="lb or kg"
                value={unit}
                onChange ={e => setUnit(e.target.value)}/>

            <label for="date">Date</label>
            <input 
                id="date"
                type="text"
                placeholder="date"
                value={date}
                onChange ={e => setDate(e.target.value)}/>

            <label for="submit">
            <button
                type="submit"
                onClick={addExercise}
                id="submit"
            >Add</button> to exercises</label>
            </fieldset>
        </form>
        </>
    ); 
}

export default CreateExercise; 