const {Router} = require("express");
const router = Router();
const UsersController = require("../controller/users.controller");


router.get('/usuario', UsersController.getUser);
router.get('/usuario/:student_id', UsersController.getUserParams);


module.exports = router;  