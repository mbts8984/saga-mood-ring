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

router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "images_tag"( "tag_id")
    VALUES($1);
  `
    console.log('HERE BE THE BODY', req.body.tagId);
    pool.query(queryText, [req.body.tagId])
        .then((result) => {
            console.log('Response from POST tag route:', result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST tag route:', error);
            res.sendStatus(500);
        })
});


module.exports = router;