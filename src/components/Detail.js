import { Card, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
function Detail(props)
{

    const [cafe, setCafes] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:3001/cafes/"+props.id;
        fetch(URL).then(data => data.json()).then(data => {setCafes(data)})
      }, [props.id])

console.log(cafe)
    return(
        <div>
            <Card>
                <Card.Body className="text-center">
                    <h3>
                        {cafe.nombre}
                    </h3>
                    <h4>
                        {cafe.fecha_cultivo}
                    </h4>
                    <Image src = {cafe.imagen} alt = "Foto del cafe" style={{ maxWidth: '300px' }}/>
                    <p>Notas</p>
                    <p>{cafe.notas}</p>

                    <p>Cultivado a una altura de {cafe.altura} msnm</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Detail;