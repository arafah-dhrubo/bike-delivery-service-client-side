import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

import React from "react";

const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button className="btn-danger btn" onClick={handleShow}>
          Location
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Our Location</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            Location Comming Soon....
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default SideBar;
