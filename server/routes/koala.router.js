const express = require('express');
const koalaRouter = express.Router();

const pool = require('../modules/pool');

// DB CONNECTION




// GET

koalaRouter.get('/',(req,res)=>{
    let queryText = 'SELECT * FROM "koala";';
    pool.query(queryText)
    .then(result => {
        //send content to client
        res.send(result.rows);
    }).catch(error =>{
        console.log('we have an error in our get', error);
        res.sendStatus(500);
    })
});




// POST

koalaRouter.post('/',(req,res)=>{
    const newKoala = req.body;
    let queryText = `INSERT INTO "koala"("name", "gender", "age", "ready_to_transfer", "notes")
    VALUES ($1, $2, $3, $4, $5);
    
    `; // Naming queryText for function
    const values = [newKoala.name, newKoala.gender,newKoala.age,newKoala.ready_to_transfer,newKoala.notes];

    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(201); // its working :)
    }).catch(error =>{
        console.log('we have an error in our post', error);
        res.sendStatus(500); // its not working :(
    })
});


// PUT



// DELETE

module.exports = koalaRouter;