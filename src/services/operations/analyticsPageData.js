import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { analyticsEndpoints } from "../apis";

const { GET_ALL_USERSDATA } = analyticsEndpoints;

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
