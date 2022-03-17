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
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !fullName) {
      setErrorMessage("Something is not quite right. Please check your email and leave a name. ~Thank you!");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If successful, we want to clear out the input after registration.
    setName("");
    // TODO: Set the password back to an empty string after the user clicks submit
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
                <Form.Control type="text" placeholder="First LastName" value={fullName}  name="fullName" onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-2">              
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="your.email@here.com" value={email} name="email" onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-2" >
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3}  value={message} name="message" onChange={handleInputChange} />
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