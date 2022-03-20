const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('./public/homepage.html');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});