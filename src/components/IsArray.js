import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const IsArray = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d3">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        isArray()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[7].text}
        mapExample={texts[7].example}
      />
    </main>
  );
};

export default IsArray;
