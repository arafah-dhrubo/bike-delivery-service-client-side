import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CardGroup, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../utilities/context/useAuth";

const BookForm = () => {
  const history = useHistory();
  const userRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const idRef = useRef();
  const phoneRef = useRef();
  const cardRef = useRef();
  const { user } = useAuth();
  const { id } = useParams();
  const [pack, setPack] = useState({});
  const { name, description, image, price } = pack;
  useEffect(() => {
    fetch(`https://byke-app.herokuapp.com/productBy/${id}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, [id]);
  const handelSubmit = (e) => {
    e.preventDefault();
    const userMail = emailRef.current.value;
    const userName = userRef.current.value;
    const userAddress = addressRef.current.value;
    const productId = idRef.current.value;
    const userPhone = phoneRef.current.value;
    const userCard = cardRef.current.value;
    const isPending = true;
    const order = {
      userMail,
      userName,
      userAddress,
      productId,
      userPhone,
      userCard,
      pack,
      isPending,
    };
    fetch("https://byke-app.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    }).then(() => {
      history.push("/booked");
    });
  };
  return (
    <div className="text-center">
      <Container className="form text-start border-4 rounded-3 p-5 my-4 border-light border">
        <h3 className="text-success text-center pb-4 mb-lg-4 border-bottom border-5 rounded border-success">
          Confirm Your Booking.
        </h3>
        <div className="d-lg-flex">
          <div className="w-100">
            <CardGroup className="border-start border-5 rounded border-danger">
              <Card>
                <Card.Img variant="top" className="w-100 h-50" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <p>Cost: {price}</p>
                </Card.Body>
                <Card.Footer>
                  <Link to="/home">
                    <Button className="btn-danger">Home</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
          <div className="w-100 ms-lg-5 border-start border-5 rounded border-success">
            <Form className="ms-lg-4" onSubmit={handelSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={userRef}
                  defaultValue={user.displayName}
                />

                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  required
                  defaultValue={user.email}
                  ref={emailRef}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  ref={addressRef}
                  type="text"
                  required
                  placeholder="Address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicID">
                <Form.Label>Product ID</Form.Label>
                <Form.Control
                  type="text"
                  required
                  ref={idRef}
                  defaultValue={id}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicphone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  ref={phoneRef}
                  required
                  placeholder="Phone"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCard">
                <Form.Label>Credit Card Number</Form.Label>
                <Form.Control
                  type="text"
                  ref={cardRef}
                  required
                  placeholder="Number"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Confirm
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookForm;
