import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { useState } from "react";

export default function App() {
  const [login, setLogin] = useState(false);
  const setState = (val) => {
    setLogin(val);
  };
  return (
    <>
      {login ? (
        <Dashboard loginStatus={setState} />
      ) : (
        <Login login={setState} />
      )}
    </>
  );
}
