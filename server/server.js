const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/


// Routes
const imagesRouter = require('./Routes/images.router.js');
const tagRouter = require('./Routes/tags.router.js');
//app.use('/api/tags', tagsRouter);
app.use('/api/images', imagesRouter);
app.use('/api/tags', tagRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});

