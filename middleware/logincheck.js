module.exports = {
    login_check : (req,res,next) => {
        if ((req.session.loggedin == "") || (typeof req.session.loggedin === 'undefined') || (req.session.eamil === null)) {
            res.redirect('/login')
          } else next() // or do something else if there logged in
    }
}