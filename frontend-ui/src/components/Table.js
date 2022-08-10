import React from 'react';
import Row from './Row'; 

function Table({ exercise, onDelete, onEdit }){
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {exercise.map((exercise, i) =>
                    <Row 
                        exercise={exercise}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                )}
            </tbody>
        </table>
    )
}

export default Table; 