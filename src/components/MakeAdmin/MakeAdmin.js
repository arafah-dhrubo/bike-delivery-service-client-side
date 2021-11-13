import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelSubmit = (e) => {
    const user = { email };
    fetch("https://byke-app.herokuapp.com/make/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("admin created");
          document.getElementById("mail").value = "";
        } else {
          alert("admin not created");
          document.getElementById("mail").value = "";
        }
      });
    e.preventDefault();
  };
  return (
    <Form className="my-4" onSubmit={handelSubmit}>
      <h3 className="text-center text-danger">Make An Admin</h3>
      <Form.Group
        className="mb-3 border-5 border rounded border-danger p-3 w-50 mx-auto"
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={handelEmail}
          type="email"
          id="mail"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Remember this will make an admin for your site. are you sure?
        </Form.Text>
        <br />
        <Button type="submit" className="btn-danger my-3">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default MakeAdmin;
