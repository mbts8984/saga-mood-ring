const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended: true}));

/** ---------- ROUTES ---------- **/


// Routes
const displayTagRouter = require('./Routes/display.tags.router.js');
const imagesRouter = require('./Routes/images.router.js');
const tagRouter = require('./Routes/tags.router.js');
//app.use('/api/tags', tagsRouter);
app.use('/api/images', imagesRouter);
app.use('/api/tags', tagRouter)
app.use('/api/images/addtag', imagesRouter)
app.use('/api/imagetag', displayTagRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});

