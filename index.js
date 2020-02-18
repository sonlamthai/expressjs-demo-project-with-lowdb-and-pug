require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.router');
const loginRoute = require('./routes/login.router');

const middleware = require('./middleware/login.middleware');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json

app.use(cookieParser(process.env.Son));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/',  middleware.requireAuth, (req, res) => {
    res.render('index', {
        name: 'Son'
    });
});

app.use('/users', middleware.requireAuth, userRoute);

app.use('/auth', loginRoute);

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})