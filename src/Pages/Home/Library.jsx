import React, { useEffect, useState } from "react";
import "./Library.css";
import AddQuestionModal from "../../Components/Modals/AddQuestionModal/AddQuestionModal";

export default function Library() {
  const [modal, setModal] = useState(false);
  return (
    <div className="Home">
      <AddQuestionModal modal={modal} setModal={setModal} />
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Click here
      </button>
    </div>
  );
}
