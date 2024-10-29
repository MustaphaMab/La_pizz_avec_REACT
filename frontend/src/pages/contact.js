import React from "react";

function contact() {
    return (
        <div>
             <h1>Contactez-nous</h1>
            <p>Téléphone : 04 42 59 65 98</p>
            <p>Adresse : 123 Rue du Bon Gout, Vitrolles, France</p>
            <form>
                <label> Nom:  </label>
                <input type="text" placeholder="Votre nom" >  </input>
                <textarea placeholder="Votre message"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default contact;