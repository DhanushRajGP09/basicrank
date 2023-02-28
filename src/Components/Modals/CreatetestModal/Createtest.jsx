import React, { useState } from "react";
import "./Createtest.css";
import { Route, Routes, useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import closemodal from "../../../Assets/Icons/close.png";
import "react-datepicker/dist/react-datepicker.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

export default function Createtest(props) {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndedDate] = useState(new Date());
  const [value, setValue] = React.useState("mylibrary");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <div
        className="createTestmodal"
        style={{ display: props.modal ? "flex" : "none" }}
      >
        <div className="createTestoverlay">
          <div className="createTestmodal-content">
            <img
              src={closemodal}
              className="closeCreateModal"
              onClick={() => {
                props.setModal(false);
              }}
            ></img>
            <div className="createTestmodal-inner-content">
              <div className="createTestmodalLeftContainer">
                <div className="typeofTestModalDiv">
                  <div className="createTestName">Select type of test</div>
                  <select name="choice" className="testNameChoice">
                    <option value="campus" className="testNameValue">
                      Campus Placements
                    </option>
                    <option
                      value="fullstack"
                      selected
                      className="testNameValue"
                    >
                      Full Stack developer
                    </option>
                    <option value="java" className="testNameValue">
                      Java Developer
                    </option>
                  </select>
                </div>
                <div className="createTestCollegeNameInputDiv">
                  Enter College Name:
                  <input
                    placeholder="Name of the college"
                    className="createTestCollegeNameInput"
                  ></input>
                </div>
                <div className="createTestCollegeNameInputDiv">
                  Enter College Email id:
                  <input
                    placeholder="Email of the college"
                    className="createTestCollegeNameInput"
                  ></input>
                </div>
                <div className="createTestInviteInputDiv">
                  <div className="createTestInviteOnInputDiv">
                    Test to be invited on
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      locale="pt-BR"
                      showTimeSelect
                      timeFormat="p"
                      timeIntervals={15}
                      dateFormat="Pp"
                      placeholderText="Click to select a date"
                      className="datepicker"
                    />
                  </div>
                  <div className="createTestInviteOnInputDiv">
                    Test will be Ended on
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndedDate(date)}
                      locale="pt-BR"
                      showTimeSelect
                      timeFormat="p"
                      timeIntervals={15}
                      dateFormat="Pp"
                      placeholderText="Click to select a date"
                      className="datepicker"
                    />
                  </div>
                </div>
                <div className="importQuestionFromLibraryDiv">
                  Import questions from
                  <div className="importQuestionLibrary">
                    <FormControl>
                      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="mylibrary"
                          control={<Radio />}
                          label="My library"
                        />
                        <FormControlLabel
                          value="roboearthlibrary"
                          control={<Radio />}
                          label="Roboearth library"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>

                <div className="typeofTestModalDiv">
                  <div className="createTestName">
                    select number of questions
                  </div>
                  <select name="choice" className="testNameChoice">
                    <option value="1" className="testNameValue">
                      1
                    </option>
                    <option value="3" selected className="testNameValue">
                      3
                    </option>
                    <option value="5" className="testNameValue">
                      5
                    </option>
                  </select>
                </div>
                <div className="selectQuestionInputDiv">
                  <button className="selectQuestionButton">
                    Select Questions
                  </button>
                </div>
                <div className="selectedQuestionsContainer">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Programming"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Data science"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Machine learning"
                    />
                    <FormControlLabel control={<Checkbox />} label="SQL" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Full stack"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Front end"
                    />
                    <FormControlLabel control={<Checkbox />} label="Back end" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Interview"
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="createTestmodalRightContainer">
                <div className="selectCandidatesDiv">
                  Candidates to be invited
                  <div className="candidateEmailInputDiv">
                    <input
                      placeholder="Email of the candidate"
                      className="createTestCollegeNameInput"
                    ></input>
                    <button className="addCandidateButton">Add </button>
                  </div>
                </div>
                <div className="selectedQuestionsContainer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
