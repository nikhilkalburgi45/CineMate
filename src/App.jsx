import React from "react";
import Navbar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import Mybookings from "./pages/MyBookings";
import Favourite from "./pages/Favourite";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<Mybookings />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
