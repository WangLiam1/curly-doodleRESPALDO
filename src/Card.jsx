import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
function Cardd(props){
    return(
      <div>
  <Card
  style={{
    width: '18rem'
  }}
>
  <img alt={props.altText} src={props.imagen} className="card-image" />
  <CardBody>
    <CardTitle tag="h5">

      <CardTitle tag="h5">{props.titulo}</CardTitle>
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      
    </CardSubtitle>
    <CardText>

    <CardText>{props.descripcion}</CardText>
      
    </CardText>
    <Button>
      
      {props.boton}
    </Button>
  </CardBody>
</Card>
</div>
    );
}
export default Cardd;