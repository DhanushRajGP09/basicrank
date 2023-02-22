import React from "react";
import "./Autogeneratemodal.css";

export default function Autogeneratemodal(props) {
  return (
    <div>
      <div
        className="autogeneratemodal"
        style={{ display: props.modal ? "flex" : "none" }}
      >
        <div className="autogenerateoverlay">
          <div className="autogeneratemodal-content">
            <div className="autogeneratemodal-inner-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
