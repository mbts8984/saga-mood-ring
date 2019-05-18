const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// add a new tag to image 


router.get('/', (req, res) => {
    let query = 'SELECT * FROM "tags";';
    pool.query(query)
        .then((results) => {
            console.log('GET from tags router with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in tags router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;