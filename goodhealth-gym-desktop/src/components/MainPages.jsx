import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashboardPage from "./DashboardPage";
import LogSession from "./LogSession";
import Membership from "./MembershipPage";

export default function MainPages({ currLogin }) {
  const [currPanel, setCurrPanel] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      <Navbar onSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        {sidebarOpen && (
          <Sidebar onCurrPanel={setCurrPanel} currLogin={currLogin} />
        )}
        {currPanel === "dashboard" && <DashboardPage />}
        {currPanel === "logsession" && <LogSession />}
        {currPanel === "membership" && <Membership />}
      </div>
    </div>
  );
}
