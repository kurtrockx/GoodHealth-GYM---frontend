import { useState } from "react";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";

function App() {
  const [currPage, setCurrPage] = useState("login");

  return (
    <>
      {currPage === "login" && <LoginPage onCurrPage={setCurrPage} />}
      {currPage === "dashboard" && <DashboardPage />}
    </>
  );
}

export default App;
