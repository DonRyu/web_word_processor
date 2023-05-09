import React, { useState, useRef } from "react";
import "./DocumentNameInput.css";

function DocumentNameInput({ setDocName }) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setEditing(true);
    inputRef.current.select();
  };

  const handleInputBlur = (e) => {
    setEditing(false);
    setDocName(e.target.value);
  };

  return (
    <div style={{ display: "flex" ,alignItems:'center',padding:"10px"}}>
      <div style={{marginRight:"5px"}}>
        <i
          class="fa-regular fa-file"
          style={{ fontSize: "30px", marginLeft: "10px" }}
        ></i>
      </div>
      <div
        className={`document-name-input ${editing ? "editing" : ""}`}
        onClick={handleInputClick}
      >
        <input
          type="text"
          placeholder="Untitled"
          ref={inputRef}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}

export default DocumentNameInput;
