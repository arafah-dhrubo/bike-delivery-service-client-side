import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Addproduct = () => {
  const history = useHistory();
  const nameRef = useRef();
  const detailsRef = useRef();
  const priceRef = useRef();
  const fileRef = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    const image = fileRef.current.value;
    const description = detailsRef.current.value;
    const price = priceRef.current.value;
    const name = nameRef.current.value;
    const item = {
      name,
      description,
      image,
      price,
      status: true,
    };

    fetch("http://localhost:5000/addPackage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(() => {
      history.push("/home#products");
    });
  };
  return (
    <Container className="form text-start rounded-3 p-5 my-4 bg-red-200">
      <h3 className="text-dark fs-1 text-center mb-3">Add New product</h3>
      <Form onSubmit={handelSubmit} className=" mx-auto">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>product Name:</Form.Label>
          <Form.Control
            ref={nameRef}
            required
            type="text"
            placeholder="Enter product Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDetails">
          <Form.Label>product Details:</Form.Label>
          <Form.Control
            type="text"
            ref={detailsRef}
            required
            placeholder="Enter Details"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupprice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="number"
            required
            placeholder="Enter Price"
          />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Image Url:</Form.Label>
          <Form.Control ref={fileRef} required type="text" size="sm" />
        </Form.Group>
        <Button type="submit" variant="danger">
          Add product
        </Button>
      </Form>
    </Container>
  );
};

export default Addproduct;
