import React from "react";
import "./AddQuestionModal.css";
import { Route, Routes, useNavigate } from "react-router";
import LanguageSelection from "../../LanguageSelection/LanguageSelection";
import Description from "../../Description/Description";
import Solutions from "../../Solutions/Solutions";
import Editorial from "../../Editorial/Editorial";
import previous from "../../../Assets/Icons/leftarrow.png";
import forward from "../../../Assets/Icons/rightarrow.png";

export default function AddQuestionModal(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="addQuestionmodal"
        style={{ display: props.modal ? "flex" : "none" }}
      >
        <div className="addQuestionoverlay">
          <div className="addQuestionmodal-content">
            <div className="addQuestionmodal-inner-content">
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
                  path="/Languages/*"
                  element={<LanguageSelection />}
                ></Route>
                <Route path="/Solution" element={<Solutions />}></Route>
                <Route path="/Editorial" element={<Editorial />}></Route>
              </Routes>
              <div className="prevNextButton">
                <div className="previousButton">
                  <img src={previous} className="previousIcon"></img>
                  <span>Previous</span>
                </div>
                <div className="previousButton">
                  <span>Next</span>
                  <img src={forward} className="previousIcon"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
