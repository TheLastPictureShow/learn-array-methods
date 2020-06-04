import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Join = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d4">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        join()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[20].text}
        mapExample={texts[20].example}
      />
    </main>
  );
};

export default Join;
