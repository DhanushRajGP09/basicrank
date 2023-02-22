import React, { useState } from "react";
import "./Autogeneratemodal.css";

export default function Autogeneratemodal(props) {
  const [functionName, setFunctionName] = useState("");
  const [returnType, setReturnType] = useState("");
  const [parameters, setParameters] = useState("");

  return (
    <div>
      <div
        className="autogeneratemodal"
        style={{ display: props.modal ? "flex" : "none" }}
      >
        <div className="autogenerateoverlay">
          <div className="autogeneratemodal-content">
            <div className="autogeneratemodal-inner-content">
              <div className="functionNameDiv">
                <span className="inputLabel">Enter Function Name:</span>
                <input
                  className="autogenerateInput"
                  onChange={(e) => {
                    setFunctionName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="functionNameDiv">
                <span className="inputLabel">Enter Return Type:</span>
                <input
                  className="autogenerateInput"
                  onChange={(e) => {
                    setReturnType(e.target.value);
                  }}
                ></input>
              </div>
              <div className="functionNameDiv">
                <span className="inputLabel">Enter Function Parameters:</span>
                <input
                  className="autogenerateInput"
                  onChange={(e) => {
                    setParameters(e.target.value);
                  }}
                ></input>
              </div>
              <button
                class="button-4"
                role="button"
                style={{ marginTop: "5%" }}
                onClick={(e) => {
                  props.setModal(false);

                  localStorage.setItem(
                    "autocodevalues",
                    JSON.stringify({
                      functionName: functionName,
                      returnType: returnType,
                      parameters: parameters,
                    })
                  );
                }}
              >
                Generate Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
