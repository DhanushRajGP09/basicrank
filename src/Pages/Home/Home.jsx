import React, { useEffect } from "react";
import "./Home.css";
import { Route, Routes, useNavigate } from "react-router";
import LanguageSelection from "../../Components/LanguageSelection/LanguageSelection";
import Description from "../../Components/Description/Description";
import Solutions from "../../Components/Solutions/Solutions";
import Editorial from "../../Components/Editorial/Editorial";

export default function Home() {
  const navigate = useNavigate();

  localStorage.setItem("Languages", JSON.stringify([]));

  return (
    <div className="Home">
      <div className="questionTabbar">
        <div className="questionTabbarInside">
          <h3
            className="questionTabbarOption"
            onClick={() => {
              navigate("/");
            }}
          >
            Description
          </h3>
          <h3
            className="questionTabbarOption"
            onClick={() => {
              navigate("Solution");
            }}
          >
            Solutions&testcases
          </h3>
          <h3
            className="questionTabbarOption"
            onClick={() => {
              navigate("Languages");
            }}
          >
            Languages
          </h3>
          <h3
            className="questionTabbarOption"
            onClick={() => {
              navigate("Editorial");
            }}
          >
            Editorial
          </h3>
        </div>
      </div>
      <Routes>
        <Route path="/Languages/*" element={<LanguageSelection />}></Route>
        <Route path="/" element={<Description />}></Route>
        <Route path="/Solution" element={<Solutions />}></Route>
        <Route path="/Editorial" element={<Editorial />}></Route>
      </Routes>
    </div>
  );
}
