import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./LanguageSelection.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import Autogeneratemodal from "../Modals/AutogenerateModal/Autogeneratemodal";
export default function LanguageSelection() {
  const Languages = JSON.parse(localStorage.getItem("Languages"));

  var newArr = [];
  console.log("ss..", newArr);

  const handleLanguageClick = (label) => {
    if (!newArr.includes(label)) {
      newArr.push(label);
      console.log(newArr);
    } else {
      newArr = newArr.filter((data) => data !== label);
      localStorage.setItem("Languages", JSON.stringify(newArr));
      console.log(newArr);
    }
  };

  const autoGenerate = () => {
    localStorage.setItem("Languages", JSON.stringify(newArr));
  };

  const [modal, setModal] = useState(false);

  return (
    <div className="Languages">
      <Autogeneratemodal modal={modal} setModal={setModal} />
      <div className="languagesContainer">
        <div className="languageLabel">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  label="CheckCircleIcon"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  style={{ color: "white" }}
                  onClick={() => {
                    handleLanguageClick("Javascript");
                  }}
                />
              }
              label="Javascript"
              style={{ color: "white" }}
            />
          </FormGroup>
        </div>
        <div className="languageLabel">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  label="CheckCircleIcon"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  style={{ color: "white" }}
                  onClick={() => {
                    handleLanguageClick("Typescript");
                  }}
                />
              }
              label="Typescript"
              style={{ color: "white" }}
            />
          </FormGroup>
        </div>
        <div className="languageLabel">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  label="CheckCircleIcon"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  style={{ color: "white" }}
                  onClick={() => {
                    handleLanguageClick("Python");
                  }}
                />
              }
              label="Python"
              style={{ color: "white" }}
            />
          </FormGroup>
        </div>
        <div className="languageLabel">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  label="CheckCircleIcon"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  style={{ color: "white" }}
                  onClick={() => {
                    handleLanguageClick("Java");
                  }}
                />
              }
              label="Java"
              style={{ color: "white" }}
            />
          </FormGroup>
        </div>
        <div className="languageLabel">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  label="CheckCircleIcon"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  style={{ color: "white" }}
                  onClick={() => {
                    handleLanguageClick("C++");
                  }}
                />
              }
              label="C++"
              style={{ color: "white" }}
            />
          </FormGroup>
        </div>
        <div className="languageLabel">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  label="CheckCircleIcon"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  style={{ color: "white" }}
                  onClick={() => {
                    handleLanguageClick("C");
                  }}
                />
              }
              label="C"
              style={{ color: "white" }}
            />
          </FormGroup>
        </div>
        <button
          class="button-4"
          role="button"
          onClick={() => {
            autoGenerate();
            setModal(true);
          }}
        >
          Auto Generate
        </button>
      </div>
    </div>
  );
}
