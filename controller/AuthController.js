const model = require("../models/indexmodel.js");
const auth = {};

auth.loginform = async function (req, res) {
  res.render("../views/login");
};

auth.login = async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;
    const user = await model.user.findOne({
      where: { email: email, password: password },
    });
    if (user === null) {
      // res.redirect("/login");
      console.log("Not found!");
      res.status(404).json({ msg : "User Not Found",status : 404 });
    } else {
      req.session.loggedin = true;
      req.session.email = email;
      console.log(req.session);
      res.status(200).json({ msg : "Logged In Succesfully.",data: req.session,status : 200  });
      // res.redirect("/dashboard");
    }
  } catch (err) {}
};

module.exports = auth;
