import { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import TypeCarrito from '../components/typewritters/TypeCarrito';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import './Carrito.scss'

const Carrito = () => {
  const { carrito, eliminarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)
  console.log(carrito)

  const handleEliminar = (id) => {
    //console.log(id)
    eliminarCarritoContext(id)
    showEliminarSuccessNotification()
  }

  const handleComprar = () => {
    Swal.fire({
      title: '¿Confirmar compra?',
      text: `Total ${parseFloat(calcularTotal()).toFixed(2)}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, comprar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        guardarCarritoContext();
        showCompraSuccessNotification();
      }
    });
  };

  const showEliminarSuccessNotification = () => {
    Swal.fire({
      icon: 'success',
      title: 'Producto eliminado',
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const showCompraSuccessNotification = () => {
    Swal.fire({
      icon: 'success',
      title: 'Compra exitosa',
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const calcularTotal = () => {
    let sumaTotal = carrito.reduce((total, prod) => {
      return total + (prod.precio * prod.cantidad)
    }, 0)
    console.log(sumaTotal)
    return sumaTotal
  }

  return (
    <>
      <div className='heading'>
        <header className='heading__header'>
          <h1>Carrito</h1>
          <span> <TypeCarrito/> </span>
        </header>
      </div>


      <table className='alta-table table-cart'>
        <thead className='alta-table__header'>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='alta-table__body'>
          {carrito.length <= 0 ? (
            <tr className='alta-table__row'>
              <td colSpan={6}><strong>No hay productos</strong></td>
            </tr>
          ) : (
            carrito.map((producto, idx) => (
              <tr className='alta-table__row' key={idx}>
                <td>
                  <img src={producto.foto} alt={producto.nombre} className='alta-table__img' />
                </td>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
                <td>{producto.cantidad * producto.precio}</td>
                <td>
                  <button className='alta-table__button-row alta-table__button-row--delete' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
          {!carrito.length <= 0 && (
            <tr className='alta-table__row'>
              <td className='' colSpan={4}><strong>Total</strong></td>
              <td><strong>{parseFloat(calcularTotal()).toFixed(2)}</strong></td>
              <td>
                {!carrito.length <= 0 && (
                  <button
                    className='alta-table__button-row alta-table__button-row--send'
                    onClick={handleComprar}
                  >
                    Comprar
                  </button>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Carrito