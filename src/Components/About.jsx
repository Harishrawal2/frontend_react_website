import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="Images/about3.png" alt="about" className="w-75 mt-2" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident itaque, dolore facilis laboriosam laborum repudiandae
                consequuntur quibusdam sequi reprehenderit quasi maiores alias
                obcaecati sapiente modi nisi tenetur iste fugit facere? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                earum! Lorem ipsum dolor sit amet.
              </p>
              <NavLink to='/service' className="btn btn-outline-primary rounded-pill px-4 py-2">
                {" "}
                Get Started
              </NavLink>
              <NavLink to='/contact' className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2 ">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
