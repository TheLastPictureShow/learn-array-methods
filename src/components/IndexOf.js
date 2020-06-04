import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const IndexOf = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d2">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        indexOf()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[19].text}
        mapExample={texts[19].example}
      />
    </main>
  );
};

export default IndexOf;
