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


// PUT


// DELETE

module.exports = koalaRouter;