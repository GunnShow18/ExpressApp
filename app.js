// calls express into document 
const express = require('express');
// calls an instance of express
const app = express();
// sets path
const path = require('path');
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

// // creates portal to "pug version" of Home Page
app.get("/", (req, res) => {
    res.render('maps', { title: 'hey', message: 'hello there' })
});

// creates portal to youTube URL Page
app.get('/url', (req, res) => {
    res.render('url', { title: 'hey', message: 'hello there' })
});

// creates portal to youTube shortened URL Page
app.get('/urlComp', (req, res) => {
    res.render('urlComp', { title: 'hey', message: 'hello there' })
});

// creates portal to youTube page
app.get('/youTube', (req, res) => {
    res.render('youtube', { title: 'hey', message: 'hello there' })
});

// creates portal to youTube top 10 page
app.get('/youTube10', (req, res) => {
    res.render('youtubeComp', { title: 'hey', message: 'hello there' })
});


app.listen(3000);

console.log("Bonjour, the server is working!!");