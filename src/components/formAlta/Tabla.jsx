/* eslint-disable react/prop-types */
import { useContext } from 'react';
import ProductoContext from '../../contexts/ProductoContext';
import TablaFila from './TablaFila';
import './Tabla.scss';

const Tabla = ({ setProductoAEditar, formSwipe  }) => {
  const { productos } = useContext(ProductoContext);

  return (

    <div className='table-container'>
     <table className='alta-table'>
        <thead className='alta-table__header' >
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Marca</th>
              <th>Categoría</th>
              <th>Detalles</th>
              <th className='alta-table__description'>Foto</th>
              <th>Envío</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className='alta-table__body'>
            {productos &&
              productos.map((producto, idx) => (
                <TablaFila key={idx} producto={producto} setProductoAEditar={setProductoAEditar} formSwipe={formSwipe} />
                ))}
          </tbody>
     </table>
    </div>
  );
};

export default Tabla;