import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-md-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have some <b>Questions</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/Images/contact1.png" alt="contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Write Your Message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Send Message
                  <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
