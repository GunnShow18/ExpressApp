// calls express into document 
const express = require('express');
// calls an instance of express
const app = express();
// sets path
const path = require('path');
// bringing privacy function into file
require('dotenv').load();

// call Pug interpretation into code
app.set('view engine', 'pug');

//This will make Express look for your templates in the "views" directory, 
//relative to the file in which you specified the above line.

app.set('views', path.join(__dirname, 'views'));
//folders must be views and scripts or else pug wont work
// pug is baby view of react, so much laws that govern pug will passover to react


// creates portal to Home Page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname+'/views/index.html'));
//     app.use(express.static(__dirname + '/public'));  
// });

// calling in public folder
app.use(express.static(path.join(__dirname, 'public')));

// // calling public SCRIPTS into express
// app.use(express.static(path.join(__dirname, '/public/javascripts')));

// calling bootstrap styling into application
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

// calling css styling into application
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));

// calling includes folder into pug layout template
app.use('/includes', express.static(__dirname + '/views/includes'));

// // creates portal to "pug version" of Home Page
app.get("/", (req, res) => {
    res.render('maps', { title: 'hey', message: 'hello there' })
});

// creates portal to youTube page
app.get('/youTube', (req, res) => {
    res.render('youtube', { title: 'hey', message: 'hello there' })
});

// creates portal to youTube page
app.get('/', (req, res) => {
    res.render('maps', {KEY: process.env.KEY})
});

// creates portal to youTube page
app.get('/youtube', (req, res) => {
    res.render('youtube', {KEY: process.env.KEY})
});

app.listen(3000);

console.log("Bonjour, the server is working!!");