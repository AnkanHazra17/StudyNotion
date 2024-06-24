import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCourseAnalyticsData } from "../services/operations/analyticsPageData";

const useCourseAnalyticsData = () => {
  const { token } = useSelector((state) => state.auth);
  const [isCourseLoading, setCourseIsLoading] = useState(false);
  const [courseNames, setCourseNames] = useState([]);
  const [coursePrices, setCourrsePrices] = useState([]);
  const [studentsCount, setStudentsCount] = useState([]);

  useEffect(() => {
    const fetchCourseAnalytics = async () => {
      setCourseIsLoading(true);
      const result = await fetchCourseAnalyticsData(token);
      setCourseNames(result.courses);
      setCourrsePrices(result.prices);
      setStudentsCount(result.students);

      setCourseIsLoading(false);
    };

    fetchCourseAnalytics();
  }, []);
  return { isCourseLoading, courseNames, coursePrices, studentsCount };
};

export default useCourseAnalyticsData;
