import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap';

const Formm = (props) => (
  <Form>
    <FormGroup>
    {props.titulo}<br></br>
      <Label for="exampleEmail" >
        
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="EMAIL"
        type="email"
      />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">
        Contraseña
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="password"
        type="password"
      />
    </FormGroup>

    
    <Button>
    {props.boton}
    </Button>
  </Form>
);

export default Formm;
