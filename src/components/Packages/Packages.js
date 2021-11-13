import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Package from "./Package/Package";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://byke-app.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="text-center my-5">
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <Container className="mt-4">
          <h2 className="text-center text-dark y-5">Best Selling Bikes</h2>

          <Row className="g-4 mb-5">
            {packages.slice(0, 6).map((pkg) => (
              <Package key={pkg._id} package={pkg}></Package>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Packages;
