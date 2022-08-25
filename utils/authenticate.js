const authenticate = (req, res, next) => {
    if (!req.session.account_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = authenticate;