import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => {
    return (
        <nav className='navigator'>
            <Link to="/">Home</Link>
            <Link to="/pokedex">Pokedex</Link>
            <Link to="/contact">Contact</Link>
            
        </nav>
    );
}

export default Navigator;
