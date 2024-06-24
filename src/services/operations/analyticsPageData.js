import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { analyticsEndpoints } from "../apis";

const {
  GET_ALL_USERSDATA,
  GET_CATEGORY_CURSE_DATA,
  GET_COURSE_ANALYTICS_DATA,
} = analyticsEndpoints;

export const fetchAllUsersData = async (token) => {
  let result;
  try {
    const response = await apiConnector("GET", GET_ALL_USERSDATA, null, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch All Users and Courses");
    }

    result = {
      instructors: response?.data?.instructors,
      students: response?.data?.students,
      allCourses: response?.data?.allCourses,
    };
  } catch (error) {
    console.log(error);
    toast.error("Error fetching data");
  }

  return result;
};

export const fetchCategoryCourseData = async (token) => {
  let result;
  try {
    const response = await apiConnector("GET", GET_CATEGORY_CURSE_DATA, null, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch category and Courses");
    }

    result = {
      categories: response.data.categoryLabel,
      courseNumber: response.data.courses,
    };
  } catch (error) {
    console.log(error);
    toast.error("Error fetching data");
  }

  return result;
};

export const fetchCourseAnalyticsData = async (token) => {
  let result;
  try {
    const response = await apiConnector(
      "GET",
      GET_COURSE_ANALYTICS_DATA,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch course analytics data");
    }

    result = {
      courses: response.data.courseName,
      prices: response.data.coursePrice,
      students: response.data.enrolledStudents,
    };
  } catch (error) {
    console.log(error);
    toast.error("Error fetching data");
  }

  return result;
};
