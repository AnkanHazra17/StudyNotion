import React from "react";
import useCategoryCourseData from "../../../../../hooks/useCategoryCourseData";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BarGraph from "../../../../common/BarGraph";
import useCourseAnalyticsData from "../../../../../hooks/useCourseAnalyticsData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const { isCategoryLoading, categories, curseCount } = useCategoryCourseData();
  const { isCourseLoading, courseNames, coursePrices, studentsCount } =
    useCourseAnalyticsData();

  return (
    <div className="w-full pl-0 lg:pl-[222px]">
      <div className="w-11/12 max-w-[900px] flex flex-col items-start mx-auto mt-12 mb-24">
        <h1 className="text-4xl font-semibold">Application Analytics</h1>

        <BarGraph
          labels={categories}
          dataArray={curseCount}
          labelText="Courses"
          bgColor="#E88D67"
          borderColor="#E88D67"
          title="Number of course in a caterory"
          header="Course And Category"
        ></BarGraph>

        <BarGraph
          labels={courseNames}
          dataArray={coursePrices}
          labelText="Price"
          bgColor="#FFB1B1"
          borderColor="#FFB1B1"
          title="Price of courses"
          header="Course and price"
        ></BarGraph>

        <BarGraph
          labels={courseNames}
          dataArray={studentsCount}
          labelText="Students"
          bgColor="#E0A75E"
          borderColor="#E0A75E"
          title="Number of students in a course"
          header="Course and students"
        ></BarGraph>
      </div>
    </div>
  );
};

export default Analytics;
