import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as farEnvelope, faPhone as fasPhone, faMapMarkerAlt as fasMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import TypeContacto from '../components/typewritters/TypeContacto';

import './Contacto.scss'


const Contacto = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main>
        <section className='main-form '>

            <div className='heading'>
              <header className='heading__header'>
                  <h1>Contacto</h1>
                  <span> <TypeContacto/>  </span>
              </header>
            </div>

            <form action='https://formspree.io/f/mwkdlaoz' method='POST' className='form-container'>
                <div className='form-container__entry-area'>
                    <input type='text' id='nombre' name='nombre' required maxLength='30' autoComplete='off'/>
                    <label className='form-container__labels' htmlFor='nombre'>Nombre</label>
                </div>

                <div className='form-container__entry-area'>
                    <input type='text' id='apellido' name='apellido' required maxLength='30' autoComplete='off'/>
                    <label className='form-container__labels' htmlFor='apellido'>Apellido</label>
                </div>

                <div className='form-container__entry-area'>
                    <input type='text' id='email' name='email' required maxLength='30' autoComplete='off'/>
                    <label className='form-container__labels' htmlFor='email'>Correo</label>
                </div>

                <div className='form-container__entry-area'>
                    <label htmlFor='interest'></label>
                    <select id='interest' name='interest' className='form-container__labels form-container__select' required >
                        <option value='' >Consulta</option>
                        <option value='buy-lands'>Terrenos y parcelas</option>
                        <option value='certifieds'>Escrituras y documentos</option>
                        <option value='discover-planet'>Descubrir Planetas</option>
                        <option value='passport'>Adquirir Pasaporte Galáctico</option>
                        <option value='spacesuits'>Comprar Traje Astronauta</option>
                        <option value='space-trip'>Viajar al Espacio</option>
                        <option value='wifi-satellite'>Obtener Satélite WiFi</option>
                        <option value='other'>Otro Interés</option>
                    </select>
                </div>

                <div className='form-container__entry-area'>
                    <label className='form-container__labels' htmlFor='comentarios'></label>
                    <textarea className='form-container__textarea' id='comentarios' name='comentarios' rows='2' cols='20'
                        placeholder='Mensaje' maxLength='160'></textarea>
                </div>

                <div className='form-container__buttons'>
                    <button className='form-container__button form-container__button--send' type='submit'>Enviar</button>
                    <button className='form-container__button form-container__button--delete' type='reset'>Borrar</button>
                </div>
            </form>
          </section>
          
        <div className='main-form ovni-container' data-aos='zoom-in-up' data-aos-duration='1000'>
            <div className='ovni-container__ovni'>
                  <div className='ovni-container__capsule'>
                      <a href="mailto:eddev.jobs@gmail.com">
                        <FontAwesomeIcon icon={farEnvelope} className='ovni-container__icon' />
                      </a>
                  </div>
                <div className='ovni-container__dish'>
                    <p className='ovni-container__dish-text'>eddev.jobs@gmail.com</p>
                </div>
            </div>
            <div className='ovni-container__ovni'>
                  <div className='ovni-container__capsule'>
                      <a href="https://web.whatsapp.com/send?phone=541125473411" target='_blank' rel='noreferrer' className='ovni-container__link'>
                      <FontAwesomeIcon icon={fasPhone} className='ovni-container__icon' />
                    </a>
                  </div>
                <div className='ovni-container__dish'>
                    <p className='ovni-container__dish-text'>(54) 11 2547-3411</p>
                </div>
            </div>
            <div className='ovni-container__ovni'>
                  <div className='ovni-container__capsule'>
                      <a href="https://maps.app.goo.gl/5ndKtoxvZyYpvykPA" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={fasMapMarkerAlt} className='ovni-container__icon' />
                      </a>
                  </div>
                <div className='ovni-container__dish'>
                    <p className='ovni-container__dish-text'>Florida, EE. UU.</p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contacto