import React, { useState } from "react";
import "../../styles/Contact.css";
import { Form, Button, } from "react-bootstrap";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [fullName, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    switch(inputType) {
      case "email":
        setEmail(inputValue);
        if (!validateEmail(email))
        {
          setErrorMessage("email format is still not correct, please correct email format");
        }
        else
        {
          setErrorMessage("");
        }
        break;
      case "fullName":
        setName(inputValue);
        break;
      default:
        setMessage(inputValue);
    }


  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    if (!validateEmail(email) || !fullName) {
      setErrorMessage("Something is not quite right. Please check your email and leave a name. ~Thank you!");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
    alert(`Hello ${fullName}`);
  };

  return (
    <section class="Contact">
      <div className="container form">
        <div className="row">
          <div className="col-lg-10 bg-dark mx-auto text-white mb-4">
            <Form>

            <Form.Group className="mb-2">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control inputType="text" placeholder="First LastName" value={fullName}  className="fullName" name="fullName" required="true" onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-2">            
                <Form.Label>Email address:</Form.Label>
                <Form.Control inputType="text" placeholder="your.email@here.com" value={email} className="email" name="email" required="true" onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-2" >
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3}  value={message} className="message" required="true" onChange={handleInputChange} />
              </Form.Group>

              <Button variant="primary" onClick={handleFormSubmit}>Submit</Button>{" "}
            </Form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>)}
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