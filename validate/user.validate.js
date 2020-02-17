module.exports.createPost = (req, res, next) => {


    let errors = [];

    for (i = 0; i < req.body.phone.length; i++) {
        console.log(req.body.phone.charCodeAt(i));
        if (!(req.body.phone.charCodeAt(i) >= 48 && req.body.phone.charCodeAt(i) <= 57)) {
            errors.push('So dien thoai khong hop le');
            break;
        }
    }

    if (!req.body.name) {
        errors.push('Chua nhap ten')
    }

    if (!req.body.phone) {
        errors.push('Chua nhap phone')
    }

    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            values: req.body
        })
        return;
    }
    next();
}