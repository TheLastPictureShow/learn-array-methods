import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Reverse = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d6">
      <button className="btn" onClick={() => setShow(!show)}>
        reverse()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[26].text}
        mapExample={texts[26].example}
      />
    </main>
  );
};

export default Reverse;
