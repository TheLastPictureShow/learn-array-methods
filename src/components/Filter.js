import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Filter = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d6">
      <button className="btn" onClick={() => setShow(!show)}>
        filter()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[2].text}
        mapExample={texts[2].example}
      />
    </main>
  );
};

export default Filter;
