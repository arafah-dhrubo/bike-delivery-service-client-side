import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Switch, useRouteMatch } from "react-router";
import { HashLink } from "react-router-hash-link";
import MyOrders from "../MyOrders/MyOrders";
import PayLinks from "../PayLinks/PayLinks";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import ManageBooks from "../ManageBooks/ManageBooks";
import "./dash.css";
import AddPackage from "../AddPackage/AddPackage";
import useAuth from "../../utilities/context/useAuth";
import Review from "../Review/Review";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../AdminRoute/AdminRoute";
import DashboardHome from "./DashboardHome";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  return (
    <div className=" width">
      <Row>
        <Col
          className="bg-red-100 ps-lg-4 pt-lg-3 pb-lg-5"
          xs={4}
          md={2}
        >
          {admin ? (
            <div>
              <Nav.Link
                to={`${url}/addProduct`}
                as={HashLink}
                className="w-100 text-danger bg-white my-2 p-2"
              >
                Add Product
              </Nav.Link>
              <Nav.Link
                to={`${url}/makeAdmin`}
                as={HashLink}
                className="w-100 text-danger bg-white my-2 p-2"
              >
                Make Admin
              </Nav.Link>
              <Nav.Link
                to={`${url}/management`}
                as={HashLink}
                className="w-100 text-danger bg-white my-2 p-2"
              >
                Manage Product
              </Nav.Link>
            </div>
          ) : (
            <div>
              {" "}
              <Nav.Link
                to={`${url}/myOrders`}
                as={HashLink}
                className="w-100 text-danger bg-white my-2 p-2"
              >
                My Orders
              </Nav.Link>
              <Nav.Link
                to={`${url}/reviews`}
                as={HashLink}
                className="w-100 text-danger bg-white my-2 p-2"
              >
                Review
              </Nav.Link>
              <Nav.Link
                to={`${url}/payLink`}
                as={HashLink}
                className="w-100 text-danger bg-white my-2 p-2"
              >
                Pay Link
              </Nav.Link>
            </div>
          )}
        </Col>
        <Col className="" xs={8} md={10}>
          <Switch>
            <PrivateRouter exact path={`${path}`}>
              <DashboardHome></DashboardHome>
            </PrivateRouter>
            <PrivateRouter path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </PrivateRouter>
            <PrivateRouter path={`${path}/reviews`}>
              <Review></Review>
            </PrivateRouter>
            <PrivateRouter path={`${path}/payLink`}>
              <PayLinks></PayLinks>
            </PrivateRouter>
            <AdminRoute path={`${path}/addProduct`}>
              <AddPackage></AddPackage>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/management`}>
              <ManageBooks></ManageBooks>
            </AdminRoute>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
