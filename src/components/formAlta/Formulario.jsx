/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import ProductoContext from '../../contexts/ProductoContext';
import { useFormChange } from '../../hooks/useForm';
import DragDrop from './DragDrop'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import './Formulario.scss';

const formInicial = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
    envio: false,
}

const Formulario = ({ productoAEditar, setProductoAEditar }) => {

  /* Creamos 2 estados para gestionar el drag and drop */
  const [foto, setFoto] = useState('')
  const [srcImagen, setSrcImagen] = useState('')
  const [showAviso, setShowAviso] = useState(false);

  const [form, setForm, handleChange] = useFormChange(formInicial)
  const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if ( productoAEditar ) {
      setForm(productoAEditar)
      setSrcImagen(productoAEditar.foto)
      setIsEditing(true)
    } else {
      setForm(formInicial)
      setIsEditing(false);
    }
    // productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar, setForm, setProductoAEditar])

      // Función para mostrar notificación de envío exitoso
      const showEnvioSuccessNotification = () => {
        Swal.fire({
          icon: 'success',
          title: 'Envío exitoso',
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 3000,
        });
      };

      // Función para mostrar notificación de edición exitosa
      const showEdicionSuccessNotification = () => {
        Swal.fire({
          icon: 'success',
          title: 'Edición exitosa',
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 3000,
        });
      };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.warn('Debes completar todo el formulario')

    if (!foto) {
      setShowAviso(true);
      return;
    }

    try {

      if (form.id === null) {
        const productoNuevoConImagen = {...form, ...foto}
        await crearProductoContext(productoNuevoConImagen)
        showEnvioSuccessNotification()
      } else {
        const productoNuevoConImagen = {...form, ...foto}
        await actualizarProductoContext(productoNuevoConImagen)
        showEdicionSuccessNotification()
      }

      handleReset()

    } catch (error) {
      console.error('Algo ocurrió en el handleSubmit', error)
    }

  }

  const handleReset = () => {
    setForm(formInicial)
    setFoto('')
    setSrcImagen('')
    setShowAviso(false);
  }

    // Blur y Focus
    const [focusedField, setFocusedField] = useState(null);

    const handleFocus = (fieldName) => {
      setFocusedField(fieldName);
    }

    const handleBlur = () => {
      setFocusedField(null);
    }

  return (
    <div className='alta-form'>

      <h2 className='alta-form__title'>{isEditing ? 'Editar producto' : 'Agregar producto'}</h2>

      <form onSubmit={handleSubmit} className='alta-form__form'>

        <div className='alta-form__input-container'>
          <label htmlFor="lbl-nombre" className='alta-form__label'>Nombre</label>
          <input
            className='alta-form__input'
            type="text"
            name="nombre"
            id="lbl-nombre"
            value={form.nombre}
            placeholder={focusedField === 'nombre' ? '' : ''}
            onChange={handleChange}
            onFocus={() => handleFocus('nombre')}
            onBlur={handleBlur}
            autoFocus
            required
            maxLength="15"
            autoComplete="off"
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="lbl-precio" className='alta-form__label'>Precio</label>
          <input
            className='alta-form__input'
            type="number"
            name="precio"
            id="lbl-precio"
            placeholder={focusedField === 'precio' ? '' : ''}
            value={form.precio}
            onChange={handleChange}
            onFocus={() => handleFocus('precio')}
            onBlur={handleBlur}
            required
            autoComplete="off"/>
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="lbl-stock" className='alta-form__label'>Stock</label>
          <input
            className='alta-form__input'
            type="number"
            name="stock"
            id="lbl-stock"
            placeholder={focusedField === 'stock' ? '' : ''}
            onFocus={() => handleFocus('stock')}
            onBlur={handleBlur}
            required
            value = {form.stock}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="lbl-marca" className='alta-form__label'>Marca</label>
          <input
            className='alta-form__input'
            type="text"
            name="marca"
            id="lbl-marca"
            placeholder={focusedField === 'marca' ? '' : ''}
            onFocus={() => handleFocus('marca')}
            onBlur={handleBlur}
            required
            maxLength="15"
            value = {form.marca}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="lbl-categoria" className='alta-form__label'>Categoría</label>
          <input
            className='alta-form__input'
            type="text"
            name="categoria"
            id="lbl-categoria"
            placeholder={focusedField === 'categoria' ? '' : ''}
            onFocus={() => handleFocus('categoria')}
            onBlur={handleBlur}
            required
            maxLength="15"
            value = {form.categoria}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="lbl-detalles" className='alta-form__label'>Detalles</label>
          <input
            className='alta-form__input'
            type="text"
            name="detalles"
            id="lbl-detalles"
            placeholder={focusedField === 'detalles' ? '' : ''}
            onFocus={() => handleFocus('detalles')}
            onBlur={handleBlur}
            required
            maxLength="200"
            value = {form.detalles}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <div className='alta-form__input-container'>
          <p className='alta-form__label'>Foto</p>
          <DragDrop setFoto={setFoto} srcImagen={srcImagen} setSrcImagen={setSrcImagen} />
          {showAviso && <p className='alta-form__alert'>La foto es requerida</p>}
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="lbl-envio" className='alta-form__label'>Envío</label>
          <input
            className='alta-form__input'
            type="checkbox"
            name="envio"
            id="lbl-envio"
            checked = {form.envio}
            onChange={handleChange}
            autoComplete='off'
          />
          <span className="alta-form__custom-checkbox"></span>
        </div>

        <div className="alta-form__buttons">
          <button className="alta-form__button alta-form__button--send" type="submit">Enviar</button>
          <button className="alta-form__button alta-form__button--delete" type="reset" onClick={handleReset}>Limpiar</button>
        </div>
      </form>
    </div>

  )
}


export default Formulario