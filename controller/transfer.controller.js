const shortId = require('shortid');

const db = require('../db');

module.exports.transfer = (req, res, next) => {
    res.render('transfer/transfer', {
        csrfToken: req.csrfToken()
    });
}

module.exports.postTransfer = (req, res, next) => {
    let dataTransfers = {
        id: shortId.generate(),
        accountId: req.body.accountId,
        amount: parseInt(req.body.amount),
        userId: req.signedCookies.userId
    }

    db.get('transfers').push(dataTransfers).write();


    res.redirect('/users');
}