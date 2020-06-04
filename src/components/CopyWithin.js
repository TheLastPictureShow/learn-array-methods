import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const CopyWithin = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d2">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        copyWithin()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[9].text}
        mapExample={texts[9].example}
      />
    </main>
  );
};

export default CopyWithin;
