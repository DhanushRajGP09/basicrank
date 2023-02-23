import React, { useEffect } from "react";
import "./Library.css";
import { Route, Routes, useNavigate } from "react-router";
import LanguageSelection from "../../Components/LanguageSelection/LanguageSelection";
import Description from "../../Components/Description/Description";
import Solutions from "../../Components/Solutions/Solutions";
import Editorial from "../../Components/Editorial/Editorial";

export default function Library() {
  const navigate = useNavigate();

  localStorage.setItem("Languages", JSON.stringify([]));

  return (
    <div className="Home">
      <div className="questionTabbar">
        <div className="questionTabbarInside">
          <h3
            className="questionTabbarOption"
            onClick={() => {
              navigate("/Library");
            }}
          >
            Description
          </h3>
          <h3
            className="questionTabbarOption"
            onClick={() => {
              navigate("/Library/Solution");
            }}
          >
            Solutions&testcases
          </h3>
          <h3
            className="questionTabbarOption"
            onClick={() => {
              navigate("/Library/Languages");
            }}
          >
            Languages
          </h3>
          <h3
            className="questionTabbarOption"
            onClick={() => {
              navigate("/Library/Editorial");
            }}
          >
            Editorial
          </h3>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Description />}></Route>
        <Route
          path="/Library/Languages/*"
          element={<LanguageSelection />}
        ></Route>
        <Route path="/Library/Solution" element={<Solutions />}></Route>
        <Route path="/Library/Editorial" element={<Editorial />}></Route>
      </Routes>
    </div>
  );
}
