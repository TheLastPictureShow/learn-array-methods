import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Push = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d4">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        push()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[24].text}
        mapExample={texts[24].example}
      />
    </main>
  );
};

export default Push;
