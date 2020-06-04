import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Find = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d1">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        find()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[13].text}
        mapExample={texts[13].example}
      />
    </main>
  );
};

export default Find;
