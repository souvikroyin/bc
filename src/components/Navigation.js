import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Topbar from "./Topbar";
import Login from "../pages/Login";
// import FullPageScroll from "./components/FullPageScroll";
// import Footer from "./components/Footer";
import Home from "../pages/Home";
import Client from "./Client";
import Footer from "./Footer";
import Men from "../pages/Men";
import IncenseSticks from "../pages/IncenseSticks";
import GiftPacks from "../pages/GiftPacks";
import Women from "../pages/Women";
import KitchenDinings from "../pages/KitchenDinings";
import Kids from "../pages/Kids";   
import HomeFurnishing from "../pages/HomeFurnishing";

const Navigation = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/client" element={<Client />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/men" element={<Men />} />
          <Route path="/incensesticks" element={<IncenseSticks />} />
          <Route path="/homefurnishing" element={<HomeFurnishing />} />
          <Route path="/giftpacks" element={<GiftPacks />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kitchendinings" element={<KitchenDinings />} />
          <Route path="/kids" element={<Kids />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default Navigation;
