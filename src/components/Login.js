import { Form, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

function Login(props) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    nombreUsuario: "",
    password: "",
  });
  const [validationStates, setValidationStates] = useState({
    userState: false,
    passwordState: false,
  });

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: formValues.nombreUsuario,
          password: formValues.password,
        }), 
      });

      console.log(response);
      if (response.ok) {
        navigate("/cafes");
      } else {
        setValidationStates({
          ...validationStates,
          passwordState: true,
          userState: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const limpiarCampos = () => {
    setFormValues({ ...formValues, nombreUsuario: "" });
    setFormValues({ ...formValues, password: "" });
  };
  const hangleUserCahnge = (e) => {
    const valor = e.target.value;
    setFormValues({ ...formValues, nombreUsuario: valor });
  };

  const handlePasswordChange = (e) => {
    const valor = e.target.value;
    setFormValues({ ...formValues, password: valor });
  };

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>
        <FormattedMessage id="Login" />
      </p>
      <Card
        style={{
          backgroundColor: "#F8F1F1",
          width: "50rem",
          borderRadius: "0",
        }}
        className="shadow"
      >
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: "bold" }}>
                <FormattedMessage id="Username" />
              </Form.Label>
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
              <Form.Label style={{ fontWeight: "bold" }}>
                <FormattedMessage id="Password" />
              </Form.Label>
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
              <Button
                className="sharp-corner-button"
                style={{ backgroundColor: "#94A891", fontWeight: "bold", color: "black" }}
                onClick={() => handleLogin()}
              >
                <FormattedMessage id="Enter" />
              </Button>
            </Col>
            <Col className="text-center">
              <Button
                className="sharp-corner-button"
                onClick={limpiarCampos}
                style={{
                  color: "black",
                  backgroundColor: "#C65E5A",
                  fontWeight: "bold",
                }}
              >
                <FormattedMessage id="Cancel" />
              </Button>
            </Col>
          </Row>

          {(validationStates.passwordState || validationStates.userState) && (
            <p style={{ margin: "5px", color: "red", fontWeight: "bold" }}>
              <FormattedMessage id="Error" />
            </p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
