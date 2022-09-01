import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function Router() {
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setToken={setToken} setIsLogin={setIsLogin} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/main"
          element={
            <Main
              token={token}
              setToken={setToken}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
