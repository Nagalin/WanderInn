import React from "react";
import Homepage from "./pages/Homepage";

// import Loginform from './feature/login/components/Loginform'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking";
import TrackingBooking from "./pages/TrackingBooking";
const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route element={<Protected/>}> */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/trackingBooking" element={<TrackingBooking />} />
          <Route path="*" element={<h1>404 not found</h1>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
