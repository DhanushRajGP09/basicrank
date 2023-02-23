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
import Editor from "@monaco-editor/react";
import fullscreenicon from "../../Assets/Icons/icons8-fullscreen-32.png";

import Axios from "axios";

import {
  addLanguage,
  getLanguages,
  removeFromLanguage,
} from "../../features/Language/LanguageSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function LanguageSelection() {
  const Languages = useSelector(getLanguages);
  console.log("lan", Languages);

  const dispatch = useDispatch();

  const handleLanguageClick = (label) => {
    if (!Languages.includes(label)) {
      dispatch(addLanguage(label));
    } else {
      dispatch(removeFromLanguage(label));
    }
  };

  const autoGenerate = () => {
    localStorage.setItem("Languages", JSON.stringify(Languages));
  };

  const selectedLanguages = Languages;

  const [userCode, setUserCode] = useState(``);

  // State variable to set editors default language
  const [userLang, setUserLang] = useState("java");
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [modal, setModal] = useState(false);
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  function clearOutput() {
    setUserOutput("");
  }
  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return;
    }

    // Post request to compile endpoint
    Axios.post(`http://localhost:8000/compile`, {
      code: userCode,
      language: userLang,
      input: userInput,
    })
      .then((res) => {
        setUserOutput(res.data.output);
      })
      .then(() => {
        setLoading(false);
      });
  }

  const skeletonCodes = {
    Python: `def functionName: 
    
    `,
    Java: `public static void main(String args[]){ 


    }`,
  };

  const [skeletoncode, setSkeletonCode] = useState("");

  const handleCodeSnippet = (name) => {
    if (Object.hasOwn(skeletonCodes, name)) {
      console.log("calling", name);
      console.log(".............", skeletonCodes[name]);
      setSkeletonCode(skeletonCodes[name]);
      setUserLang(name.toLowerCase());
    }
  };

  return (
    <div className="Languages">
      <Autogeneratemodal modal={modal} setModal={setModal} />
      <div className="languagesContainer">
        <h3 style={{ color: "white" }}>Allowed Languages</h3>
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
      </div>
      <div className="codeSnippetContainer" id="codeCompiler">
        <div className="codeSnippetTabbar">
          <div
            className="codeSnippetTabbarControls"
            onClick={() => {
              var elem = document.getElementById("codeCompiler");
              if (elem.requestFullscreen) {
                elem.requestFullscreen();
              } else if (elem.webkitRequestFullscreen) {
                /* Safari */
                elem.webkitRequestFullscreen();
              } else if (elem.msRequestFullscreen) {
                /* IE11 */
                elem.msRequestFullscreen();
              }
            }}
          >
            <span style={{ cursor: "pointer" }}>Fullscreen</span>
            <img src={fullscreenicon} className="fullscreenIcon"></img>
          </div>
        </div>
        <div className="codeSnippetInsideContainer">
          <div className="selectedLanguagesContainer">
            {selectedLanguages.length >= 1
              ? selectedLanguages.map((data, index) => {
                  return (
                    <div
                      className="selectedLanguage"
                      onClick={() => {
                        handleCodeSnippet(data);
                      }}
                    >
                      {data}
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="compileContainer">
            <div className="left-container">
              <Editor
                options={options}
                height="100%"
                width="100%"
                theme={userTheme}
                language={userLang}
                defaultLanguage={userLang}
                value={skeletoncode}
                onChange={(value) => {
                  setSkeletonCode(value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
