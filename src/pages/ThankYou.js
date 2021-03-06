import { Link } from 'gatsby';
import React from 'react';
import Seo from '../components/seo';
import {Purchase, Button} from '../styles/components';

const ThankYou = () => (
    <>
        <Seo title='Compra Exitosa' />
        <Purchase>
            <h2>Compra Exitosa</h2>
            <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
            <p>¡Te esperamos!</p>
            <span role="img" aria-label='emoji'>💚</span>
            <Link to="/">
                <Button>Volver al Catalogo</Button>
            </Link>
        </Purchase>
    </>
);

export default ThankYou;