import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once('open', (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Movies collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const fitnessSchema = mongoose.Schema({
	name: { type: String, required: true },
	reps: { type: Number, required: true },
	weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

// Compile the model from the schema.
const Exercise = mongoose.model('Exercise', fitnessSchema);

// CreateExercise 
const createWorkout = async (name, reps, weight, unit, date) => {
    const workout = new Exercise({ 
        name: name, 
        reps: reps, 
        weight: weight,
        unit: unit,
        date: date,
    });
    return workout.save();
}

// RETRIEVE ALL EXERCISES ********************************* 
const findWorkout  = async() => {
    const locate = Exercise.find() 
    return locate.exec() 
}

// FIND EXERCISE BY ID ************************************ 
const findExerciseById = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

// DELETE ************************************************ 
const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
};

// UPDATE *************************************************
const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({_id: _id }, {
        name: name, 
        reps: reps, 
        weight: weight,
        unit: unit,
        date: date,
    });
    return result.modifiedCount;
}


export {createWorkout, findWorkout, findExerciseById, deleteById, replaceExercise} 