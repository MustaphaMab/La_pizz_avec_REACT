import React from 'react';
import button from '../components/button';
import { Button } from 'bootstrap';


function accueil() {
    return (
        <div>
            <h1>LA PIZZ'</h1>
            <button onClick={() => alert('Le bouton fonctionne !')}>Test bouton</button>
        </div>
    );
}

export default accueil;