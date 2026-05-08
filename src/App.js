import React from "react";
import EmployeeGrid from "./components/EmployeeGrid";
import DashboardHeader from "./components/DashboardHeader";
import SummaryCards from "./components/SummaryCards";
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import "./App.css";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  return (
    <div className="app-container">
      <DashboardHeader />
      <SummaryCards />
      <EmployeeGrid />
    </div>
  );
}

export default App;