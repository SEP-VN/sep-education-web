import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import VoluntaryTourism from "../pages/VoluntaryTourism/VoluntaryTourism";
import TravelPartner from "../pages/TravelPartner/TravelPartner";
import SignIn from "../pages/SignIn/SignIn";
import TourInformation from "../pages/TourInformation/TourInformation";
import Contact from "../pages/Contact/Contact";
import TourDetail from "../pages/TourDetail/TourDetail";

const MainRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/voluntary-tourism" element={<VoluntaryTourism />} />
      <Route path="/travel-partner" element={<TravelPartner />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/tour-information" element={<TourInformation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tour-detail" element={<TourDetail />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
