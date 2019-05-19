const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();


// get all the images 
router.get('/', (req, res) => {
    let query = `SELECT "images".id, "images".title, "images".path, array_agg("images_tag".tag_id) as tags FROM "images"
                 FULL JOIN "images_tag" ON "images_tag".image_id = "images".id
                 GROUP BY "images".id ORDER BY "images".id;`
    pool.query(query)
    .then( (results) => {
        console.log('GET from images router with results: ', results);
        res.send(results.rows);
    }).catch( (error) => {
        console.log('error in GET in images router: ', error);
        res.sendStatus(500);
    })
})

//post category tags to router
router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "images_tag"( "tag_id", "image_id")
    VALUES($1, $2);
  `
    console.log('HERE BE THE BODY', req.body.tagId);
    pool.query(queryText, [req.body.tagId, req.body.imageId])
        .then((result) => {
            console.log('Response from POST tag route:', result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST tag route:', error);
            res.sendStatus(500);
        })
});


module.exports = router;