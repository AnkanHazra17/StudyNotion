const User = require("../models/User");
const Course = require("../models/Course");

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
