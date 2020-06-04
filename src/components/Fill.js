import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Fill = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d5">
      <button className="btn" onClick={() => setShow(!show)}>
        fill()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[12].text}
        mapExample={texts[12].example}
      />
    </main>
  );
};

export default Fill;
