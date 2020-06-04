import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Of = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d2">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        of()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[8].text}
        mapExample={texts[8].example}
      />
    </main>
  );
};

export default Of;
