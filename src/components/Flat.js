import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Flat = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d3">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        flat()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[15].text}
        mapExample={texts[15].example}
      />
    </main>
  );
};

export default Flat;
