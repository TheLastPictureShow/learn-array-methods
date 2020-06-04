import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Flatmap = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d4">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        flatMap()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[16].text}
        mapExample={texts[16].example}
      />
    </main>
  );
};

export default Flatmap;
