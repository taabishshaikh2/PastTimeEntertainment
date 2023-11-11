import { Avatar, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/BrandPic.jpeg";

const Footer = () => {
  const emailAddress = "devlanzzer@gmail.com";
  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  return (
    <>
      {isNonMobile ? (
        <div className="text-light bg-dark py-3">
          <div className="container">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="">
                  <Avatar src={img} alt="" sx={{ width: 200, height: 200 }} />
                </div>
                {/* <h2 className="">Past Time Entertainment</h2> */}
              </div>

              <div className="col-3">
                <h2 className="">Explore</h2>
                <div className="col list-group ">
                  <Link
                    to="/"
                    className="mb-3 text-decoration-none text-white "
                  >
                    Home
                  </Link>
                  <Link
                    to="/explore"
                    className="mb-3 text-decoration-none text-white "
                  >
                    Products
                  </Link>
                  <Link
                    to="/events"
                    className="mb-3 text-decoration-none text-white "
                  >
                    Events
                  </Link>
                  <Link
                    to="/conflict-management"
                    className="mb-3 text-decoration-none text-white "
                  >
                    Training
                  </Link>
                </div>
              </div>

              <div className="col-3  ">
                <h2 className="">Support</h2>
                <div className="col list-group">
                  <Link to="/" className="mb-3 text-decoration-none text-white">
                    FAQs
                  </Link>
                  <Link
                    to="/events"
                    className="mb-3 text-decoration-none text-white"
                  >
                    Review
                  </Link>
                  <Link
                    to="/conflict-management"
                    className="mb-3 text-decoration-none text-white"
                  >
                    Training
                  </Link>
                  <Link
                    to="/what-we-do"
                    className="mb-3 text-decoration-none text-white"
                  >
                    About
                  </Link>
                </div>
              </div>

              <div className="col-3">
                <h2 className="">Contacts</h2>
                <div className="col list-group">
                  <Link
                    to={`mailto:${emailAddress}`}
                    className="mb-3 text-decoration-none text-white"
                  >
                    simplygaming@gmail.com
                  </Link>
                  <Link to="/" className="mb-3 text-decoration-none text-white">
                    simplygaming.in
                  </Link>
                  <Link to="/" className="mb-3 text-decoration-none text-white">
                    simplygaming@facebook
                  </Link>
                  <Link to="/" className="mb-3 text-decoration-none text-white">
                    +91 99877 94974
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="accordion bg-dark" id="accordionExample">
            <div className="accordion-item bg-dark">
              <h2 className="accordion-header bg-dark">
                <button
                  className="accordion-button bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Explore
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse  bg-dark"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ms-3 text-light col list-group">
                  <Link
                    to="/"
                    className="mb-3 text-decoration-none text-white "
                  >
                    Home
                  </Link>
                  <Link
                    to="/explore"
                    className="mb-3 text-decoration-none text-white"
                  >
                    Products
                  </Link>
                  <Link
                    to="/events"
                    className="mb-3 text-decoration-none text-white"
                  >
                    Events
                  </Link>
                  <Link
                    to="/conflict-management"
                    className="mb-3 text-decoration-none text-white"
                  >
                    Training
                  </Link>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark">
              <h2 className=" accordion-header bg-dark">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Support
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse bg-dark"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ms-3 col list-group bg-dark text-light">
                  <Link to="/" className="mb-3 text-decoration-none text-white">
                    FAQs
                  </Link>
                  <Link
                    to="events"
                    className="mb-3 text-decoration-none text-white"
                  >
                    Review
                  </Link>
                  <Link
                    to="/conflict-management"
                    className="mb-3 text-decoration-none text-white"
                  >
                    Training
                  </Link>
                  <Link
                    to="/what-we-do"
                    className="mb-3 text-decoration-none text-white"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark">
              <h2 className="accordion-header bg-dark">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Contacts
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse bg-dark"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ms-3 col list-group bg-dark text-light">
                  <Link
                    to={`mailto:${emailAddress}`}
                    className="mb-3 text-decoration-none text-white"
                  >
                    simplygaming@gmail.com
                  </Link>
                  <Link to="" className="mb-3 text-decoration-none text-white">
                    simplygaming.in
                  </Link>
                  <Link to="/" className="mb-3 text-decoration-none text-white">
                    simplygaming@facebook
                  </Link>
                  <Link to="/" className="mb-3 text-decoration-none text-white">
                    +91 99877 94974
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-dark text-light p-3 text-center">
        <span>
          © Copyright 2023 | All Rights Reserved Past Time Entertainment
        </span>
      </div>
    </>
  );
};

export default Footer;
