import React, { Component } from "react";
import Usuario from "../Class/Usuario";

class ComponenteUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = { usuario: new Usuario(1, "Daniel", "Plaza", "+56984449066", "dp12@gmail.com", "Martes 15:00 hrs.") };
    }

    render() {
        const { usuario } = this.state;

        return (
            <div>
                <h3>Datos del usuario</h3>
                <p>{usuario}</p>
            </div>
        );
    }
}

export default ComponenteUsuario;
