import React, { useState, useRef } from "react";
import "./DocumentNameInput.css";

function DocumentNameInput({ initialValue, onSubmit }) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setEditing(true);
    inputRef.current.select();
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  return (
    <div style={{ display: "flex" ,alignItems:'center',padding:"10px"}}>
      <div style={{marginRight:"5px"}}>
        <i
          class="fa-regular fa-file"
          style={{ fontSize: "30px", marginLeft: "30px" }}
        ></i>
      </div>
      <div
        className={`document-name-input ${editing ? "editing" : ""}`}
        onClick={handleInputClick}
      >
        <input
          type="text"
          placeholder="Untitled document"
          ref={inputRef}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}

export default DocumentNameInput;
