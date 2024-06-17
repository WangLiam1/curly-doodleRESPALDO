import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



import Tab from '../Tabla';
import Formm from '../Formulario';
import Car from '../Carrusel';
import Cardd from '../Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  { src: 'https://picsum.photos/id/1011/1200/400', altText: 'Primera diapositiva', caption: 'Primera diapositiva' },
  { src: 'https://picsum.photos/id/1012/1200/400', altText: 'Segunda diapositiva', caption: 'Segunda diapositiva' },
  { src: 'https://picsum.photos/id/1013/1200/400', altText: 'Tercera diapositiva', caption: 'Tercera diapositiva' }
];

const About = (props) => {
  return (
    <div>
      <Tab />
      <h1>MUSICA</h1>
      <Car items={items} />
      
    </div>
  );
}

export default About;