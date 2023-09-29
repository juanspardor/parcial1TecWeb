import imagen from '../imagen.png'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Detail from './Detail';
import { FormattedMessage } from 'react-intl';
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

    return(
        <div>
       <h1>El aroma magico</h1>
        <hr />
        <Container className="d-flex justify-content-center align-items-center">
          <Image src = {imagen} alt = "banner" style={{ maxWidth: '1300px' }}/>
        </Container>
        
        <hr />

        <Container>
        <Row>
          <Col sm={8}>
          <Table>
      <thead>
        <tr style={{ backgroundColor: 'grey', color: 'white' }}>
          <th>#</th>
          <th><FormattedMessage id = "Name"/></th>
          <th><FormattedMessage id = "Type"/></th>
          <th><FormattedMessage id = "Region"/></th>
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

      <br>
    </br>
    <br>
    </br>

    <Container className="d-flex justify-content-center align-items-center">
    <p><FormattedMessage id = "Contact"/></p>
        </Container>
    </div>
    );
}

export default PaginaDatos;