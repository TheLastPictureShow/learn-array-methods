import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Every = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d4">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        every()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[11].text}
        mapExample={texts[11].example}
      />
    </main>
  );
};

export default Every;
