import './Header.scss'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <>
      <header className="main-header">
        <input type="checkbox" id="menu" />

        <Navbar />

        <div className="search-bar">

          <Link to="/inicio" className="search-bar__logo-container" aria-label="Logo Galaxy Shop"> </Link>

          <form action="#" className="search-bar__form-container">
            {/* <label htmlFor="busqueda" className="search-bar__form-label">Buscar:</label> */}
            {/* <input type="search" className="search-bar__form-search" id="busqueda" /> */}
            <input className="search-bar__form-search"/>
            {/* <button type="submit" className="search-bar__form-submit"> */}
            <button className="search-bar__form-submit" disabled>
              <FontAwesomeIcon icon={faSearch} className="search-bar__form-icon" />
            </button>
          </form>

          <Link className="search-bar__carrito-container" to= "/carrito" aria-label="Logo Galaxy Shop"> <FontAwesomeIcon className='search-bar__carrito-color' aria-label="Carrito Shop" icon={faShoppingCart} size="xl"/> </Link>

          <div className="menu-toogle">
            <label htmlFor="menu" className="menu-toogle__label">
              <span className="menu-toogle__top-bread"></span>
              <span className="menu-toogle__meat"></span>
              <span className="menu-toogle__bottom-bread"></span>
            </label>
          </div>

        </div>
    </header>
    </>
  )
}

export default Header