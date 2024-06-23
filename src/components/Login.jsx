import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [validated, setValidated] = useState(false);
  const {setAdmin,setUser}=useContext(UserContext)
  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    const formData=new FormData(form)
    setUser(formData.get('inputUsername'))
    if(formData.get('inputUsername')==import.meta.env.VITE_ADMIN_USERNAME && formData.get('inputPassword')==import.meta.env.VITE_ADMIN_PASSWORD)
      setAdmin(true)
    navigate('/')
  };

  return (
    <div className="login">
      <h5 className="text-center">Sign IN / Sign UP</h5>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputUsername">Username</Form.Label>
        <Form.Control type="text" id="inputUsername" name="inputUsername" required/>
        <Form.Label htmlFor="inputPassword">Password</Form.Label>
        <Form.Control
          required
          type="password"
          id="inputPassword"
          name="inputPassword"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be ....
        </Form.Text>
        <Button className="d-block mt-2 mx-auto"type="submit">Submit form</Button>
      </Form>
    </div>
  );
};
