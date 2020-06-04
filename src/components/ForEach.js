import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const ForEach = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d5">
      <button className="btn" onClick={() => setShow(!show)}>
        forEach()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[17].text}
        mapExample={texts[17].example}
      />
    </main>
  );
};

export default ForEach;
