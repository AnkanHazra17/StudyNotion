import React from "react";
import useAdminPageData from "../../../../../hooks/useAdminPageData";
import AllDataCountCard from "../../../../common/AllDataCountCard";
import TableData from "../../../../common/TableData";

const AppData = () => {
  const { students, instructors, allCourses } = useAdminPageData();

  return (
    <div className="w-full pl-0 lg:pl-[222px]">
      <div className="w-11/12 max-w-[900px] flex flex-col items-start mx-auto mt-12 mb-24">
        <h1 className="text-4xl font-semibold">All Data</h1>

        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between gap-7 mt-5 flex-col md:flex-row">
            <AllDataCountCard
              name="Total Students"
              total={students.length}
            ></AllDataCountCard>
            <AllDataCountCard
              name="Total Instructors"
              total={instructors.length}
            ></AllDataCountCard>
            <AllDataCountCard
              name="Total Courses"
              total={allCourses.length}
            ></AllDataCountCard>
          </div>

          <TableData
            students={students}
            instructors={instructors}
            courses={allCourses}
          ></TableData>
        </div>
      </div>
    </div>
  );
};

export default AppData;
