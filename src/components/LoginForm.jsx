import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom"

function LoginForm() {
  const navigate=useNavigate()
  return (
    <div>
      {" "}
      <Form onSubmit={()=>navigate("/home")}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Kullanıcı adi</Form.Label>
          <Form.Control type="text" placeholder="Username" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Güvenlik Kodu</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
