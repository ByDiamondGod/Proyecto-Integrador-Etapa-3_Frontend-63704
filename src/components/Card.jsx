/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './Card.scss';
import { useContext } from 'react';
import CarritoContext from '../contexts/CarritoContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Card = ({ producto }) => {
  const { agregarCarritoContext } = useContext(CarritoContext);

  const handleClick = (producto) => {
    agregarCarritoContext(producto);
    showSuccessNotification();
  }

  const showSuccessNotification = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
    });

    Toast.fire({
      icon: 'success',
      title: '¡Agregado al carrito!',
    });
  }

  return (
    <>
      <div className="card">
        <article className="card__article">
          <div className="card__image-container">
            <img className="card__image" src={producto.foto} alt={producto.nombre} />
          </div>
          <div className="card__content">
            <h2 className="card__heading">{producto.nombre}</h2>
            <div className="card__description">
              <p>{producto.detalles}</p>
            </div>
          </div>
          <div className="card__div-button">
            <button
              className="card__button"
              onClick={() => handleClick(producto)}>
              COMPRAR
            </button>
          </div>
        </article>
      </div>
    </>
  )
}

Card.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    detalles: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;