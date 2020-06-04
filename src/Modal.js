import React from "react";

const Modal = ({ handleClose, show, mapText, mapExample }) => {
  const toggleClassName = show ? "modal display-block" : "modal display-none";

  return (
    <main className={toggleClassName}>
      <section className="modal-main">
        <div className="text">
          <div>{mapText}</div>
          <br></br>
          <div>{mapExample}</div>
        </div>

        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </section>
    </main>
  );
};

export default Modal;
