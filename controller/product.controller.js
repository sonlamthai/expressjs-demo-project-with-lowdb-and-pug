const db = require('../db');

module.exports.showProducts = (req, res, next) => {
    let page = parseInt(req.query.page) || 1;
    let perPage = 8;

    let start = (page - 1) * perPage;
    let end = page * perPage;

    let numberPage = [];
    let pages = db.get('products').value().length / perPage;

    for (let i = 1; i < pages + 1; i++) {
        numberPage.push(i);        
    }
    
    res.render('products/index', {
        products: db.get('products').value().slice(start, end),
        pages: numberPage, 
        page: page
    });
}


