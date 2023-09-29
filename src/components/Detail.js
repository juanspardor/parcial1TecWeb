import { Card, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FormattedMessage } from 'react-intl';
function Detail(props)
{

    const [cafe, setCafes] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:3001/cafes/"+props.id;
        fetch(URL).then(data => data.json()).then(data => {setCafes(data)})
      }, [props.id])


    return(
        <div>
            <Card className="shadow" style = {{width:'350px',backgroundColor: "#F8F1F1",borderRadius: '0', border:'1px solid black'}} >
                <Card.Body className="text-center" >
                    <h4 className="fw-bold">
                        {cafe.nombre}
                    </h4>
                    <h5>
                        {cafe.fecha_cultivo}
                    </h5>
                    <Image src = {cafe.imagen} alt = "Foto del cafe" style={{ maxHeight: '165px' }}/>
                    <p style = {{margin: '0px'}}><FormattedMessage id = "Notes"/></p>
                    <p>{cafe.notas}</p>
                    <h5 className="fw-bold"><FormattedMessage id = "Height"/> {cafe.altura} <FormattedMessage id = "Unit"/></h5>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Detail;