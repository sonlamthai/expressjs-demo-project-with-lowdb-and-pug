module.exports.createPost = (req, res, next) => {


    let errors = [];
    let digits = '0123456789';

    if (digits.indexOf(req.body.phone.charAt(0)) === -1) {
        errors.push('So dien thoai khong hop le')
    }

    else {

        if (!req.body.name) {
            errors.push('Chua nhap ten')
        }

        if (!req.body.phone) {
            errors.push('Chua nhap phone')
        }


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