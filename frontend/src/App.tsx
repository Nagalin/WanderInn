import React from "react";
import Homepage from "./pages/Homepage";

// import Loginform from './feature/login/components/Loginform'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route element={<Protected/>}> */}
        <Route element={<Navbar />}>
          <Route path="/homepage" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
