import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Example from './Ejemplo';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import About  from "./pages/Musica";
import Home  from "./pages/Home";
import Mercancia from './pages/Mercancia';

import Dashboard  from "./pages/Conciertos";
function App() {
  
  return (
    
    <div>
      <h3>PROYECTO 122: GRUPO DE MUSICA</h3>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="mercancia" element={<Mercancia />} />
           
           
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
