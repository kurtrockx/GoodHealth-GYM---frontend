import { useState } from "react";
import LoginPage from "./components/LoginPage";
import MainPages from "./components/MainPages";

function App() {
  const [currPage, setCurrPage] = useState("login");
  const [currLogin, setCurrLogin] = useState("");

  return (
    <>
      {currPage === "login" && (
        <LoginPage onCurrPage={setCurrPage} onCurrLogin={setCurrLogin} />
      )}
      {currPage === "main" && <MainPages currLogin={currLogin} />}
    </>
  );
}

export default App;
