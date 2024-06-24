import React from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

const CustumTable = ({ type, data }) => {
  const courseColumns = [
    {
      name: "Course Name",
      selector: (row) => row.courseName,
    },
    {
      name: "Instructor",
      selector: (row) => row.instructor,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  const userColumns = [
    {
      name: "User Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Courses",
      selector: (row) => row.courseCount,
      sortable: true,
    },
  ];

  const columns = type === "user" ? userColumns : courseColumns;

  const tableCustomStyles = {
    table: {
      style: {
        backgroundColor: "#161D29", // Background color for the entire table
        borderRadius: "16px",
      },
    },
    headCells: {
      style: {
        fontSize: "18px",
        // fontWeight: "bold",
        color: "#F1F2FF",
        backgroundColor: "#161D29",
      },
    },
    rows: {
      style: {
        backgroundColor: "#2C333F", // Body background color
        // "&:nth-of-type(even)": {
        //   backgroundColor: "#E5E7EB", // Alternate row color
        // },
        borderRadius: "8px", // Border radius for rows
        margin: "4px 0", // Margin between rows to show the border radius effect
        boxShadow: "0 0 4px rgba(0,0,0,0.1)", // Optional: add a shadow for better visual separation
        color: "#F1F2FF",
      },
    },
  };

  const TableWrapper = styled.div`
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `;

  return (
    <TableWrapper>
      <DataTable
        columns={columns}
        data={data}
        pagination
        responsive
        customStyles={tableCustomStyles}
      ></DataTable>
    </TableWrapper>
  );
};

export default CustumTable;
