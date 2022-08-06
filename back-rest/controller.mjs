import 'dotenv/config'; 
import express from 'express';

const PORT = process.env.PORT; 
const app = express(); 
app.use(express.json()); 

// CREATE/POST controller *****************************************

// GET controller *************************************************

// UPDATE/PUT controller ******************************************

// DELETE controller **********************************************

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});