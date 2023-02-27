import React, { useEffect, useState } from "react";
import "./Library.css";
import AddQuestionModal from "../../Components/Modals/AddQuestionModal/AddQuestionModal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import addIcon from "../../Assets/Icons/icons8-add-67 (1).png";

export default function Library() {
  const [modal, setModal] = useState(false);

  const [value, setValue] = React.useState("mylibrary");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const test = "";

  return (
    <div className="Home">
      <AddQuestionModal modal={modal} setModal={setModal} />

      <div className="libraryLeftContainer">
        <div className="libraryLeftContainerHeaderDiv">
          <span className="librariesText">Libraries</span>
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
                  value="mylibrary"
                  control={<Radio />}
                  label="My Library"
                />
                <FormControlLabel
                  value="roboearth"
                  control={<Radio />}
                  label="Roboearth Library"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="libraryCategoriesDiv">
          <span className="librariesText">Categories</span>
          <div className="librariesCategoryCheckbox">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Programming" />
              <FormControlLabel control={<Checkbox />} label="Data science" />
              <FormControlLabel
                control={<Checkbox />}
                label="Machine learning"
              />
              <FormControlLabel control={<Checkbox />} label="SQL" />
              <FormControlLabel control={<Checkbox />} label="Full stack" />
              <FormControlLabel control={<Checkbox />} label="Front end" />
              <FormControlLabel control={<Checkbox />} label="Back end" />
              <FormControlLabel control={<Checkbox />} label="Interview" />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="libraryRightContainer">
        <div className="libraryQuestionHeader">
          <span className="librariesText">Questions</span>
          <input
            placeholder="Search added question"
            className="librariesQuestionSearchbar"
          ></input>
          <div
            className="addQuestionDiv"
            onClick={() => {
              setModal(true);
            }}
          >
            Add Question
            <img src={addIcon} className="addIcon"></img>
          </div>
        </div>
        <div className="questionsContainer">
          <div className="questionContainer">
            <div className="questionCategory">category</div>
            <div className="questionNameAndDescDiv">
              <div className="questionNameDiv">Question Name</div>
              <div className="questionDescDiv">Description</div>
            </div>
            <div className="questionLevelDiv">
              <span className="questionLevel">Difficulty</span>
              <span className="questionMaxScore">Max score:20</span>
              <span className="questionTime">Recommended time: 20Mins</span>
            </div>
          </div>
          <div className="questionContainer">
            <div className="questionCategory">category</div>
            <div className="questionNameAndDescDiv">
              <div className="questionNameDiv">Question Name</div>
              <div className="questionDescDiv">Description</div>
            </div>
            <div className="questionLevelDiv">
              <span className="questionLevel">Difficulty</span>
              <span className="questionMaxScore">Max score:20</span>
              <span className="questionTime">Recommended time: 20Mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
