import Tab from '../Tabla';
import Formm from '../Formulario';
import Car from '../Carrusel';
import Cardd from '../Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Pie from '../footer';

const items = [
    {
      src: '../futuro1.jpg',
      caption: 'Conciertos Futuros',
      caption2: '20 de noviembre de 2024: Foro Sol, Ciudad de México, México',
    },
    {
      src: '../futuro2.jpg',
      caption: 'Conciertos Futuros',
      caption2: '5 de diciembre de 2024: Stade de France, Saint-Denis, Francia',
    },
    {
      src: '../futuro3.jpg',
      caption: 'Conciertos Futuros',
      caption2: '15 de enero de 2025: Estadio River Plate, Buenos Aires, Argentina',
    },
  ];
const Dashboard = () =>{
    return (
        <div>
            <div className="cen">

                <div className="cajita">
                    <Cardd
                        imagen=""
                        titulo="Chris Martin"
                        descripcion="Vocalista principal y pianista del grupo Coldplay. Conocido por su voz emotiva y letras profundas."
                        boton="Más información"
                    />
                </div>
                <div className="cajita">
                    {/* <Car />*/}
                    <Car items={items} />
                </div>
                <div className="cajita">
                    <Cardd
                        imagen=""
                        titulo="Jonny Buckland"
                        descripcion="Guitarrista principal de Coldplay. Sus riffs y solos son fundamentales en la música del grupo."
                        boton="Más información"
                    />
                    
                </div>


                <div className="cajita">
                    <Cardd
                        imagen=""
                        titulo="Guy Berryman"
                        descripcion="Bajista de Coldplay. Su línea de bajo es la base sólida de las canciones del grupo."
                        boton="Más información"
                    />
                </div>
                <div className="cajita">
                    <Formm titulo="REGISTRO" boton="REGISTRARSE" />
                </div>
                <div className="cajita">
                    <Cardd
                        imagen=""
                        titulo="Will Champion"
                        descripcion="Baterista de Coldplay. Su precisión y creatividad en la batería son clave en el sonido del grupo."
                        boton="Más información"
                    />
                </div>


            </div>
            <Pie></Pie>
        </div>);
   }
   
   export default Dashboard;