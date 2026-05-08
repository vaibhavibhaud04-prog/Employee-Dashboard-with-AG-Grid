import React from "react";
import { employees } from "../data/employees";

const SummaryCards = () => {
  const total = employees.length;
  const active = employees.filter(e => e.isActive).length;
  const avgSalary =
    Math.round(
      employees.reduce((sum, e) => sum + e.salary, 0) / total
    );

  return (
    <div className="cards">
      <div className="card">
        <h3>Total Employees</h3>
        <p>{total}</p>
      </div>
      <div className="card">
        <h3>Active Employees</h3>
        <p>{active}</p>
      </div>
      <div className="card">
        <h3>Avg Salary</h3>
        <p>${avgSalary}</p>
      </div>
    </div>
  );
};

export default SummaryCards;