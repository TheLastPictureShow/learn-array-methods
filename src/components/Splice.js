import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Splice = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d3">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        splice()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[3].text}
        mapExample={texts[3].example}
      />
    </main>
  );
};

export default Splice;
