const express = require("express");
const router = express.Router();
const controller = require("../controller/indexcontroller.js");
const middleware = require("../middleware/logincheck.js");


router.get("/users",middleware.login_check,controller.user.getAll);
router.get("/add_users",middleware.login_check,controller.user.user_form);
router.post("/add_users",middleware.login_check,controller.user.add_user);
router.get("/edit_users/:id",middleware.login_check,controller.user.user_form);
router.put("/update_users/:id",middleware.login_check,controller.user.update_user);
router.delete("/delete_users/:id",middleware.login_check,controller.user.delete_user);
router.delete("/mdelete",middleware.login_check,controller.user.multi_delete);

router.get('/login',controller.auth.loginform);
router.post('/login',controller.auth.login);
router.get("/dashboard",middleware.login_check,controller.dashoboard.getindex);



module.exports = router;