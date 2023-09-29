import imagen from '../imagen.png'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Detail from './Detail';
function PaginaDatos(){

    const [show, setShow] = useState(false);
  const [cafeSeleccionado, setCafeSeleccionado] = useState(null);

  const cambio = (pCafe) => {
    setShow(true);
    setCafeSeleccionado(pCafe)
  };

    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:3001/cafes";
        fetch(URL).then(data => data.json()).then(data => {setCafes(data)})
      }, [])

      console.log(cafes)
    return(
        <div>
        <h1>El aroma magico</h1>
        <hr />
        <Image src = {imagen} alt = "banner" style={{ maxWidth: '1500px' }}/>
        <hr />

        <Container>
        <Row>
          <Col sm={8}>
          <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {cafes.map((cafe)=>(
            <tr onClick={()=>cambio(cafe)}>
            <td>{cafe.id}</td>
            <td>{cafe.nombre}</td>
            <td>{cafe.tipo}</td>
            <td>{cafe.region}</td>
        </tr>
        ))}
      </tbody>
    </Table>
          </Col>

          <Col sm={4}>
            {show && <Detail id ={ cafeSeleccionado.id}/>}
        </Col>
        </Row>
      </Container>

    </div>
    );
}

export default PaginaDatos;