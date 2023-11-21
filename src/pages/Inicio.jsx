import { useContext } from 'react';
import ProductoContext from '../contexts/ProductoContext';

import Card from '../components/Card';
import TypeInicio from '../components/typewritters/TypeInicio'

import './Inicio.scss';

const Inicio = () => {
    const { productos } = useContext(ProductoContext);

    return (
        <main>
            <section className='hero'>
                <div className='heading'>
                    <header className='heading__header'>
                        <h1>Compra el planeta de tus sueños</h1>
                        <span> <TypeInicio /> </span>
                    </header>
                </div>

                <div className='cards-container'>
                    {productos && productos.map((producto, idx) => (
                            <Card key={idx} producto={producto} />
                      ))}
                </div>
            </section>
        </main>
    );
};

export default Inicio;
