const express = require("express");
const { auth, isAdmin } = require("../middlewares/auth");
const {
  getAllUsersAndCourseDetails,
  getCategoryCourseGraphData,
  getCourseAnalyticsData,
} = require("../controllers/Analytics");

const router = express.Router();

router.get("/all-user-details", auth, isAdmin, getAllUsersAndCourseDetails);
router.get(
  "/category-course-analytics",
  auth,
  isAdmin,
  getCategoryCourseGraphData
);

router.get("/course-analytice", auth, isAdmin, getCourseAnalyticsData);

module.exports = router;
