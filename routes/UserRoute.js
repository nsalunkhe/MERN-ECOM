const express=require("express");
const { createUser, loginUser, logoutUser, forgotPassword, resetPassword, userDetails, updatePassword, updateProfile, getAllUsers, getSingleUser, updateUserRole, deleteUser } = require("../controller/UserController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router=express.Router();

router.route("/registration").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/passsword/forgot").post(forgotPassword);
router.route("/passsword/reset/:token").put(resetPassword);
router.route("/me/update").put(isAuthenticatedUser,updatePassword);
router.route("/me/update/info").put(isAuthenticatedUser,updateProfile);
router.route("/me").get(isAuthenticatedUser,userDetails);
router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUsers);
router.route("/admin/user/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser);
router.route("/admin/user/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole)
router.route("/admin/user/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser)
module.exports=router