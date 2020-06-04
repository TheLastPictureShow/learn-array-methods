import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Reduce = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d5">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        reduce()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[25].text}
        mapExample={texts[25].example}
      />
    </main>
  );
};

export default Reduce;
