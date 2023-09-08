const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));

let studyGroups = [];


app.get('/', (req, res) => {
    res.on('error', err => {
        console.log(err);
        res.send('Error parsing JSON data.');
    });
});

app.post('/', (req, res) => {
    
});

app.get('/joinstudygroup', (req, res) => {
    console.log('Up and running!');
});

app.post('/joinstudygroup/:id', (req, res) => {
    // res.status(200).send({
    //     "subject":"math",
    //     "level":"AP",
    //     "grade":"A"
    // });
});

app.get('/viewstudygroups', (req, res) => {

});

app.post('/viewstudygroups', (req, res) => {

});

app.get('/createstudygroup', (req, res) => {

});

app.post('/createstudygroup:id', (req, res) => {
    let newGroup = req.params['id'];
    studyGroups.push(newGroup);
    studyGroups.sort((a, b) => a.localeCompare(b));
});

app.get('/login', (req, res) => {
    res.send({
        "user":"clem",
        "pw":"123",
    });
});

app.post('/login/:id', (req, res) => {
    
});

app.get('/login', (req, res) => {

});

app.post('/signup/:id', (req, res) => {
    
});


app.listen(port, (error) => {
    let status = error ? error : `Listening on port ${port}`;
    console.log(status);
});