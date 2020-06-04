import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { DataContext } from "../DataContext";

const Map = () => {
  const [show, setShow] = useState(false);
  const [texts] = useContext(DataContext);

  return (
    <main className="d1">
      <button className="btn btn-blue" onClick={() => setShow(!show)}>
        map()
      </button>
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        mapText={texts[0].text}
        mapExample={texts[0].example}
      />
    </main>
  );
};

export default Map;
