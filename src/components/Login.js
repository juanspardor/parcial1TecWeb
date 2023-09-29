import {Form, Row, Col, Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Login(props) {
  
  return (
    <div>
       <Card>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Row>
        <Col>
        <Button>
  <Link to="/cafes" style={{ color: 'white' }}>Ingresar</Link>
</Button>
        </Col>
        <Col>
            <Button>Cancelar</Button>
        </Col>
    </Row>
        </Card.Body>
       </Card>
    </div>
  );
}

export default Login;
