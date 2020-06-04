import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Keys = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d5">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        keys()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[21].text}
        mapExample={texts[21].example}
      />
    </main>
  );
};

export default Keys;
