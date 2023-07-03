const {Router} = require("express");
const router = Router();
const UsersController = require("../controller/users.controller");


router.get('/usuario', UsersController.getUser);
router.post('/usuario', UsersController.postUser);
router.put('/usuario', UsersController.putUser);
router.delete('/usuario', UsersController.deleteUser);


module.exports = router;    