const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// add a new tag to image 


router.get('/', (req, res) => {
    let query = `SELECT "tags".name, "images_tag".image_id FROM "tags" 
                JOIN "images_tag" ON "images_tag".tag_id = "tags".id
                JOIN "images" ON "images".id = "images_tag".image_id;`;
    pool.query(query)
        .then((results) => {
            console.log('GET from DISPLAY Tags with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET  Display in tags router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;