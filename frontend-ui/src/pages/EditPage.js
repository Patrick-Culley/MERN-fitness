import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercise = ({exercise}) => {

    const [name, setName]     = useState(exercise.name);
    const [reps, setReps]     = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit]     = useState(exercise.unit);
    const [date, setDate]     = useState(exercise.date);
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit, 
                date: date, 
            }),
            headers: {'Content-Type': 'application/json',},
        });
        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <h2>Edit Exercise.</h2>
        <p>Here you may edit your exercise below</p>
        <form onSubmit={(e) => {e.preventDefault();}}>
            <fieldset>
            <label for="name">Exercise</label>
            <input 
                id="name"
                type="text"
                value={name}
                onChange ={e => setName(e.target.value)}/>

            <label for="reps">Reps</label>
            <input 
                id="reps"
                type="number"
                value={reps}
                onChange ={e => setReps(e.target.value)}/>

            <label for="weight">Weight</label>
            <input 
                id="weight"
                type="number"
                value={weight}
                onChange ={e => setWeight(e.target.value)}/>
  
            <select name="unit" id="unit" onChange={e => setUnit(e.target.value)}>
                <option value={unit} selected disabled hidden>{unit}</option>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>

            <label for="date">Date</label>
            <input 
                id="date"
                type="text"
                value={date}
                onChange ={e => setDate(e.target.value)}/>

            <label for="submit">
            <button
                onClick={editExercise}
                id="submit"
            >Save</button> updates</label>
            </fieldset>
        </form>
        </>
    )
}

export default EditExercise; 