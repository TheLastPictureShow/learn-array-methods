import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Sort = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d2">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        sort()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[5].text}
        mapExample={texts[5].example}
      />
    </main>
  );
};

export default Sort;
