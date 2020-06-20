require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const userRoute = require('./routes/user.router');
const loginRoute = require('./routes/login.router');
const productRoute = require('./routes/product.router');
const cartRoute = require('./routes/cart.router');
const transferRoute = require('./routes/transfer.router');

const middleware = require('./middleware/login.middleware');
const sessionMidleWare = require('./middleware/session.middleware');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser('ajshdjasdl132'));
app.use(sessionMidleWare);

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', middleware.requireAuth, (req, res) => {
    res.render('index');
});





app.use('/users', middleware.requireAuth, userRoute);
app.use('/auth', loginRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', middleware.requireAuth, csrf({ cookie: true }), transferRoute);

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})