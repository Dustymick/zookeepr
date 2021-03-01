const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Both of these app,use middleware functions need to be setup everytime you create a server that is looking to accept POST data. parse incoming string or array data. This method is built into Express.js//
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('zookeepr-public'));







//this method was used to make our server listen to the request//
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
