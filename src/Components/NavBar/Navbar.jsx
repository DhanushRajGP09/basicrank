import React from "react";
import "./Navbar.css";
import robologo from "../../Assets/Images/img_Robosoft logo_dashboard.png";
import PersonIcon from "@mui/icons-material/Person";
import { Route, Routes, useNavigate } from "react-router";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Home from "../../Pages/Home/Library";
import { NavLink } from "react-router-dom";
import Library from "../../Pages/Home/Library";
import Assesments from "../../Pages/Assesments/Assesments";
const Navbar = () => {
  return (
    <>
      <div className="navBody">
        <div>
          <img className="robo-logo" src={robologo} alt="pic" />
        </div>
        <div className="navbar-btn-div">
          <div className="nav-bar-button">
            <p className="nav-bar-font">DashBoard</p>
          </div>
          <NavLink className="nav-bar-button" to="/Assesments">
            <p className="nav-bar-font">Assessments</p>
          </NavLink>
          <div className="nav-bar-button">
            <p className="nav-bar-font">Candidates</p>
          </div>
          <NavLink to="/Library" className="nav-bar-button">
            <p className="nav-bar-font">Library</p>
          </NavLink>
        </div>
        <div className="nav-bar-logout">
          <PersonIcon
            sx={{ color: "white", fontSize: "30px", marginTop: "12px" }}
          />
          <p style={{ marginLeft: "10px" }} className="nav-bar-font">
            UserName
          </p>
          <KeyboardArrowDownIcon
            sx={{ color: "white", fontSize: "30px", marginTop: "12px" }}
          />
        </div>
      </div>

      <Routes>
        <Route path="/Library/*" element={<Library />}></Route>
        <Route path="/Assesments/*" element={<Assesments />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
