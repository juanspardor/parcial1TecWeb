import imagen from '../imagen.png'
import Login from './Login'
import { Image } from 'react-bootstrap';

function PaginaLogin(props) {
  
  return (
    <div>
        <h1>El aroma magico</h1>
        <hr />
        <Image src = {imagen} alt = "banner" style={{ maxWidth: '1500px' }}/>
        <hr />
        <Login/>

    </div>
  );
}

export default PaginaLogin;
