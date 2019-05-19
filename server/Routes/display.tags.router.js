const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// add a new tag to image 


router.get('/', (req, res) => {
    let query = `SELECT "tags".name, "tags".id FROM "tags"
                JOIN "images_tag" ON "images_tag".tag_id = "tags".id
                WHERE "images_tag".image_id = $1;`;
    console.log('req.params is: ', req.params);
    console.log('req.body is: ', req.body);
    console.log('req.query is: ', req.query);
    let imageId = req.query.imageId;
    pool.query(query, [imageId])
        .then((results) => {
            console.log('GET from DISPLAY Tags with results: ', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET  Display in tags router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;