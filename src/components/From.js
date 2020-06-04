import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const From = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d6">
      <button className="btn" onClick={() => setShow(!show)}>
        from()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[6].text}
        mapExample={texts[6].example}
      />
    </main>
  );
};

export default From;
