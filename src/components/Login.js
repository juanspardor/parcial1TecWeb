import {Form, Row, Col, Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Login(props) {
    const [formValues, setFormValues] = useState({nombreUsuario:"", password:""})
    const [validationStates, setValidationStates] = useState({userState:false, passwordState:false})

    const hangleUserCahnge = ((e) => {
        const valor = e.target.value
        setFormValues({...formValues, nombreUsuario: e.target.value})
        if(valor.length < 5)
        {
            setValidationStates({...validationStates, userState: true})
        }
      });
    
      const handlePasswordChange = ((e) => {
        const valor =  e.target.value
        setFormValues({...formValues, password: valor})
    
        
        if(valor.length < 5)
        {
            setValidationStates({...validationStates, passwordState: true})
        }
    
      });

  return (
    <div>
       <Card>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control type="mb-3" placeholder="Ingresa tu usuario" onChange={hangleUserCahnge} value={formValues.nombreUsuario} isInvalid = {validationStates.userState}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="mb-3" placeholder="Ingresa tu contraseña" onChange={handlePasswordChange} value={formValues.password} isInvalid = {validationStates.passwordState}/>
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


    {validationStates.passwordState && validationStates.userState && <p>Revisa tus credenciales</p>}
        </Card.Body>
       </Card>
    </div>
  );
}

export default Login;
