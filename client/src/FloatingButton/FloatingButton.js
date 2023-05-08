import { useState } from "react";
import "./FloatingButton.css";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";
import { pdfExporter } from "quill-to-pdf";

function FloatingButton({ quill, docName }) {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const downloadDocument = async () => {
    const delta = quill.getContents();
    const blob = await quillToWord.generateWord(delta, { exportAs: "blob" });
    saveAs(blob, docName);
  };

  const downloadPdf = async () => {
    const delta = quill.getContents();
    const blob = await pdfExporter.generatePdf(delta);
    saveAs(blob, docName);
  };

  return (
    <div className="floating-buttons">
      <div className="button" onClick={toggleButtons}>
        <i class="fa-solid fa-download"></i>
      </div>
      {showButtons && (
        <div className="button-list">
          <div className="button skyblue" onClick={downloadPdf}>
            <i class="fa-solid fa-file-pdf"></i>
          </div>
          <div className="button skyblue" onClick={downloadDocument}>
            <i class="fa-solid fa-file-word"></i>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButton;
