const db = require('../db');


module.exports.addToCart = (req, res, next) => {
    let sessionId = req.signedCookies.sessionId
    let productId = req.params.productId;

    if (!sessionId) {
        res.redirect('/products');
        return;
    }

    let count = db.get('sessions')
    .find({id: sessionId})
    .get('cart.' + productId, 0)
    .value();

    db.get('sessions')
    .find({id: sessionId})
    .set('cart.' + productId, count + 1)
    .write();

    res.redirect('/products');
}