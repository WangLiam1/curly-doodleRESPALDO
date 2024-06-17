import { Nav } from 'reactstrap';
import './App.css';
import Tes from './Nav';
import Layout from './pages/Layout.jsx';


import Navb from './Nav';
import Car from './Carrusel'
import Cardd from './Card';

import Formm from './Formulario';

const items = [
  { src: 'https://picsum.photos/id/1011/1200/400', altText: 'Primera diapositiva', caption: 'Primera diapositiva' },
  { src: 'https://picsum.photos/id/1012/1200/400', altText: 'Segunda diapositiva', caption: 'Segunda diapositiva' },
  { src: 'https://picsum.photos/id/1013/1200/400', altText: 'Tercera diapositiva', caption: 'Tercera diapositiva' }
];


function Tab(props){
    return(
        
        <div className="cen">
            <div className="cajita">
      <Cardd />
    </div>
    <div className="cajita">
      {/* <Car />*/}
      <Car items={items} />
    </div>
    <div className="cajita">
      <Cardd />
    </div>

    <div className="cajita">
      <Cardd />
    </div>
    <div className="cajita">
      <Formm />
    </div>
    <div className="cajita">
      <Cardd />
    </div>



    
            <div className="cajita">
                <img className='fotos2' src={props.imagen} />
                <a href="./index.jsx">asdasd</a>
                
                
            </div>
            <div className="cajita">
            <img className='fotos2' src={props.imagen}/>
            
            {/* <Tes></Tes>*/}
            
            </div>
            <div className="cajita">
            <img className='fotos2' src={props.imagen}/>
            </div>

            <div className="cajita">
            <img className='fotos2' src={props.imagen}/>
                </div>
                <div className="cajita">
                <img className='fotos2' src={props.imagen}/>
                </div>
                <div className="cajita">
                <img className='fotos2' src={props.imagen}/>

                
                </div>

        </div>
        
    );
}
export default Tab;