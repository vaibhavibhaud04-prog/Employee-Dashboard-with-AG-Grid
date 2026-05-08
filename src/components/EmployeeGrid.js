import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { employees } from "../data/employees";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const EmployeeGrid = () => {
  const [rowData] = useState(employees);
  const [quickFilter, setQuickFilter] = useState("");

  const columnDefs = useMemo(() => [
    { field: "id", sortable: true, filter: true, width: 90 
        
    },

    {
      headerName: "Name",
      valueGetter: params =>
        `${params.data.firstName} ${params.data.lastName}`,
      sortable: true,
      filter: true
    },

    { field: "email", flex: 1 },

    {
      field: "department",
      filter: "agSetColumnFilter"
    },

    { field: "position" },

    {
      field: "salary",
      sortable: true,
      valueFormatter: params => `$${params.value.toLocaleString()}`
    },

    {
      field: "performanceRating",
      headerName: "Rating",
      cellRenderer: params => {
        const color =
          params.value >= 4.5
            ? "green"
            : params.value >= 4
            ? "orange"
            : "red";
        return (
          <span style={{ color, fontWeight: "bold" }}>
            {params.value}
          </span>
        );
      }
    },

    {
      field: "isActive",
      headerName: "Status",
      cellRenderer: params => (
        <span
          className={
            params.value ? "badge active" : "badge inactive"
          }
        >
          {params.value ? "Active" : "Inactive"}
        </span>
      )
    },

    {
      field: "projectsCompleted",
      headerName: "Projects"
    },

    {
      field: "location",
      filter: true
    }
  ], []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search employees..."
        value={quickFilter}
        onChange={e => setQuickFilter(e.target.value)}
        className="search-box"
      />

      <div
        className="ag-theme-alpine"
        style={{ height: 500, width: "100%" }}
      >
        <AgGridReact
          theme="legacy"
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={5}
          animateRows={true}
          quickFilterText={quickFilter}
        />
      </div>
    </div>
  );
};

export default EmployeeGrid;