import { useState } from "react";
import LoginPage from "./components/LoginPage";
import MainPages from "./components/MainPages";

function App() {
  const [currPage, setCurrPage] = useState("login");

  return (
    <>
      {currPage === "login" && <LoginPage onCurrPage={setCurrPage} />}
      {currPage === "main" && <MainPages />}
    </>
  );
}

export default App;
