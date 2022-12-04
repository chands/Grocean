const express = require('express');
const path = require('path');
const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/api').route);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})