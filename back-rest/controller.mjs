import 'dotenv/config'; 
import express from 'express';
import * as exercises from './model.mjs';  

const PORT = process.env.PORT; 
const app = express(); 
app.use(express.json()); 

// CREATE/POST controller *****************************************
app.post('/exercises', (req, res) => {
    exercises.createWorkout(
        req.body.name,
        req.body.reps,
        req.body.weight,
        req.body.unit,
        req.body.date
    ).then(exercise => {
        res.status(201).json(exercise);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ Error: 'Request failed' })
      })
})

// GET controller *************************************************
app.get('/exercises', (req, res) => {
  exercises.findWorkout()
    .then(exercises => {
      res.send(exercises)
    })
    .catch(error => {
      console.error(error);
      res.status(500).json(error);
  })
})

app.get('/exercises/:_id', (req, res) => {
  const exerciseId = req.params._id; 
  exercises.findExerciseById(exerciseId)
    .then(exercises => {
      if (exercises !== null) {
        res.json(exercises)
      } else {
          res.status(404).json({ Error: 'Document not found' });
      }  
    })
    .catch(error => {
      res.status(400).json({ Error: 'Request to retrieve document failed' });
  });
})

// UPDATE/PUT controller ******************************************
app.put('/exercises/:_id', (req, res) =>{
  exercises.replaceExercise(
    req.params._id, 
    req.body.name, 
    req.body.reps, 
    req.body.weight,
    req.body.unit,
    req.body.date, 
  )
  
  .then(numUpdated => {
    if (numUpdated === 1){
      res.json({
        _id: req.params._id, 
        name: req.body.name, 
        reps: req.body.reps, 
        weight: req.body.weight,
        unit: req.body.unit,
        date: req.body.date,
      })
    } else {
      res.status(404).json({ Error: 'Document not found' });
    }
  }).catch(error => {
    console.error(error);
    res.status(400).json({ Error: 'Request to update a document failed' });
  });
})

// DELETE controller **********************************************
app.delete('/exercises/:_id', (req, res) => {
  exercises.deleteById(req.params._id)
      .then(deletedCount => {
          if (deletedCount === 1) {
              res.status(204).send();
          } else {
              res.status(404).json({ Error: 'Document not found' });
          }
      })
      .catch(error => {   
          console.error(error);
          res.send({ error: 'Request to delete a document failed' });
      });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});