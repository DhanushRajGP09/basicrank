import React, { useState } from "react";
import "./Assesments.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import addIcon from "../../Assets/Icons/icons8-add-67 (1).png";
import testIcon from "../../Assets/Icons/icons8-test-64.png";
import Createtest from "../../Components/Modals/CreatetestModal/Createtest";

export default function Assesments() {
  const [value, setValue] = React.useState("alltests");
  const [modal, setModal] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const test = "";
  return (
    <div className="assesments">
      <Createtest modal={modal} setModal={setModal} />
      <div className="assesmentsLeftContainer">
        <div className="assesmentsLeftContainerCandidatesDiv">
          <span className="librariesText">Assesments</span>
          <div className="librariesRadioBox">
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="alltests"
                  control={<Radio />}
                  label="All tests"
                />
                <FormControlLabel
                  value="campusplacements"
                  control={<Radio />}
                  label="Campus Placements"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="assesmentsRightContainer">
        <div className="assesmentsRightHeader">
          <span className="librariesText">All Tests</span>
          <input
            placeholder="Search added Test"
            className="librariesQuestionSearchbar"
          ></input>
          <div
            className="addQuestionDiv"
            onClick={() => {
              setModal(true);
            }}
          >
            Create Test
            <img src={testIcon} className="addIcon"></img>
          </div>
        </div>
        <div className="assesmentsCollegesContainer">
          <div className="assesmentsCollegeContainer">
            <div className="assesmentsNameAndDescDiv">
              <div className="questionCategory">Total taken: 20</div>
              <div className="assesmentsNameDiv">College Name</div>
              <div className="assesmentsDescDiv">College Address</div>
              <div className="assesmentsEmail">Email</div>
              <div className="assesmentsEmail">Test link</div>
              <div className="assesmentsTimings">
                <div className="assesmentsInvitedTime">
                  Test start time: 12:00pm
                </div>
                <div className="assesmentsEndedTime">
                  Test End time: 03:00pm
                </div>
              </div>
              <div className="assesmentsTimings">
                <div className="assesmentsInvitedTime">
                  Invited on: 26/02/2020
                </div>
                <div className="assesmentsEndedTime">Invited by: abc</div>
              </div>
            </div>
          </div>
          <div className="assesmentsCollegeContainer">
            <div className="assesmentsNameAndDescDiv">
              <div className="questionCategory">Total taken: 20</div>
              <div className="assesmentsNameDiv">College Name</div>
              <div className="assesmentsDescDiv">College Address</div>
              <div className="assesmentsEmail">Email</div>
              <div className="assesmentsEmail">Test link</div>
              <div className="assesmentsTimings">
                <div className="assesmentsInvitedTime">
                  Test start time: 12:00pm
                </div>
                <div className="assesmentsEndedTime">
                  Test End time: 03:00pm
                </div>
              </div>
              <div className="assesmentsTimings">
                <div className="assesmentsInvitedTime">
                  Invited on: 26/02/2020
                </div>
                <div className="assesmentsEndedTime">Invited by: abc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
