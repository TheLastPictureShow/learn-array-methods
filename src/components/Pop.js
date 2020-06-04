import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Pop = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d3">
      <button className="btn" onClick={() => setShow(!show)}>
        pop()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[23].text}
        mapExample={texts[23].example}
      />
    </main>
  );
};

export default Pop;
