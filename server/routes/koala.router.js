const express = require('express');
const koalaRouter = express.Router();

const pool = require('../modules/pool');



// GET
koalaRouter.get('/',(req,res)=>{
    let queryText = 'SELECT * FROM "koala";';
    pool.query(queryText)
    .then(result => {
        //send content to client
        console.log(result.rows);
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
        console.log(req.body)
        res.sendStatus(201); // its working :)
    }).catch(error =>{
        console.log('we have an error in our post', error);
        res.sendStatus(500); // its not working :(
    })
});


// PUT
koalaRouter.put('/:id', (req, res) => {
    console.log('in the PUT');
    let idToUpdate = req.params.id;
    let data = req.body;
    console.log('data is:', data);
    let sqlText = 'UPDATE "koala" SET "ready_to_transfer" = true WHERE "id" = $1;';
    pool.query(sqlText,[idToUpdate])
    .then(result => {
        console.log('koala has been updated!', result.rows);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error with PUT', error);
        res.sendStatus(500);
    })
})

// DELETE
koalaRouter.delete('/:id', (req, res) => {
    console.log('in DELETE');
    let idToDelete = req.params.id;
    let sqlText = 'DELETE FROM "koala" WHERE "id" = $1;';
    pool.query(sqlText,[idToDelete])
    .then(result => {
        console.log('koala has been deleted!', result.rows);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error with DELETE', error);
        res.sendStatus(500);
    })
})

module.exports = koalaRouter;