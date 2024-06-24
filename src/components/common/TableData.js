import React, { useState } from "react";
import Tab from "./Tab";
import CustumTable from "./CustumTable";

const tabData = [
  {
    id: 1,
    tabName: "Student",
    type: "student",
  },
  {
    id: 2,
    tabName: "Instructor",
    type: "instructor",
  },
  {
    id: 3,
    tabName: "Courses",
    type: "courses",
  },
];

const TableData = ({ students, instructors, courses }) => {
  const [field, setField] = useState("student");
  return (
    <div className="w-full mt-5 flex flex-col">
      <Tab tabData={tabData} field={field} setField={setField}></Tab>

      {field === "student" && (
        <CustumTable type="user" data={students}></CustumTable>
      )}

      {field === "instructor" && (
        <CustumTable type="user" data={instructors}></CustumTable>
      )}

      {field === "courses" && (
        <CustumTable type="course" data={courses}></CustumTable>
      )}
    </div>
  );
};

export default TableData;
