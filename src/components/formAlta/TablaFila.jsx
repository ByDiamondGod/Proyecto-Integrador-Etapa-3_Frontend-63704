/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from 'react'
import ProductoContext from '../../contexts/ProductoContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import PropTypes from 'prop-types';
import './TablaFila.scss'

const TablaFila = ({ producto, setProductoAEditar, formSwipe }) => {

  const { eliminarProductoContext } = useContext(ProductoContext)

  const handleDelete = (id, nombre) => {

    Swal.fire({
      title: '¿Estás seguro?',
      html: `
      ${nombre} será eliminado
      <br />
      No podrás revertir esta acción.
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id);
        Swal.fire(
          '¡Listo!',
          'Tu producto ha sido eliminado.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario ha cancelado la eliminación
        Swal.fire(
          'Cancelado',
          'Tu producto está a salvo',
          'error'
        );
      }
    });
  }

  // Forma 1 | sin props (formScrollUp)
  // (Mejor solucion para el desplazamiento vertical hacia el formulario[es mas especifico])
  const handleUpdate = (item) => {
    setProductoAEditar(item);
    const formScrollUp = document.getElementById('id-del-formulario');
        if (formScrollUp) {
          formScrollUp.scrollIntoView({ behavior: 'smooth' });
        }
};

  // Forma 2 | con props desde Alta (formSwipe)

  //   const handleUpdate = (item) => {
  //     setProductoAEditar(item);
  //     handleScrollToFormulario();
  // };

  // const handleScrollToFormulario = () => {
  //   if (formSwipe && formSwipe.current) {
  //     formSwipe.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

  //     Desplazar la página hacia arriba
  //     window.scrollBy(0, -2000);
  //   }
  //   };

  return (
    <tr className='alta-table__row'>
          <td>{producto.nombre}</td>
          <td>{producto.precio}</td>
          <td>{producto.stock}</td>
          <td>{producto.marca}</td>
          <td>{producto.categoria}</td>
          <td className='alta-table__description' >{producto.detalles}</td>
          <td>
            <img className='alta-table__img' src={producto.foto} alt={producto.nombre} loading='lazy'/>
          </td>
          <td>{producto.envio ? 'Si' : 'No'}</td>

          <td>
            <div className='alta-table__buttons-row'>
              <button className='alta-table__button-row alta-table__button-row--edit'
                onClick={() => handleUpdate(producto)}>
                Editar
              </button>

            <button className='alta-table__button-row alta-table__button-row--delete'
              onClick={() => handleDelete(producto.id, producto.nombre)}>
              Eliminar
            </button>
            </div>
          </td>
    </tr>
  )
}

TablaFila.propTypes = {
  producto: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      marca: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
      detalles: PropTypes.string.isRequired,
      envio: PropTypes.bool.isRequired,
  }).isRequired,
  setProductoAEditar: PropTypes.func.isRequired,
}

export default TablaFila