import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function Router() {
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
