const shortid = require('shortid');
let db = require('../db');

module.exports.index = (req, res) => {
    res.render('./users/user', {
        students: db.get('users').value()
    })
};

module.exports.search = (req, res) => {
    let valueQuery = req.query.q;

    let matchedUsers = db.get('users').value().filter((student) => {
        return student.name.indexOf(valueQuery) !== -1;
    })

    res.render('./users/user', {
        students: matchedUsers
    });
};

module.exports.create = (req, res) => {
    res.render('./users/create');
};


module.exports.viewMem = (req, res) => {
    let id = req.params.id;
    let users = db.get('users').find({id: id}).value();
  
    res.render('./users/view', {
        users: users
    })
};

module.exports.createMem = (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
}