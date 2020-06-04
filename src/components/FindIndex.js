import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const FindIndex = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d2">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        findIndex()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[14].text}
        mapExample={texts[14].example}
      />
    </main>
  );
};

export default FindIndex;
