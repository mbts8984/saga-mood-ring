const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
    let query = 'SELECT * FROM "images";';
    pool.query(query)
    .then( (results) => {
        console.log('GET from images router with results: ', results);
        res.send(results.rows);
    }).catch( (error) => {
        console.log('error in GET in images router: ', error);
        res.sendStatus(500);
    })
})


module.exports = router;