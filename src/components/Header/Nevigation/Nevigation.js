import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import useAuth from "../../../utilities/context/useAuth";
import "./Navigation.css";
import { HashLink } from "react-router-hash-link";
import SideBar from "../../sideBar/SideBar";

/* you might khow the component, yes this is navigation bar to navigate all  */
const Nevigation = () => {
  const { user, logOut } = useAuth();
  const handelLogOut = () => {
    logOut();
  };
  return (
    <>
      <Navbar bg="white" expand="lg" variant="white" sticky="top">
        <Container>
          <Navbar.Brand>
            {" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Miyata_Cycle_company_logo.svg/1280px-Miyata_Cycle_company_logo.svg.png" alt="" width="180px" className="mx-auto" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-dark ms-auto">
              <Nav.Link as={HashLink} className="text-dark" to="">
                <SideBar></SideBar>
              </Nav.Link>
              <Nav.Link as={HashLink} className="text-dark" to="/home">
                Home
              </Nav.Link>

              <Nav.Link as={HashLink} className="text-dark" to="/explore">
                Explore
              </Nav.Link>

              {/* here this will run when user is logged in , here is the logout button and user name */}
              {user?.email ? (
                <>
                  <Nav.Link as={HashLink} className="text-dark" to="/dashboard">
                    Dashboard
                  </Nav.Link>

                  <button
                    type="button"
                    onClick={handelLogOut}
                    className="btn btn-sm btn-danger me-3"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Nav.Link as={HashLink} className="text-dark" to="/Login">
                  Login
                </Nav.Link>
              )}

              {user.email && (
                <Navbar.Text>
                  Signed in as:
                  <span className="ms-2 text-dark fw-bold">
                    {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nevigation;
