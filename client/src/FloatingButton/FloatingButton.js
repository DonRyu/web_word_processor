import { useState } from "react";
import "./FloatingButton.css";

function FloatingButton() {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="floating-buttons">
      <div className="button" onClick={toggleButtons}>
      <i class="fa-solid fa-download"></i>
      </div>
      {showButtons && (
        <div className="button-list">
          <div className="button skyblue">
            <i class="fa-solid fa-file-pdf"></i>
          </div>
          <div className="button skyblue">
            <i class="fa-solid fa-file-word"></i>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButton;
