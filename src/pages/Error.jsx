import './Error.scss'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
            <img src="/img/error404.webp" alt="Error 404" className='error__img'/>
            <h1>Lo sentimos, la página que buscas no se encuentra.</h1>
            <p>Te invito a que ingreses al inicio</p>
            <Link to="/inicio" className='error__button'>Inicio</Link>
        </div>
    );
};

export default Error;
