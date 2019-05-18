const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// add a new tag to image 
router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "images_tag"("image_id", "tag_id")
    VALUES($1, $2);
  `
   console.log('HERE BE THE BODY', req.body);
    pool.query(queryText, [req.body.image_id, req.body.tag_id])
        .then((result) => {
            console.log('Response from POST tag route:', result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST tag route:', error);
            res.sendStatus(500);
        })
});

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