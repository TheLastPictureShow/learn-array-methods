import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Concat = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d1">
      <button className="btn" onClick={() => setShow(!show)}>
        concat()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[4].text}
        mapExample={texts[4].example}
      />
    </main>
  );
};

export default Concat;
