const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.router');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Son'
    });
});

app.use('/users', userRoute);

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})