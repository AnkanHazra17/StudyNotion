const express = require("express");
const { auth, isAdmin } = require("../middlewares/auth");
const { getAllUsersAndCourseDetails } = require("../controllers/Analytics");

const router = express.Router();

router.get("/all-user-details", auth, isAdmin, getAllUsersAndCourseDetails);

module.exports = router;
