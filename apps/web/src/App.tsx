import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import Dashboard from "./pages/Dashboard";
//import ProtectedRoute from "./components/auth/ProtectedRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />*/}
        </Route>
      </Routes>
    </>
  );
}
