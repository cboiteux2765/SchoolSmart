const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Up and running!');
});

app.get('/about', (req, res) => {
    res.redirect('localhost:8080/about');
});

app.post('/', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})