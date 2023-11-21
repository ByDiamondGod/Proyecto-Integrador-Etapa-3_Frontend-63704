import { useState } from 'react'
import Formulario from '../components/formAlta/Formulario'
import Tabla from '../components/formAlta/Tabla'
import TypeAlta from '../components/typewritters/TypeAlta';
import './Alta.scss';


const Alta = () => {

  const [productoAEditar, setProductoAEditar] = useState(null)

  return (
      <main>
          <div className='heading'>
              <header className='heading__header'>
                  <h1>Alta</h1>
                  <span> <TypeAlta/> </span>
              </header>
          </div>
          <div>
              <Formulario productoAEditar={productoAEditar} setproductoAEditar={setProductoAEditar} />
              <Tabla setProductoAEditar={setProductoAEditar} />
          </div>
      </main>
  );
};

export default Alta;
