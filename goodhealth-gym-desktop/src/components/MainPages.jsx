import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashboardPage from "./DashboardPage";
import LogSession from "./LogSession";
import Membership from "./Membership";

export default function MainPages() {
  const [currPanel, setCurrPanel] = useState("dashboard");

  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar onCurrPanel={setCurrPanel} />
        {currPanel === "dashboard" && <DashboardPage />}
        {currPanel === "logsession" && <LogSession />}
        {currPanel === "membership" && <Membership />}
      </div>
    </div>
  );
}
