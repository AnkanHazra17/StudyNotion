import React, { useEffect, useState } from "react";
import { fetchCategoryCourseData } from "../services/operations/analyticsPageData";
import { useSelector } from "react-redux";

const useCategoryCourseData = () => {
  const { token } = useSelector((state) => state.auth);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [curseCount, setCurseCount] = useState([]);

  useEffect(() => {
    const fetchCategoryCourse = async () => {
      setIsCategoryLoading(true);
      const result = await fetchCategoryCourseData(token);
      setCategories(result.categories);
      setCurseCount(result.courseNumber);
      setIsCategoryLoading(false);
    };

    fetchCategoryCourse();
  }, []);

  return { isCategoryLoading, categories, curseCount };
};

export default useCategoryCourseData;
