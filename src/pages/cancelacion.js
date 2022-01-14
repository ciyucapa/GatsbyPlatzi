import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import {Purchase, Button} from '../styles/components';

const Cancelacion = () => (
    <>
        <SEO title='Compra Cancelada' />
        <Purchase>
            <h2>Compra Cancelada</h2>
            <p>¡Lo sentimos,!</p>
            <p>¡Te esperamos!</p>
            <span role="img" aria-label='emoji'>💚</span>
            <Link to="/">
                <Button>Volver al Catalogo</Button>
            </Link>
        </Purchase>
    </>
);

export default Cancelacion;