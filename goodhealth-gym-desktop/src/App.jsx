import { useState } from "react";
import LoginPanel from "./components/LoginPanel";
import DashboardPanel from "./components/DashboardPanel";

function App() {
  const [currPanel, setCurrPanel] = useState("login");

  return (
    <>
      {currPanel === "login" && <LoginPanel onCurrPanel={setCurrPanel} />}
      {currPanel === "dashboard" && <DashboardPanel />}
    </>
  );
}

export default App;
