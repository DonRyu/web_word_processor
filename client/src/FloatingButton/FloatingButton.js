import { useState } from "react";
import "./FloatingButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FloatingButton() {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="floating-buttons">
      <div className="button" onClick={toggleButtons}>
        <i className="fa fa-plus"></i>
      </div>
      {showButtons && (
        <div className="button-list">
          <div className="button skyblue">
            <i className="fa fa-pen"></i>
          </div>
          <div className="button skyblue">
          <FontAwesomeIcon icon="fa-solid fa-file-pdf" beat />
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButton;
