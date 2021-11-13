import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../utilities/context/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(5);
  const history = useHistory();
  const descriptionRef = useRef();
  const handelSubmit = (e) => {
    const review = {
      user: user.displayName,
      description: descriptionRef.current.value,
      rating,
    };
    fetch("https://byke-app.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    }).then(() => {
      history.push("/home");
    });
    e.preventDefault();
  };
  const ratings = (num) => {
    setRating(num);
  };
  return (
    <div>
      <h3 className="my-4">Submit your review here.</h3>
      <Form onSubmit={handelSubmit} className="my-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description:</Form.Label>
          <Form.Control ref={descriptionRef} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating:</Form.Label>
          <br />
          <Form.Check
            inline
            onChange={() => ratings(1)}
            label="1"
            name="group1"
            type="radio"
          />
          <Form.Check
            inline
            label="2"
            onChange={() => ratings(2)}
            name="group1"
            type="radio"
          />
          <Form.Check
            inline
            label="3"
            onChange={() => ratings(3)}
            name="group1"
            type="radio"
          />
          <Form.Check
            inline
            label="4"
            onChange={() => ratings(4)}
            name="group1"
            type="radio"
          />
          <Form.Check
            inline
            label="5"
            onChange={() => ratings(5)}
            name="group1"
            type="radio"
          />
        </Form.Group>
        <Button type="submit" className="btn-success">
          Submit{" "}
        </Button>
      </Form>
    </div>
  );
};

export default Review;
