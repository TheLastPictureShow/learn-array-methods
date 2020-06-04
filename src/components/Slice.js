import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Slice = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d1">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        slice()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[1].text}
        mapExample={texts[1].example}
      />
    </main>
  );
};

export default Slice;
