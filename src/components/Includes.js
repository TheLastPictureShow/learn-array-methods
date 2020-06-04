import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Includes = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d1">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        includes()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[18].text}
        mapExample={texts[18].example}
      />
    </main>
  );
};

export default Includes;
