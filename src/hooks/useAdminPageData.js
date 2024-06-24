import React, { useEffect, useState } from "react";
import { fetchAllUsersData } from "../services/operations/analyticsPageData";
import { useSelector } from "react-redux";

const useAdminPageData = () => {
  const { token } = useSelector((state) => state.auth);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructor] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const fetchAdminPageData = async () => {
      const result = await fetchAllUsersData(token);
      setStudents(result?.students);
      setInstructor(result?.instructors);
      setAllCourses(result?.allCourses);
    };

    fetchAdminPageData();
  }, []);

  return { students, instructors, allCourses };
};

export default useAdminPageData;
