import { FormattedMessage } from 'react-intl';
import imagen from '../imagen.png'
import Login from './Login'
import { Image, Container } from 'react-bootstrap';

function PaginaLogin(props) {
  
  return (
    <div>
        <h1>El aroma magico</h1>
        <hr />
        <Container className="d-flex justify-content-center align-items-center">
          <Image src = {imagen} alt = "banner" style={{ maxWidth: '1300px' }}/>
        </Container>
        
        <hr />
        <Container className="d-flex justify-content-center align-items-center">
          <Login/>  
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

export default PaginaLogin;
