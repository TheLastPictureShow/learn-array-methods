import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Entries = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d3">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        entries()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[10].text}
        mapExample={texts[10].example}
      />
    </main>
  );
};

export default Entries;
