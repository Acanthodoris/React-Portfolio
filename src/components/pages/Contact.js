import React from "react";
import "../../styles/Contact.css";
import {
  Form,
  Button,
} from "react-bootstrap";

function Contact() {
  return (
    <section class="Contact">
      <div className="container form">
        <div className="row">
          <div className="col-lg-10 bg-dark mx-auto text-white mb-4">
            <Form>
            <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Name:</Form.Label>
                <Form.Control type="fullname" placeholder="First LastName" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="your.email@here.com" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary">Submit</Button>{" "}
            </Form>
          </div>
          <h6 className="col-lg-10 mx-auto text-white mb-4">
            {" "}
            Or e-mail me at{" "}
            <a href="mailto:rebeccah.may@gmail.com">
              {" "}
              Rebeccah.May@Gmail.com{" "}
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Contact;