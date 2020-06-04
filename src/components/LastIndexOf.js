import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const LastIndexOf = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d6">
      <button className="btn" onClick={() => setShow(!show)}>
        lastIndexOf()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[22].text}
        mapExample={texts[22].example}
      />
    </main>
  );
};

export default LastIndexOf;
