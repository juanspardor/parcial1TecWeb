import { Form, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
function Login(props) {
  const [formValues, setFormValues] = useState({
    nombreUsuario: "",
    password: "",
  });
  const [validationStates, setValidationStates] = useState({
    userState: false,
    passwordState: false,
  });

  const limpiarCampos = () =>
  {
    setFormValues({ ...formValues, nombreUsuario: "" });
    setFormValues({ ...formValues, password: "" });
  }
  const hangleUserCahnge = (e) => {
    const valor = e.target.value;
    setFormValues({ ...formValues, nombreUsuario: e.target.value });
    if (valor.length < 5) {
      setValidationStates({ ...validationStates, userState: true });
    } else {
      setValidationStates({ ...validationStates, userState: false });
    }
  };

  const handlePasswordChange = (e) => {
    const valor = e.target.value;
    setFormValues({ ...formValues, password: valor });

    if (valor.length < 5) {
      setValidationStates({ ...validationStates, passwordState: true });
    } else {
      setValidationStates({ ...validationStates, passwordState: false });
    }
  };

  return (
    <div>
      <p style = {{fontWeight: 'bold'}}><FormattedMessage id = "Login"/></p>
      <Card style={{ backgroundColor: "#F8F1F1", width: '50rem', borderRadius: '0'}} className="shadow">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style = {{fontWeight: 'bold'}} ><FormattedMessage id = "Username"/></Form.Label>
              <Form.Control
                type="mb-3"
                placeholder=""
                onChange={hangleUserCahnge}
                value={formValues.nombreUsuario}
                isInvalid={validationStates.userState}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style = {{fontWeight: 'bold'}}><FormattedMessage id = "Password"/></Form.Label>
              <Form.Control
                type="mb-3"
                placeholder=""
                onChange={handlePasswordChange}
                value={formValues.password}
                isInvalid={validationStates.passwordState}
              />
            </Form.Group>
          </Form>
          <Row className="justify-content-center align-items-center">
            <Col className="text-center">
              <Button className="sharp-corner-button" style={{ backgroundColor: "#94A891", fontWeight: 'bold' }}>
                <Link to="/cafes" style={{ color: "black",textDecoration: 'none' }}>
                <FormattedMessage id = "Enter"/>
                </Link>
              </Button>
            </Col>
            <Col className="text-center">
              <Button className="sharp-corner-button" onClick={limpiarCampos} style={{ color: "black", backgroundColor: "#C65E5A", fontWeight: 'bold' }}><FormattedMessage id = "Cancel"/></Button>
            </Col>
          </Row>

          {(validationStates.passwordState || validationStates.userState) && (
            <p style = {{margin: '5px', color: 'red', fontWeight: 'bold'}}><FormattedMessage id = "Error"/></p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
