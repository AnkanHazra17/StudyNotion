const User = require("../models/User");
const Course = require("../models/Course");
const Category = require("../models/Category");

exports.getAllUsersAndCourseDetails = async (req, res) => {
  try {
    const allUsers = await User.find({ accountType: { $ne: "Admin" } }).select(
      "firstName lastName email image courses accountType"
    );
    const allCoursesData = await Course.find()
      .populate("ratingAndReviews")
      .populate("instructor")
      .populate("category");

    if (!allUsers || !allCoursesData) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    const allCourses = allCoursesData.map((course) => ({
      courseName: course.courseName,
      instructor: `${course.instructor.firstName} ${course.instructor.lastName}`,
      category: course.category.name,
      price: course.price,
      riviews: course.ratingAndReviews,
    }));

    const studentsData = allUsers.filter(
      (user) => user.accountType === "Student"
    );

    const instructorData = allUsers.filter(
      (user) => user.accountType === "Instructor"
    );

    const students = studentsData.map((student) => ({
      name: `${student.firstName} ${student.lastName}`,
      avatar: student.image,
      email: student.email,
      courseCount: student?.courses?.length,
    }));

    const instructors = instructorData.map((instructor) => ({
      name: `${instructor.firstName} ${instructor.lastName}`,
      avatar: instructor.image,
      email: instructor.email,
      courseCount: instructor?.courses?.length,
    }));

    return res.status(200).json({
      success: true,
      message: "All Users And Course Fetched Successfully",
      instructors,
      students,
      allCourses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error fetching all users and course data",
    });
  }
};

// Category - Course Number Graph data
exports.getCategoryCourseGraphData = async (req, res) => {
  try {
    const categoryData = await Category.find();

    if (!categoryData) {
      return res.status(404).json({
        success: false,
        message: "Category data not found",
      });
    }

    const categoryLabel = categoryData.map((category) => category.name);
    const courses = categoryData.map((category) => category.courses.length);

    return res.status(200).json({
      success: true,
      message: "Category Data Fetched",
      courses,
      categoryLabel,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error fecthing category details",
    });
  }
};

// Course Analytics
exports.getCourseAnalyticsData = async (req, res) => {
  try {
    const courseData = await Course.find();

    if (!courseData) {
      return res.status(404).json({
        success: false,
        message: "Course Data Not Found",
      });
    }

    const coursePrice = courseData.map((course) => course.price);
    const enrolledStudents = courseData.map(
      (course) => course.studentsEnrolled.length
    );
    const courseName = courseData.map((course) => course.courseName);

    return res.status(200).json({
      success: true,
      message: "Course data fetched",
      courseName,
      enrolledStudents,
      coursePrice,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error fecthing course details",
    });
  }
};
