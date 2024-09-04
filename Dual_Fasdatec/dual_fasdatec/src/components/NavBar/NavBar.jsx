import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <div className="NavBar">
                <img src="src/assets/img/Blue Education Center logo.png" alt="" />
                <a href="">Comida Fav</a>
                <a href="">Gustos Musicales</a>
                <a href="">Hobbies</a>
                <a href="">Habilidades</a>
                
                <input  type="text" name="" id="" placeholder="Busqueda" />

                <button>Iniciar Sesion</button>


            </div>
        </>
    );
}

export default NavBar;
