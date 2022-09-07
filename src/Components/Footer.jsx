import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center text-white">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
          <div className="me-5 d-none d-lg-block ">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <NavLink to="/" className="me-4 text-white">
              <i className="fa fa-facebook-f"></i>
            </NavLink>
            <NavLink to="/" className="me-4 text-white">
              <i className="fa fa-twitter"></i>
            </NavLink>
            <NavLink to="/" className="me-4 text-white">
              <i className="fa fa-google"></i>
            </NavLink>
            <NavLink to="/" className="me-4 text-white">
              <i className="fa fa-instagram"></i>
            </NavLink>
            <NavLink to="/" className="me-4 text-white">
              <i className="fa fa-aedin"></i>
            </NavLink>
            <NavLink to="/" className="me-4 text-white">
              <i className="fa fa-github"></i>
            </NavLink>
          </div>
        </section>

        <section className="paint">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src="/Images/logo.png" alt="" width="35" height="35" />
                  Paint Application
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <NavLink to="/" className="text-reset">
                    Angular
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" className="text-reset">
                    React
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" className="text-reset">
                    Vue
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" className="text-reset">
                    Laravel
                  </NavLink>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Usefull as</h6>
                <p>
                  <NavLink to="/" className="text-reset">
                    Pricing
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" className="text-reset">
                    Settings
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" className="text-reset">
                    Orders
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" className="text-reset">
                    Help
                  </NavLink>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="icons fa fa-home me-3 text-white"></i> India,
                  Uttar Pradesh,{" "}
                </p>
                <p>
                  <i className="icons fa fa-envelope me-3 text-white"></i>
                  example@gmail.com
                </p>
                <p>
                  <i className=" icons fa fa-phone me-3 text-white"></i> + 01
                  234 567 88
                </p>
                <p>
                  <i className=" icons fa fa-print me-3 text-white"></i> + 01
                  234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          <p
            className="text-reset fw-bold"
            href="https://mdbootstrap.com/"
          >
            Paintapp@2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
