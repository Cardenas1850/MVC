const withAuth = (req, res, next) => {
    if (!res.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;